export type ContentType = 'latex' | 'svg' | 'table';
export type Subject = 'physical' | 'organic' | 'inorganic';

export interface Chapter {
  id: string;
  name: string;
  subject: Subject;
  order: number;
}

export interface Formula {
  id: string;
  chapterId: string;
  name: string;
  equation: string;
  contentType: ContentType;
  variables: Record<string, string>;
  useCases: string[];
  tags: string[];
}

export type RootStackParamList = {
  Home: undefined;
  ChapterDetail: { chapterId: string; chapterName: string };
  FormulaDetail: { formulaId: string };
  Search: undefined;
  Bookmarks: undefined;
  Settings: undefined;
};
