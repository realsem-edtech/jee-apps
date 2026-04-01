import { Formula } from '../../types';

export const alcoholsPhenolsEthersFormulas: Formula[] = [
  {
    id: 'lucas-test',
    chapterId: 'alcohols-phenols-ethers',
    name: 'Lucas Test for Alcohols',
    equation: 'ROH + HCl \\xrightarrow{ZnCl_2} RCl + H_2O',
    contentType: 'latex',
    variables: {
      'ZnCl_2': 'Lucas reagent (anhydrous ZnCl₂ + conc. HCl)',
    },
    useCases: [
      '3° alcohol: immediate turbidity (fastest SN1)',
      '2° alcohol: turbidity in 5 minutes',
      '1° alcohol: no reaction at room temperature',
    ],
    tags: ['organic', 'alcohols', 'lucas test', 'classification'],
  },
  {
    id: 'acidity-alcohols-phenols',
    chapterId: 'alcohols-phenols-ethers',
    name: 'Acidity Order: Phenols vs Alcohols',
    equation: 'ArOH > H_2O > ROH \\quad (\\text{acidity})',
    contentType: 'latex',
    variables: {
      'ArOH': 'Phenol (pKa ≈ 10)',
      'ROH': 'Alcohol (pKa ≈ 16-18)',
    },
    useCases: [
      'Phenol is acidic due to resonance stabilization of phenoxide ion',
      'Phenol dissolves in NaOH but not NaHCO₃',
      'Electron-withdrawing groups on ring increase phenol acidity',
    ],
    tags: ['organic', 'acidity', 'phenol', 'alcohol'],
  },
  {
    id: 'williamson-synthesis',
    chapterId: 'alcohols-phenols-ethers',
    name: 'Williamson Ether Synthesis',
    equation: 'R\\text{-}ONa + R\'\\text{-}X \\rightarrow R\\text{-}O\\text{-}R\' + NaX',
    contentType: 'latex',
    variables: {
      'R\\text{-}ONa': 'Sodium alkoxide',
      'R\'\\text{-}X': 'Primary alkyl halide (SN2)',
    },
    useCases: [
      'Best method for preparing unsymmetrical ethers',
      'Must use 1° alkyl halide to avoid elimination',
      'Sodium alkoxide acts as nucleophile',
    ],
    tags: ['organic', 'ethers', 'williamson synthesis', 'SN2'],
  },
  {
    id: 'dehydration-alcohols',
    chapterId: 'alcohols-phenols-ethers',
    name: 'Dehydration of Alcohols',
    equation: 'ROH \\xrightarrow{H_2SO_4, \\Delta} \\text{Alkene} + H_2O',
    contentType: 'latex',
    variables: {
      'H_2SO_4': 'Concentrated sulfuric acid (catalyst)',
    },
    useCases: [
      '3° alcohols dehydrate easiest (lowest temperature: 443K)',
      'Zaitsev product is major (most substituted alkene)',
      '1° alcohols need highest temperature (443K)',
    ],
    tags: ['organic', 'alcohols', 'dehydration', 'elimination'],
  },
];
