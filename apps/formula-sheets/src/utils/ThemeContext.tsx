import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemePreference = 'system' | 'light' | 'dark';

interface ThemeColors {
  primary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  tagBg: string;
  tagText: string;
}

interface ThemeContextType {
  colors: ThemeColors;
  isDark: boolean;
  preference: ThemePreference;
  setPreference: (pref: ThemePreference) => void;
}

const lightColors: ThemeColors = {
  primary: '#1A56DB',
  accent: '#F97316',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#1E293B',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  tagBg: '#EFF6FF',
  tagText: '#1D4ED8',
};

const darkColors: ThemeColors = {
  primary: '#1A56DB',
  accent: '#F97316',
  background: '#0F172A',
  surface: '#1E293B',
  text: '#F1F5F9',
  textSecondary: '#94A3B8',
  border: '#334155',
  tagBg: '#1E3A5F',
  tagText: '#93C5FD',
};

const THEME_KEY = 'realsem_theme';

const ThemeContext = createContext<ThemeContextType>({
  colors: lightColors,
  isDark: false,
  preference: 'system',
  setPreference: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [preference, setPreferenceState] = useState<ThemePreference>('system');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then((saved) => {
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        setPreferenceState(saved);
      }
    }).catch(() => {}).finally(() => setHydrated(true));
  }, []);

  function setPreference(pref: ThemePreference) {
    setPreferenceState(pref);
    AsyncStorage.setItem(THEME_KEY, pref).catch(() => {});
  }

  const isDark =
    preference === 'dark' || (preference === 'system' && systemScheme === 'dark');

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ colors, isDark, preference, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
