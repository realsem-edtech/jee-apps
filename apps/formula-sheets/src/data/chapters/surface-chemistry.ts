import { Formula } from '../../types';

export const surfaceChemistryFormulas: Formula[] = [
  {
    id: 'freundlich-adsorption',
    chapterId: 'surface-chemistry',
    name: 'Freundlich Adsorption Isotherm',
    equation: '\\frac{x}{m} = k \\cdot P^{1/n} \\quad (1 < n < 10)',
    contentType: 'latex',
    variables: {
      'x/m': 'Mass of adsorbate per mass of adsorbent',
      'k': 'Freundlich constant',
      'P': 'Pressure of gas',
      '1/n': 'Measure of intensity of adsorption',
    },
    useCases: [
      'Quantifying gas adsorption on solid surfaces',
      'log(x/m) vs log P gives straight line',
      'Valid at intermediate pressures',
    ],
    tags: ['surface chemistry', 'adsorption', 'freundlich'],
  },
  {
    id: 'langmuir-adsorption',
    chapterId: 'surface-chemistry',
    name: 'Langmuir Adsorption Isotherm',
    equation: '\\frac{x}{m} = \\frac{aP}{1 + bP}',
    contentType: 'latex',
    variables: {
      'x/m': 'Mass of adsorbate per mass of adsorbent',
      'a, b': 'Langmuir constants',
      'P': 'Pressure',
    },
    useCases: [
      'Monolayer adsorption model',
      'At low P: x/m ∝ P (linear), at high P: x/m = constant (saturation)',
      'Better than Freundlich at extreme pressures',
    ],
    tags: ['surface chemistry', 'adsorption', 'langmuir'],
  },
  {
    id: 'gold-number',
    chapterId: 'surface-chemistry',
    name: 'Gold Number (Protective Colloids)',
    equation: '\\text{Gold number} = \\text{mg of lyophilic colloid to prevent coagulation of 10 mL gold sol by 1 mL of 10\\% NaCl}',
    contentType: 'latex',
    variables: {
      '\\text{Gold number}': 'Measure of protective power (lower = better)',
    },
    useCases: [
      'Lower gold number = better protective colloid',
      'Gelatin has lowest gold number (~0.005)',
      'Ranking protective power of different colloids',
    ],
    tags: ['surface chemistry', 'colloids', 'gold number', 'protective'],
  },
];
