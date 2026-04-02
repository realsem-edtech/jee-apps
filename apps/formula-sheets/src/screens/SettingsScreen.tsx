import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useTheme, ThemePreference } from '../utils/ThemeContext';
import { spacing, fontSize } from '../utils/theme';

const options: { label: string; value: ThemePreference }[] = [
  { label: 'System Default', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

export default function SettingsScreen() {
  const { colors, preference, setPreference } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.sectionTitle, { color: colors.primary }]}>Theme</Text>
      <View style={[styles.card, { backgroundColor: colors.surface }]}>
        {options.map((opt) => (
          <TouchableOpacity
            key={opt.value}
            style={[
              styles.option,
              { borderBottomColor: colors.border },
            ]}
            onPress={() => setPreference(opt.value)}
          >
            <Text style={[styles.optionText, { color: colors.text }]}>
              {opt.label}
            </Text>
            <View
              style={[
                styles.radio,
                { borderColor: colors.primary },
                preference === opt.value && { backgroundColor: colors.primary },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md + 2,
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: fontSize.md,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
  },
});
