declare module 'react-native-webview' {
  import { Component } from 'react';
  import { ViewStyle, StyleProp } from 'react-native';

  interface WebViewProps {
    source?: { html?: string; uri?: string };
    style?: StyleProp<ViewStyle>;
    scrollEnabled?: boolean;
    showsVerticalScrollIndicator?: boolean;
    showsHorizontalScrollIndicator?: boolean;
    originWhitelist?: string[];
    javaScriptEnabled?: boolean;
    onMessage?: (event: any) => void;
  }

  export class WebView extends Component<WebViewProps> {}
}
