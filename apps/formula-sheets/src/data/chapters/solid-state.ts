import { Formula } from '../../types';

export const solidStateFormulas: Formula[] = [
  {
    id: 'density-unit-cell',
    chapterId: 'solid-state',
    name: 'Density of Unit Cell',
    equation: '\\rho = \\frac{Z \\times M}{a^3 \\times N_A}',
    contentType: 'latex',
    variables: {
      '\\rho': 'Density of crystal',
      'Z': 'Number of atoms per unit cell',
      'M': 'Molar mass',
      'a': 'Edge length of unit cell',
      'N_A': 'Avogadro\'s number',
    },
    useCases: [
      'Calculating density from crystal structure data',
      'Finding edge length when density is known',
      'Determining Z to identify unit cell type',
    ],
    tags: ['solid state', 'unit cell', 'density', 'crystal'],
  },
  {
    id: 'packing-efficiency-fcc',
    chapterId: 'solid-state',
    name: 'Packing Efficiency (FCC/CCP)',
    equation: '\\text{PE}_{FCC} = \\frac{\\pi}{3\\sqrt{2}} \\times 100 = 74\\%',
    contentType: 'latex',
    variables: {
      '\\text{PE}': 'Packing efficiency',
    },
    useCases: [
      'FCC/CCP: 74%, BCC: 68%, Simple cubic: 52.4%',
      'Comparing space utilization in different crystal structures',
      'Understanding close-packed vs non-close-packed structures',
    ],
    tags: ['solid state', 'packing efficiency', 'FCC', 'BCC'],
  },
  {
    id: 'fcc-edge-radius',
    chapterId: 'solid-state',
    name: 'Edge Length-Radius Relation (FCC)',
    equation: 'a = 2\\sqrt{2} \\, r',
    contentType: 'latex',
    variables: {
      'a': 'Edge length of FCC unit cell',
      'r': 'Atomic radius',
    },
    useCases: [
      'Calculating edge length from atomic radius for FCC metals',
      'Face diagonal = 4r in FCC',
      'Used with Cu, Al, Ag, Au crystal structure problems',
    ],
    tags: ['solid state', 'FCC', 'edge length', 'atomic radius'],
  },
  {
    id: 'bcc-edge-radius',
    chapterId: 'solid-state',
    name: 'Edge Length-Radius Relation (BCC)',
    equation: 'a = \\frac{4r}{\\sqrt{3}}',
    contentType: 'latex',
    variables: {
      'a': 'Edge length of BCC unit cell',
      'r': 'Atomic radius',
    },
    useCases: [
      'Calculating edge length from atomic radius for BCC metals',
      'Body diagonal = 4r in BCC',
      'Used with Fe, Na, K crystal structure problems',
    ],
    tags: ['solid state', 'BCC', 'edge length', 'atomic radius'],
  },
  {
    id: 'bragg-equation',
    chapterId: 'solid-state',
    name: 'Bragg\'s Equation',
    equation: 'n\\lambda = 2d \\sin\\theta',
    contentType: 'latex',
    variables: {
      'n': 'Order of diffraction (integer)',
      '\\lambda': 'Wavelength of X-ray',
      'd': 'Interplanar spacing',
      '\\theta': 'Angle of diffraction',
    },
    useCases: [
      'X-ray diffraction analysis of crystal structures',
      'Determining interplanar spacing from diffraction data',
      'Confirming crystal structure type experimentally',
    ],
    tags: ['solid state', 'bragg', 'X-ray diffraction'],
  },
  {
    id: 'schottky-defect',
    chapterId: 'solid-state',
    name: 'Schottky Defect',
    equation: 'n_s \\approx N \\exp\\left(-\\frac{E_s}{2k_BT}\\right)',
    contentType: 'latex',
    variables: {
      'n_s': 'Number of Schottky defects',
      'N': 'Total number of ion pairs',
      'E_s': 'Energy required to create one defect',
      'k_B': 'Boltzmann constant',
      'T': 'Temperature',
    },
    useCases: [
      'Found in ionic compounds with similar cation/anion sizes (NaCl, KCl)',
      'Decreases density of crystal',
      'Equal number of cation and anion vacancies',
    ],
    tags: ['solid state', 'schottky', 'crystal defects'],
  },
];
