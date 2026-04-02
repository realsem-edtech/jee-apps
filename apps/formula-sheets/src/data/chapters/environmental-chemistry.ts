import { Formula } from '../../types';

export const environmentalChemistryFormulas: Formula[] = [
  {
    id: 'bod',
    chapterId: 'environmental-chemistry',
    name: 'Biochemical Oxygen Demand (BOD)',
    equation: 'BOD = \\text{O}_2 \\text{ consumed by microorganisms in 5 days at 20°C}',
    contentType: 'latex',
    variables: {
      'BOD': 'Biochemical oxygen demand (mg/L)',
    },
    useCases: [
      'Measuring organic pollution in water',
      'Higher BOD = more polluted water',
      'Clean water BOD < 5 mg/L, polluted water > 17 mg/L',
    ],
    tags: ['environment', 'BOD', 'water pollution'],
  },
  {
    id: 'cod',
    chapterId: 'environmental-chemistry',
    name: 'Chemical Oxygen Demand (COD)',
    equation: 'COD \\geq BOD \\quad (\\text{always})',
    contentType: 'latex',
    variables: {
      'COD': 'Chemical oxygen demand — O₂ needed for complete chemical oxidation',
      'BOD': 'Biochemical oxygen demand — O₂ needed for biological oxidation',
    },
    useCases: [
      'COD includes both biodegradable and non-biodegradable matter',
      'Quick assessment of total organic pollution',
      'COD/BOD ratio indicates biodegradability',
    ],
    tags: ['environment', 'COD', 'water pollution'],
  },
  {
    id: 'ozone-depletion',
    chapterId: 'environmental-chemistry',
    name: 'Ozone Depletion Mechanism',
    equation: 'CF_2Cl_2 \\xrightarrow{UV} CF_2Cl^\\bullet + Cl^\\bullet',
    contentType: 'latex',
    variables: {
      'CF_2Cl_2': 'CFC (Freon) — chlorofluorocarbon',
      'Cl^\\bullet': 'Chlorine radical (destroys ozone catalytically)',
    },
    useCases: [
      'One Cl radical can destroy ~100,000 O₃ molecules',
      'Cl• + O₃ → ClO + O₂, then ClO + O → Cl• + O₂',
      'Montreal Protocol banned CFCs',
    ],
    tags: ['environment', 'ozone depletion', 'CFC', 'chlorine radical'],
  },
];
