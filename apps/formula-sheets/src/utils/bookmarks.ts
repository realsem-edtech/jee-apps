import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARKS_KEY = 'realsem_bookmarks';

export async function getBookmarks(): Promise<string[]> {
  try {
    const data = await AsyncStorage.getItem(BOOKMARKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export async function addBookmark(formulaId: string): Promise<void> {
  const bookmarks = await getBookmarks();
  if (!bookmarks.includes(formulaId)) {
    bookmarks.push(formulaId);
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
}

export async function removeBookmark(formulaId: string): Promise<void> {
  const bookmarks = await getBookmarks();
  const filtered = bookmarks.filter((id) => id !== formulaId);
  await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filtered));
}

export async function isBookmarked(formulaId: string): Promise<boolean> {
  const bookmarks = await getBookmarks();
  return bookmarks.includes(formulaId);
}

export async function toggleBookmark(formulaId: string): Promise<boolean> {
  const bookmarked = await isBookmarked(formulaId);
  if (bookmarked) {
    await removeBookmark(formulaId);
    return false;
  } else {
    await addBookmark(formulaId);
    return true;
  }
}
