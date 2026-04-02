import { Mixpanel } from 'mixpanel-react-native';

const MIXPANEL_TOKEN = '617e32fe0191997f01f8addbffe12be2';

const mixpanel = new Mixpanel(MIXPANEL_TOKEN, false);

export async function initAnalytics(): Promise<void> {
  await mixpanel.init();
}

export function trackAppOpened(): void {
  mixpanel.track('app_opened');
}

export function trackChapterViewed(chapterName: string): void {
  mixpanel.track('chapter_viewed', { chapter: chapterName });
}

export function trackFormulaViewed(formulaName: string): void {
  mixpanel.track('formula_viewed', { formula: formulaName });
}

export function trackSearchPerformed(query: string): void {
  mixpanel.track('search_performed', { query });
}

export function trackBookmarkToggled(formulaName: string, action: 'add' | 'remove'): void {
  mixpanel.track('bookmark_toggled', { formula: formulaName, action });
}

export function trackThemeChanged(theme: string): void {
  mixpanel.track('theme_changed', { theme });
}
