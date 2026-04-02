import { Formula } from '../../types';

export const aminesFormulas: Formula[] = [
  {
    id: 'basicity-amines',
    chapterId: 'amines',
    name: 'Basicity Order of Amines (Gas Phase)',
    equation: '3° > 2° > 1° > NH_3 \\quad (\\text{gas phase})',
    contentType: 'latex',
    variables: {
      '3°': 'Tertiary amine (most +I effect)',
      'NH_3': 'Ammonia (no alkyl groups)',
    },
    useCases: [
      'In aqueous solution: 2° > 1° > 3° (solvation effects)',
      '+I effect of alkyl groups increases electron density on N',
      'Aromatic amines (ArNH₂) are weaker bases than aliphatic',
    ],
    tags: ['organic', 'amines', 'basicity', 'base strength'],
  },
  {
    id: 'diazotisation',
    chapterId: 'amines',
    name: 'Diazotisation Reaction',
    equation: 'ArNH_2 + HNO_2 \\xrightarrow{0-5°C} ArN_2^+Cl^- + 2H_2O',
    contentType: 'latex',
    variables: {
      'ArNH_2': 'Primary aromatic amine',
      'HNO_2': 'Nitrous acid (NaNO₂ + HCl)',
      'ArN_2^+': 'Diazonium salt',
    },
    useCases: [
      'Only primary aromatic amines give stable diazonium salts',
      'Must be done at 0-5°C (diazonium decomposes above)',
      'Diazonium salt → phenol, ArX, ArCN, azo dyes',
    ],
    tags: ['organic', 'amines', 'diazotisation', 'diazonium'],
  },
  {
    id: 'hinsberg-test',
    chapterId: 'amines',
    name: 'Hinsberg Test',
    equation: 'RNH_2 + C_6H_5SO_2Cl \\xrightarrow{NaOH} C_6H_5SO_2NHR \\quad (\\text{soluble in NaOH})',
    contentType: 'latex',
    variables: {
      'C_6H_5SO_2Cl': 'Benzenesulfonyl chloride (Hinsberg reagent)',
    },
    useCases: [
      '1° amine: product dissolves in NaOH (has acidic N-H)',
      '2° amine: product is insoluble in NaOH (no N-H)',
      '3° amine: no reaction with sulfonyl chloride',
    ],
    tags: ['organic', 'amines', 'hinsberg test', 'classification'],
  },
  {
    id: 'carbylamine-test',
    chapterId: 'amines',
    name: 'Carbylamine Test (Isocyanide Test)',
    equation: 'RNH_2 + CHCl_3 + 3KOH \\rightarrow RNC + 3KCl + 3H_2O',
    contentType: 'latex',
    variables: {
      'RNC': 'Isocyanide (foul smell)',
      'CHCl_3': 'Chloroform',
    },
    useCases: [
      'Only primary amines give positive test',
      'Detected by offensive smell of isocyanide',
      'Used to distinguish 1° amines from 2° and 3°',
    ],
    tags: ['organic', 'amines', 'carbylamine test', 'isocyanide'],
  },
];
