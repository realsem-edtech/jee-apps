declare module 'mixpanel-react-native' {
  export class Mixpanel {
    constructor(token: string, trackAutomaticEvents?: boolean);
    init(): Promise<void>;
    track(event: string, properties?: Record<string, any>): void;
    identify(id: string): void;
    reset(): void;
  }
}
