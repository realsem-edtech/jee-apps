import { Formula } from '../../types';

export const hydrocarbonsFormulas: Formula[] = [
  {
    id: 'alkane-general-formula',
    chapterId: 'hydrocarbons',
    name: 'General Formula of Alkanes',
    equation: 'C_nH_{2n+2}',
    contentType: 'latex',
    variables: {
      'n': 'Number of carbon atoms',
    },
    useCases: [
      'Identifying saturated hydrocarbons',
      'Calculating molecular formula from number of carbons',
      'Isomer counting problems',
    ],
    tags: ['hydrocarbons', 'alkanes', 'general formula'],
  },
  {
    id: 'alkene-general-formula',
    chapterId: 'hydrocarbons',
    name: 'General Formula of Alkenes',
    equation: 'C_nH_{2n}',
    contentType: 'latex',
    variables: {
      'n': 'Number of carbon atoms (n ≥ 2)',
    },
    useCases: [
      'One degree of unsaturation (one C=C double bond)',
      'Identifying unsaturated hydrocarbons',
      'Cycloalkanes also follow CₙH₂ₙ',
    ],
    tags: ['hydrocarbons', 'alkenes', 'general formula'],
  },
  {
    id: 'alkyne-general-formula',
    chapterId: 'hydrocarbons',
    name: 'General Formula of Alkynes',
    equation: 'C_nH_{2n-2}',
    contentType: 'latex',
    variables: {
      'n': 'Number of carbon atoms (n ≥ 2)',
    },
    useCases: [
      'Two degrees of unsaturation (one C≡C triple bond)',
      'Dienes (two C=C) also follow CₙH₂ₙ₋₂',
      'Identifying acetylenic compounds',
    ],
    tags: ['hydrocarbons', 'alkynes', 'general formula'],
  },
  {
    id: 'markovnikov-rule',
    chapterId: 'hydrocarbons',
    name: "Markovnikov's Rule",
    equation: 'HX + R\\text{-}CH{=}CH_2 \\rightarrow R\\text{-}CHX\\text{-}CH_3',
    contentType: 'latex',
    variables: {
      'HX': 'Hydrogen halide (HCl, HBr, HI)',
    },
    useCases: [
      'H⁺ adds to carbon with more hydrogens (more substituted carbocation)',
      'Predicting major product of HX addition to unsymmetrical alkenes',
      'Anti-Markovnikov with peroxides (only HBr)',
    ],
    tags: ['hydrocarbons', 'markovnikov', 'addition reaction', 'alkenes'],
  },
  {
    id: 'combustion-alkane',
    chapterId: 'hydrocarbons',
    name: 'Complete Combustion of Alkanes',
    equation: 'C_nH_{2n+2} + \\frac{3n+1}{2}O_2 \\rightarrow nCO_2 + (n+1)H_2O',
    contentType: 'latex',
    variables: {
      'n': 'Number of carbon atoms',
    },
    useCases: [
      'Calculating O₂ required for complete combustion',
      'Exothermic reaction — basis of fuel chemistry',
      'Finding molecular formula from combustion data',
    ],
    tags: ['hydrocarbons', 'combustion', 'alkanes'],
  },
  {
    id: 'anti-markovnikov',
    chapterId: 'hydrocarbons',
    name: 'Anti-Markovnikov Addition (Peroxide Effect)',
    equation: 'HBr + R\\text{-}CH{=}CH_2 \\xrightarrow{\\text{peroxide}} R\\text{-}CH_2\\text{-}CH_2Br',
    contentType: 'latex',
    variables: {
      '\\text{peroxide}': 'Benzoyl peroxide or dialkyl peroxide',
    },
    useCases: [
      'Only works with HBr (not HCl or HI)',
      'Free radical mechanism via Br radical addition',
      'Gives anti-Markovnikov product (Br on less substituted C)',
    ],
    tags: ['hydrocarbons', 'anti-markovnikov', 'peroxide effect', 'free radical'],
  },
];
