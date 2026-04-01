import { Formula } from '../../types';

export const coordinationCompoundsFormulas: Formula[] = [
  {
    id: 'cfse',
    chapterId: 'coordination-compounds',
    name: 'Crystal Field Splitting Energy (Octahedral)',
    equation: 'CFSE = (-0.4n_{t_{2g}} + 0.6n_{e_g}) \\Delta_o',
    contentType: 'latex',
    variables: {
      'CFSE': 'Crystal field stabilization energy',
      'n_{t_{2g}}': 'Number of electrons in t₂g orbitals',
      'n_{e_g}': 'Number of electrons in eg orbitals',
      '\\Delta_o': 'Crystal field splitting energy (octahedral)',
    },
    useCases: [
      'Determining stability of octahedral complexes',
      'Comparing high-spin vs low-spin configurations',
      'Maximum CFSE for d³ and d⁶ (low-spin) configurations',
    ],
    tags: ['coordination', 'crystal field', 'CFSE', 'octahedral'],
  },
  {
    id: 'spectrochemical-series',
    chapterId: 'coordination-compounds',
    name: 'Spectrochemical Series',
    equation: 'I^- < Br^- < Cl^- < F^- < OH^- < H_2O < NH_3 < en < CN^- < CO',
    contentType: 'latex',
    variables: {
      '\\Delta': 'Crystal field splitting — increases left to right',
    },
    useCases: [
      'Weak field ligands (I⁻, Br⁻) → high spin complexes',
      'Strong field ligands (CN⁻, CO) → low spin complexes',
      'Predicting magnetic properties and color of complexes',
    ],
    tags: ['coordination', 'spectrochemical series', 'ligands', 'crystal field'],
  },
  {
    id: 'ean-rule',
    chapterId: 'coordination-compounds',
    name: 'Effective Atomic Number (EAN) Rule',
    equation: 'EAN = Z - \\text{oxidation state} + 2 \\times \\text{coordination number}',
    contentType: 'latex',
    variables: {
      'EAN': 'Effective atomic number',
      'Z': 'Atomic number of metal',
    },
    useCases: [
      'EAN = nearest noble gas configuration for stable complexes',
      '[Fe(CN)₆]⁴⁻: EAN = 26 - 2 + 12 = 36 (Kr)',
      'Not always followed but useful for metal carbonyls',
    ],
    tags: ['coordination', 'EAN', 'stability'],
  },
  {
    id: 'isomerism-coordination',
    chapterId: 'coordination-compounds',
    name: 'Coordination Number and Geometry',
    equation: 'CN = 4: \\text{Td or sq. planar}, \\quad CN = 6: \\text{octahedral}',
    contentType: 'latex',
    variables: {
      'CN': 'Coordination number',
      'Td': 'Tetrahedral (sp³)',
      '\\text{sq. planar}': 'Square planar (dsp²)',
    },
    useCases: [
      'CN=4 + d⁸ (Ni²⁺, Pt²⁺, Pd²⁺) → square planar',
      'CN=4 + weak field → tetrahedral',
      'CN=6 is most common geometry',
    ],
    tags: ['coordination', 'geometry', 'coordination number'],
  },
];
