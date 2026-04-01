import {
  getChapters,
  getFormulasByChapter,
  getFormulaById,
  searchFormulas,
  getFormulaCountByChapter,
} from '../src/data/contentLayer';

describe('Content Data Layer', () => {
  describe('getChapters', () => {
    it('returns all chapters sorted by order', () => {
      const chapters = getChapters();
      expect(chapters.length).toBeGreaterThan(0);
      for (let i = 1; i < chapters.length; i++) {
        expect(chapters[i].order).toBeGreaterThanOrEqual(chapters[i - 1].order);
      }
    });

    it('each chapter has required fields', () => {
      const chapters = getChapters();
      for (const chapter of chapters) {
        expect(chapter.id).toBeTruthy();
        expect(chapter.name).toBeTruthy();
        expect(chapter.subject).toBeTruthy();
        expect(typeof chapter.order).toBe('number');
      }
    });
  });

  describe('getFormulasByChapter', () => {
    it('returns formulas for a valid chapter', () => {
      const formulas = getFormulasByChapter('thermodynamics');
      expect(formulas.length).toBeGreaterThan(0);
      for (const formula of formulas) {
        expect(formula.chapterId).toBe('thermodynamics');
      }
    });

    it('returns empty array for non-existent chapter', () => {
      const formulas = getFormulasByChapter('nonexistent');
      expect(formulas).toEqual([]);
    });
  });

  describe('getFormulaById', () => {
    it('returns the correct formula', () => {
      const formula = getFormulaById('first-law');
      expect(formula).toBeDefined();
      expect(formula!.name).toBe('First Law of Thermodynamics');
    });

    it('returns undefined for non-existent formula', () => {
      const formula = getFormulaById('nonexistent');
      expect(formula).toBeUndefined();
    });

    it('each formula has all required fields', () => {
      const formula = getFormulaById('gibbs-free-energy');
      expect(formula).toBeDefined();
      expect(formula!.id).toBeTruthy();
      expect(formula!.chapterId).toBeTruthy();
      expect(formula!.name).toBeTruthy();
      expect(formula!.equation).toBeTruthy();
      expect(formula!.contentType).toBeTruthy();
      expect(Object.keys(formula!.variables).length).toBeGreaterThan(0);
      expect(formula!.useCases.length).toBeGreaterThanOrEqual(3);
      expect(formula!.tags.length).toBeGreaterThan(0);
    });
  });

  describe('searchFormulas', () => {
    it('returns results for a valid query', () => {
      const results = searchFormulas('entropy');
      expect(results.length).toBeGreaterThan(0);
    });

    it('ranks exact name matches highest', () => {
      const results = searchFormulas('gibbs free energy');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].name).toContain('Gibbs');
    });

    it('finds formulas by tag', () => {
      const results = searchFormulas('spontaneity');
      expect(results.length).toBeGreaterThan(0);
    });

    it('finds formulas by variable description', () => {
      const results = searchFormulas('pressure');
      expect(results.length).toBeGreaterThan(0);
    });

    it('returns empty array for empty query', () => {
      expect(searchFormulas('')).toEqual([]);
      expect(searchFormulas('   ')).toEqual([]);
    });

    it('does not crash on special characters', () => {
      expect(() => searchFormulas('$^&*()')).not.toThrow();
      expect(() => searchFormulas('\\Delta')).not.toThrow();
    });
  });

  describe('getFormulaCountByChapter', () => {
    it('returns correct count for a chapter', () => {
      const count = getFormulaCountByChapter('thermodynamics');
      const formulas = getFormulasByChapter('thermodynamics');
      expect(count).toBe(formulas.length);
    });

    it('returns 0 for non-existent chapter', () => {
      expect(getFormulaCountByChapter('nonexistent')).toBe(0);
    });
  });
});
