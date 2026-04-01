import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MathView from 'react-native-math-view';
import { RootStackParamList } from '../types';
import { getFormulaById } from '../data/contentLayer';
import { colors, spacing, fontSize } from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'FormulaDetail'>;

export default function FormulaDetailScreen({ route }: Props) {
  const { formulaId } = route.params;
  const formula = getFormulaById(formulaId);

  if (!formula) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Formula not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.formulaName}>{formula.name}</Text>

        <View style={styles.equationCard}>
          <MathView
            math={formula.equation}
            style={styles.equation}
          />
        </View>

        <Text style={styles.sectionTitle}>Variables</Text>
        <View style={styles.section}>
          {Object.entries(formula.variables).map(([symbol, description]) => (
            <View key={symbol} style={styles.variableRow}>
              <MathView
                math={symbol}
                style={styles.variableSymbol}
              />
              <Text style={styles.variableDesc}>{description}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>When to Use</Text>
        <View style={styles.section}>
          {formula.useCases.map((useCase, index) => (
            <View key={index} style={styles.useCaseRow}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={styles.useCaseText}>{useCase}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Tags</Text>
        <View style={styles.tagsRow}>
          {formula.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  errorText: {
    fontSize: fontSize.lg,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
  formulaName: {
    fontSize: fontSize.xl,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.lg,
  },
  equationCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  equation: {
    color: colors.text,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  section: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  variableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  variableSymbol: {
    color: colors.text,
    marginRight: spacing.sm,
  },
  variableDesc: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    flex: 1,
  },
  useCaseRow: {
    flexDirection: 'row',
    paddingVertical: spacing.xs,
  },
  bullet: {
    fontSize: fontSize.md,
    color: colors.accent,
    marginRight: spacing.sm,
    fontWeight: '700',
  },
  useCaseText: {
    fontSize: fontSize.md,
    color: colors.text,
    flex: 1,
    lineHeight: 22,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tag: {
    backgroundColor: colors.tagBg,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  tagText: {
    fontSize: fontSize.sm,
    color: colors.tagText,
    fontWeight: '500',
  },
});
