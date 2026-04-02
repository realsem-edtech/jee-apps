import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { RootStackParamList, Formula } from '../types';
import { getFormulaById } from '../data/contentLayer';
import { getBookmarks } from '../utils/bookmarks';
import { colors, spacing, fontSize } from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Bookmarks'>;

export default function BookmarksScreen({ navigation }: Props) {
  const [bookmarkedFormulas, setBookmarkedFormulas] = useState<Formula[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadBookmarks();
    }, [])
  );

  async function loadBookmarks() {
    const ids = await getBookmarks();
    const formulas = ids
      .map((id) => getFormulaById(id))
      .filter((f): f is Formula => f !== undefined);
    setBookmarkedFormulas(formulas);
  }

  if (bookmarkedFormulas.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No bookmarks yet</Text>
          <Text style={styles.emptyText}>
            Tap the bookmark icon on any formula to save it here for quick access.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bookmarkedFormulas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('FormulaDetail', { formulaId: item.id })
            }
          >
            <Text style={styles.formulaName}>{item.name}</Text>
            <Text style={styles.chapterId}>{item.chapterId.replace(/-/g, ' ')}</Text>
            <View style={styles.tagsRow}>
              {item.tags.slice(0, 3).map((tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  formulaName: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    color: colors.text,
  },
  chapterId: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    textTransform: 'capitalize',
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
    gap: spacing.xs,
  },
  tag: {
    backgroundColor: colors.tagBg,
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  tagText: {
    fontSize: fontSize.sm,
    color: colors.tagText,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  emptyTitle: {
    fontSize: fontSize.xl,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  emptyText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});
