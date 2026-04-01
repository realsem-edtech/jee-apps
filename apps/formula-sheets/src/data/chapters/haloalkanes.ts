import { Formula } from '../../types';

export const haloalkanesFormulas: Formula[] = [
  {
    id: 'sn2-mechanism',
    chapterId: 'haloalkanes',
    name: 'SN2 Reaction (Rate Law)',
    equation: '\\text{Rate} = k[\\text{substrate}][\\text{nucleophile}]',
    contentType: 'latex',
    variables: {
      'k': 'Second order rate constant',
      '\\text{substrate}': 'Alkyl halide (1° preferred)',
      '\\text{nucleophile}': 'OH⁻, CN⁻, I⁻ etc.',
    },
    useCases: [
      'One-step mechanism with backside attack',
      'Inversion of configuration (Walden inversion)',
      'Favored by: 1° substrate, strong nucleophile, polar aprotic solvent',
    ],
    tags: ['organic', 'SN2', 'nucleophilic substitution', 'haloalkanes'],
  },
  {
    id: 'sn1-mechanism',
    chapterId: 'haloalkanes',
    name: 'SN1 Reaction (Rate Law)',
    equation: '\\text{Rate} = k[\\text{substrate}]',
    contentType: 'latex',
    variables: {
      'k': 'First order rate constant',
      '\\text{substrate}': 'Alkyl halide (3° preferred)',
    },
    useCases: [
      'Two-step: carbocation intermediate formed first',
      'Racemization (attack from both sides of planar carbocation)',
      'Favored by: 3° substrate, weak nucleophile, polar protic solvent',
    ],
    tags: ['organic', 'SN1', 'nucleophilic substitution', 'haloalkanes'],
  },
  {
    id: 'e2-elimination',
    chapterId: 'haloalkanes',
    name: 'E2 Elimination',
    equation: '\\text{Rate} = k[\\text{substrate}][\\text{base}]',
    contentType: 'latex',
    variables: {
      '\\text{base}': 'Strong bulky base (t-BuOK)',
    },
    useCases: [
      'Anti-periplanar geometry required (H and X on opposite sides)',
      'Zaitsev rule: more substituted alkene is major product',
      'Competes with SN2 — strong bulky base favors E2',
    ],
    tags: ['organic', 'E2', 'elimination', 'haloalkanes'],
  },
  {
    id: 'reactivity-halides',
    chapterId: 'haloalkanes',
    name: 'Reactivity Order of Halides',
    equation: 'R\\text{-}I > R\\text{-}Br > R\\text{-}Cl > R\\text{-}F',
    contentType: 'latex',
    variables: {
      'R\\text{-}I': 'Most reactive (weakest C-X bond)',
      'R\\text{-}F': 'Least reactive (strongest C-X bond)',
    },
    useCases: [
      'Bond strength: C-F > C-Cl > C-Br > C-I',
      'SN2 reactivity follows this order (better leaving group)',
      'Nucleophilicity: I⁻ > Br⁻ > Cl⁻ > F⁻ (in protic solvents)',
    ],
    tags: ['organic', 'haloalkanes', 'reactivity', 'bond strength'],
  },
];
