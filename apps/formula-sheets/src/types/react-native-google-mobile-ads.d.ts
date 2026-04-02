declare module 'react-native-google-mobile-ads' {
  import { Component } from 'react';

  export const TestIds: {
    ADAPTIVE_BANNER: string;
    BANNER: string;
    INTERSTITIAL: string;
    REWARDED: string;
  };

  export enum BannerAdSize {
    BANNER = 'BANNER',
    FULL_BANNER = 'FULL_BANNER',
    LARGE_BANNER = 'LARGE_BANNER',
    LEADERBOARD = 'LEADERBOARD',
    MEDIUM_RECTANGLE = 'MEDIUM_RECTANGLE',
    ANCHORED_ADAPTIVE_BANNER = 'ANCHORED_ADAPTIVE_BANNER',
  }

  interface BannerAdProps {
    unitId: string;
    size: BannerAdSize;
    onAdLoaded?: () => void;
    onAdFailedToLoad?: (error: any) => void;
  }

  export class BannerAd extends Component<BannerAdProps> {}
}
