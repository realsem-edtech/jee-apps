import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { getFormulasByChapter } from '../data/contentLayer';
import { colors, spacing, fontSize } from '../utils/theme';
import AdBanner from '../components/AdBanner';

type Props = NativeStackScreenProps<RootStackParamList, 'ChapterDetail'>;

export default function ChapterDetailScreen({ route, navigation }: Props) {
  const { chapterId, chapterName } = route.params;
  const formulaList = getFormulasByChapter(chapterId);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={formulaList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={styles.chapterHeader}>
            {chapterName} ({formulaList.length} formulas)
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('FormulaDetail', { formulaId: item.id })
            }
          >
            <Text style={styles.formulaName}>{item.name}</Text>
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
      <AdBanner />
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
  chapterHeader: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.md,
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
});
