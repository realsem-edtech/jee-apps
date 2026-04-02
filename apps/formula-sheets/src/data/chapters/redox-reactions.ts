import { Formula } from '../../types';

export const redoxReactionsFormulas: Formula[] = [
  {
    id: 'oxidation-number-rules',
    chapterId: 'redox-reactions',
    name: 'Oxidation Number Rules',
    equation: '\\sum \\text{O.N.} = \\text{charge on species}',
    contentType: 'latex',
    variables: {
      '\\text{O.N.}': 'Oxidation number of each atom',
    },
    useCases: [
      'Assigning oxidation states to atoms in a compound',
      'Identifying oxidizing and reducing agents',
      'Balancing redox equations by oxidation number method',
    ],
    tags: ['redox', 'oxidation number', 'oxidation state'],
  },
  {
    id: 'n-factor-acid-base',
    chapterId: 'redox-reactions',
    name: 'n-Factor for Acids and Bases',
    equation: 'n\\text{-factor} = \\text{basicity (acid) or acidity (base)}',
    contentType: 'latex',
    variables: {
      'n\\text{-factor}': 'Equivalence factor',
    },
    useCases: [
      'Calculating normality from molarity',
      'Titration calculations using equivalents',
      'H₂SO₄ has n-factor 2, NaOH has n-factor 1',
    ],
    tags: ['redox', 'n-factor', 'normality', 'equivalents'],
  },
  {
    id: 'n-factor-redox',
    chapterId: 'redox-reactions',
    name: 'n-Factor for Redox Reactions',
    equation: 'n\\text{-factor} = |\\Delta \\text{O.N.}| \\times \\text{atoms}',
    contentType: 'latex',
    variables: {
      'n\\text{-factor}': 'Number of electrons transferred per formula unit',
      '\\Delta \\text{O.N.}': 'Change in oxidation number per atom',
      '\\text{atoms}': 'Number of atoms undergoing change',
    },
    useCases: [
      'Finding equivalents in redox titrations (e.g., KMnO₄ vs oxalic acid)',
      'n-factor of KMnO₄ in acidic medium = 5',
      'n-factor of K₂Cr₂O₇ = 6',
    ],
    tags: ['redox', 'n-factor', 'electron transfer'],
  },
  {
    id: 'law-of-equivalents',
    chapterId: 'redox-reactions',
    name: 'Law of Equivalents',
    equation: 'N_1 V_1 = N_2 V_2',
    contentType: 'latex',
    variables: {
      'N_1': 'Normality of solution 1',
      'V_1': 'Volume of solution 1',
      'N_2': 'Normality of solution 2',
      'V_2': 'Volume of solution 2',
    },
    useCases: [
      'All titration calculations (acid-base, redox, precipitation)',
      'Equivalents of oxidant = equivalents of reductant at endpoint',
      'Back titration problems',
    ],
    tags: ['redox', 'titration', 'equivalents', 'normality'],
  },
];
