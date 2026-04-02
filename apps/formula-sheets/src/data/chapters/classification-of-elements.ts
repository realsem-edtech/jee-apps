import { Formula } from '../../types';

export const classificationOfElementsFormulas: Formula[] = [
  {
    id: 'effective-nuclear-charge',
    chapterId: 'classification-of-elements',
    name: 'Effective Nuclear Charge',
    equation: 'Z_{eff} = Z - \\sigma',
    contentType: 'latex',
    variables: {
      'Z_{eff}': 'Effective nuclear charge',
      'Z': 'Actual atomic number',
      '\\sigma': 'Shielding constant (Slater\'s rules)',
    },
    useCases: [
      'Explaining periodic trends in atomic radius',
      'Comparing ionization energies across a period',
      'Understanding why inner electrons shield outer electrons',
    ],
    tags: ['periodic table', 'effective nuclear charge', 'shielding'],
  },
  {
    id: 'ionization-enthalpy-trend',
    chapterId: 'classification-of-elements',
    name: 'Ionization Enthalpy',
    equation: 'IE: \\text{IE}_1 < \\text{IE}_2 < \\text{IE}_3',
    contentType: 'latex',
    variables: {
      'IE_1': 'First ionization enthalpy',
      'IE_2': 'Second ionization enthalpy',
      'IE_3': 'Third ionization enthalpy',
    },
    useCases: [
      'Successive IEs always increase (removing from more positive ion)',
      'Large jump in IE indicates core electron removal',
      'Comparing IE across periods and groups',
    ],
    tags: ['periodic table', 'ionization enthalpy', 'periodic trends'],
  },
  {
    id: 'electron-gain-enthalpy',
    chapterId: 'classification-of-elements',
    name: 'Electron Gain Enthalpy',
    equation: 'X(g) + e^- \\rightarrow X^-(g) \\quad \\Delta_{eg}H',
    contentType: 'latex',
    variables: {
      '\\Delta_{eg}H': 'Electron gain enthalpy (negative = exothermic)',
      'X': 'Atom in gaseous state',
    },
    useCases: [
      'Halogens have most negative ΔegH (high electron affinity)',
      'Noble gases have positive ΔegH',
      'Comparing tendency to form anions across periods',
    ],
    tags: ['periodic table', 'electron affinity', 'electron gain enthalpy'],
  },
  {
    id: 'electronegativity-pauling',
    chapterId: 'classification-of-elements',
    name: 'Electronegativity (Pauling Scale)',
    equation: '\\chi_A - \\chi_B = 0.208 \\sqrt{\\Delta}',
    contentType: 'latex',
    variables: {
      '\\chi_A, \\chi_B': 'Electronegativity of atoms A and B',
      '\\Delta': 'Extra bond energy = E(A-B) - √[E(A-A)·E(B-B)]',
    },
    useCases: [
      'Predicting bond polarity from electronegativity difference',
      'F is most electronegative (4.0), Cs is least (0.7)',
      'Determining ionic vs covalent character of bonds',
    ],
    tags: ['periodic table', 'electronegativity', 'pauling'],
  },
];
