declare module 'react-native-math-view' {
  import { Component } from 'react';
  import { ViewStyle, StyleProp } from 'react-native';

  interface MathViewProps {
    math: string;
    style?: StyleProp<ViewStyle> | { color?: string };
    resizeMode?: 'contain' | 'cover' | 'stretch';
  }

  export default class MathView extends Component<MathViewProps> {}
}
