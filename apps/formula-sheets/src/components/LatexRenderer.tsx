import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

interface LatexRendererProps {
  math: string;
  color?: string;
  fontSize?: number;
}

export default function LatexRenderer({ math, color = '#1E293B', fontSize = 22 }: LatexRendererProps) {
  const estimatedHeight = Math.max(60, math.length > 60 ? 120 : 70);
  const [height, setHeight] = useState(estimatedHeight);

  const html = useMemo(() => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
      <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body {
          width: 100%;
          background: transparent;
          overflow: hidden;
        }
        body {
          padding: 12px 4px;
        }
        #formula {
          color: ${color};
          font-size: ${fontSize}px;
        }
        .katex-display { margin: 0 !important; text-align: center !important; }
      </style>
    </head>
    <body>
      <div id="formula"></div>
      <script>
        try {
          katex.render(${JSON.stringify(math)}, document.getElementById('formula'), {
            throwOnError: false,
            displayMode: true
          });
        } catch(e) {
          document.getElementById('formula').textContent = ${JSON.stringify(math)};
        }

        function fitAndMeasure() {
          var el = document.getElementById('formula');
          var katexEl = el.querySelector('.katex-display') || el;
          var bodyWidth = document.body.clientWidth - 8;
          var contentWidth = katexEl.scrollWidth;

          if (contentWidth > bodyWidth * 0.95 && contentWidth > 0) {
            var scale = (bodyWidth * 0.95) / contentWidth;
            scale = Math.max(scale, 0.35);
            katexEl.style.transformOrigin = 'top left';
            katexEl.style.transform = 'scale(' + scale + ')';
            katexEl.style.width = (100 / scale) + '%';
          }

          setTimeout(function() {
            var h = Math.max(el.scrollHeight + 24, 40);
            window.ReactNativeWebView.postMessage(JSON.stringify({ height: h }));
          }, 50);
        }

        setTimeout(fitAndMeasure, 150);
        setTimeout(fitAndMeasure, 500);
      </script>
    </body>
    </html>
  `, [math, color, fontSize]);

  return (
    <View style={[styles.container, { height }]}>
      <WebView
        source={{ html }}
        style={styles.webview}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        originWhitelist={['*']}
        javaScriptEnabled
        onMessage={(event) => {
          try {
            const data = JSON.parse(event.nativeEvent.data);
            if (data.height && data.height > 0) {
              setHeight(Math.max(data.height, 40));
            }
          } catch {}
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  webview: {
    backgroundColor: 'transparent',
  },
});
