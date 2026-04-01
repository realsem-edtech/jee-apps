import { Formula } from '../../types';

export const chemistryEverydayFormulas: Formula[] = [
  {
    id: 'drug-receptor',
    chapterId: 'chemistry-everyday',
    name: 'Drug-Receptor Interaction',
    equation: 'D + R \\rightleftharpoons DR \\quad (\\text{lock and key model})',
    contentType: 'latex',
    variables: {
      'D': 'Drug molecule',
      'R': 'Receptor site on target protein',
      'DR': 'Drug-receptor complex',
    },
    useCases: [
      'Agonists activate receptors, antagonists block them',
      'Shape complementarity determines drug specificity',
      'Basis of rational drug design',
    ],
    tags: ['everyday chemistry', 'drugs', 'receptor', 'pharmacology'],
  },
  {
    id: 'soap-micelle',
    chapterId: 'chemistry-everyday',
    name: 'Soap and Micelle Formation',
    equation: 'RCOONa \\xrightarrow{H_2O} RCOO^- + Na^+ \\rightarrow \\text{micelle above CMC}',
    contentType: 'latex',
    variables: {
      'RCOO^-': 'Carboxylate ion (hydrophilic head + hydrophobic tail)',
      'CMC': 'Critical micelle concentration',
    },
    useCases: [
      'Soap molecules form micelles that trap grease/oil',
      'Hydrophobic tails point inward (dissolve oil), heads outward (in water)',
      'Soap does not work in hard water (forms scum with Ca²⁺/Mg²⁺)',
    ],
    tags: ['everyday chemistry', 'soap', 'micelle', 'detergent'],
  },
  {
    id: 'food-preservatives',
    chapterId: 'chemistry-everyday',
    name: 'Common Food Preservatives',
    equation: '\\text{Sodium benzoate: } C_6H_5COONa',
    contentType: 'latex',
    variables: {
      'C_6H_5COONa': 'Sodium benzoate (used in jams, pickles)',
    },
    useCases: [
      'Sodium benzoate prevents microbial growth in acidic foods',
      'KMS (potassium metabisulfite) used in fruit juices',
      'BHA/BHT used as antioxidants to prevent rancidity',
    ],
    tags: ['everyday chemistry', 'food preservatives', 'sodium benzoate'],
  },
];
