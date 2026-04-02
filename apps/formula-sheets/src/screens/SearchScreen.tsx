import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Formula } from '../types';
import { searchFormulas } from '../data/contentLayer';
import { colors, spacing, fontSize } from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export default function SearchScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Formula[]>([]);

  const handleSearch = useCallback((text: string) => {
    setQuery(text);
    if (text.trim().length >= 2) {
      setResults(searchFormulas(text));
    } else {
      setResults([]);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search formulas, equations, tags..."
          placeholderTextColor={colors.textSecondary}
          value={query}
          onChangeText={handleSearch}
          autoFocus
          returnKeyType="search"
        />
      </View>
      {query.trim().length >= 2 && results.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No formulas found for "{query}"</Text>
        </View>
      ) : query.trim().length < 2 && query.length > 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Type at least 2 characters to search</Text>
        </View>
      ) : (
        <FlatList
          data={results}
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
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchBar: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  input: {
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    fontSize: fontSize.md,
    color: colors.text,
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
  emptyText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
