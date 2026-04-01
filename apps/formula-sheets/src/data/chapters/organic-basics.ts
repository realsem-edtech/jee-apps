import { Formula } from '../../types';

export const organicBasicsFormulas: Formula[] = [
  {
    id: 'degree-of-unsaturation',
    chapterId: 'organic-basics',
    name: 'Degree of Unsaturation (DBE)',
    equation: 'DBE = \\frac{2C + 2 + N - H - X}{2}',
    contentType: 'latex',
    variables: {
      'DBE': 'Double bond equivalents (index of hydrogen deficiency)',
      'C': 'Number of carbon atoms',
      'N': 'Number of nitrogen atoms',
      'H': 'Number of hydrogen atoms',
      'X': 'Number of halogen atoms',
    },
    useCases: [
      'Determining if a molecule has double bonds or rings',
      'DBE = 1 for one double bond or one ring',
      'DBE = 4 for benzene (3 double bonds + 1 ring)',
    ],
    tags: ['organic', 'degree of unsaturation', 'DBE', 'IHD'],
  },
  {
    id: 'inductive-effect',
    chapterId: 'organic-basics',
    name: 'Inductive Effect Order',
    equation: '-I: \\text{NO}_2 > \\text{CN} > \\text{F} > \\text{Cl} > \\text{Br} > \\text{I}',
    contentType: 'latex',
    variables: {
      '-I': 'Electron-withdrawing inductive effect',
    },
    useCases: [
      'Comparing acidity of carboxylic acids (stronger -I = more acidic)',
      'Stability of carbocations (+I stabilizes)',
      'Effect on reaction rates in nucleophilic substitution',
    ],
    tags: ['organic', 'inductive effect', 'electron withdrawing'],
  },
  {
    id: 'carbocation-stability',
    chapterId: 'organic-basics',
    name: 'Carbocation Stability Order',
    equation: '3° > 2° > 1° > CH_3^+',
    contentType: 'latex',
    variables: {
      '3°': 'Tertiary carbocation (most stable)',
      'CH_3^+': 'Methyl carbocation (least stable)',
    },
    useCases: [
      'Predicting major product in elimination and substitution',
      'Markovnikov addition (H⁺ goes to C with more H)',
      'Rearrangement reactions (hydride/methyl shift to more stable)',
    ],
    tags: ['organic', 'carbocation', 'stability', 'hyperconjugation'],
  },
  {
    id: 'acidity-order',
    chapterId: 'organic-basics',
    name: 'Relative Acidity Order',
    equation: 'RCOOH > ArOH > ROH > H_2O > RH',
    contentType: 'latex',
    variables: {
      'RCOOH': 'Carboxylic acid (most acidic)',
      'ArOH': 'Phenol',
      'ROH': 'Alcohol',
      'RH': 'Alkane (least acidic)',
    },
    useCases: [
      'Predicting which proton is donated in acid-base reactions',
      'Understanding resonance stabilization of conjugate base',
      'pKa ordering for organic functional groups',
    ],
    tags: ['organic', 'acidity', 'pKa', 'acid strength'],
  },
  {
    id: 'homolytic-heterolytic',
    chapterId: 'organic-basics',
    name: 'Bond Fission Types',
    equation: 'A{:}B \\rightarrow A^+ + B^- \\quad (\\text{heterolytic})',
    contentType: 'latex',
    variables: {
      '\\text{heterolytic}': 'Unequal splitting → ions (polar solvents)',
      '\\text{homolytic}': 'Equal splitting → free radicals (UV/heat)',
    },
    useCases: [
      'Heterolytic in polar solvents → ionic intermediates',
      'Homolytic with UV/peroxide → free radical intermediates',
      'Determines SN1/SN2 vs free radical mechanism',
    ],
    tags: ['organic', 'bond fission', 'free radical', 'heterolytic'],
  },
];
