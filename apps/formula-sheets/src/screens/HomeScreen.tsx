import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { getChapters, getFormulaCountByChapter } from '../data/contentLayer';
import { useTheme } from '../utils/ThemeContext';
import { spacing, fontSize } from '../utils/theme';
import AdBanner from '../components/AdBanner';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { colors } = useTheme();
  const chapterList = getChapters();

  const subjectLabel: Record<string, string> = {
    physical: 'Physical Chemistry',
    organic: 'Organic Chemistry',
    inorganic: 'Inorganic Chemistry',
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerTitle}>JEE Formula Sheets</Text>
            <Text style={styles.headerSubtitle}>RealSem</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={() => navigation.navigate('Search')}
            >
              <Text style={styles.headerBtnText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={() => navigation.navigate('Bookmarks')}
            >
              <Text style={styles.headerBtnIcon}>{'\u2606'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={() => navigation.navigate('Settings')}
            >
              <Text style={styles.headerBtnIcon}>{'\u2699'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={chapterList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const count = getFormulaCountByChapter(item.id);
          return (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: colors.surface }]}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('ChapterDetail', {
                  chapterId: item.id,
                  chapterName: item.name,
                })
              }
            >
              <View style={styles.cardContent}>
                <Text style={[styles.chapterName, { color: colors.text }]}>{item.name}</Text>
                <Text style={[styles.subjectTag, { color: colors.textSecondary }]}>
                  {subjectLabel[item.subject] || item.subject}
                </Text>
              </View>
              <View style={[styles.countBadge, { backgroundColor: colors.accent }]}>
                <Text style={styles.countText}>{count}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <AdBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  headerBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: spacing.sm,
  },
  headerBtnText: {
    color: '#FFFFFF',
    fontSize: fontSize.md,
    fontWeight: '600',
  },
  headerBtnIcon: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  headerTitle: {
    fontSize: fontSize.xxl,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: fontSize.md,
    color: 'rgba(255,255,255,0.7)',
    marginTop: spacing.xs,
  },
  list: {
    padding: spacing.md,
  },
  card: {
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardContent: {
    flex: 1,
  },
  chapterName: {
    fontSize: fontSize.lg,
    fontWeight: '600',
  },
  subjectTag: {
    fontSize: fontSize.sm,
    marginTop: spacing.xs,
  },
  countBadge: {
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.md,
  },
  countText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: fontSize.md,
  },
});
