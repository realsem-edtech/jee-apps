import { chapters } from './chapters';
import { formulas } from './formulas';
import { Chapter, Formula } from '../types';

export function getChapters(): Chapter[] {
  return [...chapters].sort((a, b) => a.order - b.order);
}

export function getFormulasByChapter(chapterId: string): Formula[] {
  return formulas.filter((f) => f.chapterId === chapterId);
}

export function getFormulaById(formulaId: string): Formula | undefined {
  return formulas.find((f) => f.id === formulaId);
}

export function searchFormulas(query: string): Formula[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase().trim();

  return formulas
    .map((formula) => {
      let score = 0;

      if (formula.name.toLowerCase().includes(q)) score += 10;
      if (formula.name.toLowerCase() === q) score += 20;

      if (formula.equation.toLowerCase().includes(q)) score += 5;

      for (const key of Object.keys(formula.variables)) {
        if (key.toLowerCase().includes(q)) score += 3;
      }
      for (const desc of Object.values(formula.variables)) {
        if (desc.toLowerCase().includes(q)) score += 3;
      }

      for (const useCase of formula.useCases) {
        if (useCase.toLowerCase().includes(q)) score += 2;
      }

      for (const tag of formula.tags) {
        if (tag.toLowerCase().includes(q)) score += 4;
        if (tag.toLowerCase() === q) score += 6;
      }

      return { formula, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.formula);
}

export function getFormulaCountByChapter(chapterId: string): number {
  return formulas.filter((f) => f.chapterId === chapterId).length;
}
