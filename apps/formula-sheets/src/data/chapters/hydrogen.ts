import { Formula } from '../../types';

export const hydrogenFormulas: Formula[] = [
  {
    id: 'hardness-temporary',
    chapterId: 'hydrogen',
    name: 'Removal of Temporary Hardness',
    equation: 'Ca(HCO_3)_2 \\xrightarrow{\\Delta} CaCO_3 \\downarrow + H_2O + CO_2',
    contentType: 'latex',
    variables: {
      'Ca(HCO_3)_2': 'Calcium bicarbonate (causes temporary hardness)',
      'CaCO_3': 'Calcium carbonate precipitate',
    },
    useCases: [
      'Removing temporary hardness by boiling',
      'Clark\'s method using Ca(OH)₂',
      'Understanding scale formation in boilers',
    ],
    tags: ['hydrogen', 'hard water', 'temporary hardness'],
  },
  {
    id: 'hydrogen-peroxide-strength',
    chapterId: 'hydrogen',
    name: 'Volume Strength of H₂O₂',
    equation: '\\text{Volume strength} = 11.2 \\times \\text{Normality}',
    contentType: 'latex',
    variables: {
      '\\text{Volume strength}': 'Volume of O₂ released per volume of H₂O₂ at STP',
      '\\text{Normality}': 'Normality of H₂O₂ solution',
    },
    useCases: [
      'Converting between volume strength and normality',
      '"20 volume" H₂O₂ means 1 mL releases 20 mL O₂ at STP',
      'Calculating concentration for antiseptic/bleaching applications',
    ],
    tags: ['hydrogen', 'hydrogen peroxide', 'volume strength'],
  },
  {
    id: 'h2o2-molarity',
    chapterId: 'hydrogen',
    name: 'H₂O₂ Volume Strength to Molarity',
    equation: '\\text{Molarity} = \\frac{\\text{Volume strength}}{11.2}',
    contentType: 'latex',
    variables: {
      '\\text{Molarity}': 'Molarity of H₂O₂',
      '\\text{Volume strength}': 'Volume of O₂ at STP per mL of H₂O₂',
    },
    useCases: [
      'Quick conversion between volume strength and molarity',
      'Standardization of H₂O₂ solutions',
      'Lab preparation calculations',
    ],
    tags: ['hydrogen', 'hydrogen peroxide', 'molarity'],
  },
];
