import { Formula } from '../../types';

export const sBlockFormulas: Formula[] = [
  {
    id: 'solvay-process',
    chapterId: 's-block',
    name: 'Solvay Process (Na₂CO₃)',
    equation: 'NaCl + NH_3 + CO_2 + H_2O \\rightarrow NaHCO_3 + NH_4Cl',
    contentType: 'latex',
    variables: {
      'NaHCO_3': 'Sodium bicarbonate (precipitates out)',
      'NH_4Cl': 'Ammonium chloride (by-product)',
    },
    useCases: [
      'Industrial preparation of washing soda (Na₂CO₃)',
      'NaHCO₃ is heated to give Na₂CO₃',
      'Cannot be used for K₂CO₃ (KHCO₃ is too soluble)',
    ],
    tags: ['s-block', 'solvay process', 'sodium carbonate'],
  },
  {
    id: 'plaster-of-paris',
    chapterId: 's-block',
    name: 'Plaster of Paris Reaction',
    equation: 'CaSO_4 \\cdot \\frac{1}{2}H_2O + \\frac{3}{2}H_2O \\rightarrow CaSO_4 \\cdot 2H_2O',
    contentType: 'latex',
    variables: {
      'CaSO_4 \\cdot \\frac{1}{2}H_2O': 'Plaster of Paris',
      'CaSO_4 \\cdot 2H_2O': 'Gypsum',
    },
    useCases: [
      'Setting of plaster of Paris (exothermic, expands slightly)',
      'Used in casts, molds, and construction',
      'Reverse reaction: heating gypsum at 373K gives POP',
    ],
    tags: ['s-block', 'plaster of paris', 'gypsum', 'calcium'],
  },
  {
    id: 'diagonal-relationship',
    chapterId: 's-block',
    name: 'Diagonal Relationship',
    equation: 'Li \\sim Mg, \\quad Be \\sim Al, \\quad B \\sim Si',
    contentType: 'latex',
    variables: {
      '\\sim': 'Similar chemical properties',
    },
    useCases: [
      'Li forms covalent compounds like Mg (LiCl is covalent)',
      'Be forms amphoteric oxide like Al',
      'Explaining anomalous behavior of first element in each group',
    ],
    tags: ['s-block', 'diagonal relationship', 'periodic trends'],
  },
];
