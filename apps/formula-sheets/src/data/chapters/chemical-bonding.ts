import { Formula } from '../../types';

export const chemicalBondingFormulas: Formula[] = [
  {
    id: 'born-haber-cycle',
    chapterId: 'chemical-bonding',
    name: 'Born-Haber Cycle (Lattice Energy)',
    equation: '\\Delta H_f = \\Delta H_{sub} + IE + \\frac{1}{2}D + EA + U',
    contentType: 'latex',
    variables: {
      '\\Delta H_f': 'Enthalpy of formation of ionic compound',
      '\\Delta H_{sub}': 'Sublimation enthalpy of metal',
      'IE': 'Ionization enthalpy of metal',
      'D': 'Bond dissociation enthalpy of non-metal',
      'EA': 'Electron affinity of non-metal',
      'U': 'Lattice enthalpy',
    },
    useCases: [
      'Calculating lattice energy indirectly',
      'Understanding stability of ionic compounds',
      'Predicting formation enthalpy of NaCl, MgO etc.',
    ],
    tags: ['ionic bonding', 'born-haber', 'lattice energy'],
  },
  {
    id: 'dipole-moment',
    chapterId: 'chemical-bonding',
    name: 'Dipole Moment',
    equation: '\\mu = q \\times d',
    contentType: 'latex',
    variables: {
      '\\mu': 'Dipole moment (Debye)',
      'q': 'Magnitude of charge',
      'd': 'Distance between charges (bond length)',
    },
    useCases: [
      'Predicting polarity of molecules',
      'Zero dipole moment = non-polar (CO₂, BF₃)',
      'Resultant dipole from vector addition of bond dipoles',
    ],
    tags: ['chemical bonding', 'dipole moment', 'polarity'],
  },
  {
    id: 'formal-charge',
    chapterId: 'chemical-bonding',
    name: 'Formal Charge',
    equation: 'FC = V - N - \\frac{B}{2}',
    contentType: 'latex',
    variables: {
      'FC': 'Formal charge on atom',
      'V': 'Number of valence electrons in free atom',
      'N': 'Number of non-bonding (lone pair) electrons',
      'B': 'Number of bonding electrons',
    },
    useCases: [
      'Choosing the best Lewis structure (minimize formal charges)',
      'Assigning charges in polyatomic ions',
      'Explaining structure of CO, O₃, NO₂⁻',
    ],
    tags: ['chemical bonding', 'formal charge', 'lewis structure'],
  },
  {
    id: 'bond-order',
    chapterId: 'chemical-bonding',
    name: 'Bond Order (MOT)',
    equation: 'BO = \\frac{N_b - N_a}{2}',
    contentType: 'latex',
    variables: {
      'BO': 'Bond order',
      'N_b': 'Number of bonding electrons',
      'N_a': 'Number of anti-bonding electrons',
    },
    useCases: [
      'Predicting stability of diatomic molecules',
      'BO = 0 means molecule does not exist (He₂)',
      'Higher BO = shorter bond, greater bond energy',
    ],
    tags: ['chemical bonding', 'MOT', 'bond order', 'molecular orbital'],
  },
  {
    id: 'hybridization-steric',
    chapterId: 'chemical-bonding',
    name: 'Steric Number and Hybridization',
    equation: 'SN = \\text{bond pairs} + \\text{lone pairs on central atom}',
    contentType: 'latex',
    variables: {
      'SN': 'Steric number',
    },
    useCases: [
      'SN=2 → sp (linear), SN=3 → sp² (trigonal planar)',
      'SN=4 → sp³ (tetrahedral), SN=5 → sp³d (TBP)',
      'SN=6 → sp³d² (octahedral)',
    ],
    tags: ['chemical bonding', 'hybridization', 'VSEPR', 'geometry'],
  },
  {
    id: 'fajans-rules',
    chapterId: 'chemical-bonding',
    name: "Fajan's Rules (Covalent Character)",
    equation: '\\text{Covalent character} \\propto \\frac{\\text{charge}}{\\text{size of cation}}',
    contentType: 'latex',
    variables: {
      '\\text{Covalent character}': 'Degree of covalent nature in ionic bond',
    },
    useCases: [
      'Small cation + large anion → more covalent character',
      'Higher charge on cation → more polarization',
      'Explaining why LiI is more covalent than LiF',
    ],
    tags: ['chemical bonding', 'fajans rules', 'polarization', 'covalent character'],
  },
];
