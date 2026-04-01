import { Formula } from '../../types';

export const dfBlockFormulas: Formula[] = [
  {
    id: 'magnetic-moment',
    chapterId: 'd-f-block',
    name: 'Spin-Only Magnetic Moment',
    equation: '\\mu = \\sqrt{n(n+2)} \\text{ BM}',
    contentType: 'latex',
    variables: {
      '\\mu': 'Magnetic moment in Bohr Magnetons',
      'n': 'Number of unpaired electrons',
    },
    useCases: [
      'Determining number of unpaired electrons from magnetic data',
      'Distinguishing high-spin vs low-spin complexes',
      'Fe³⁺ (n=5): μ = 5.92 BM, Fe²⁺ (n=4): μ = 4.90 BM',
    ],
    tags: ['d-block', 'magnetic moment', 'unpaired electrons'],
  },
  {
    id: 'electrode-potential-trend',
    chapterId: 'd-f-block',
    name: 'Standard Electrode Potential Trend (3d)',
    equation: 'E^\\circ(Cu^{2+}/Cu) = +0.34V \\quad (\\text{only positive in 3d series})',
    contentType: 'latex',
    variables: {
      'E^\\circ': 'Standard reduction potential',
    },
    useCases: [
      'Cu is the only 3d metal that does not liberate H₂ from acids',
      'More negative E° = stronger reducing agent',
      'Explains reactivity series of transition metals',
    ],
    tags: ['d-block', 'electrode potential', 'reactivity'],
  },
  {
    id: 'lanthanoid-contraction',
    chapterId: 'd-f-block',
    name: 'Lanthanoid Contraction',
    equation: '\\text{Atomic radius decreases gradually: La (187 pm) to Lu (175 pm)}',
    contentType: 'latex',
    variables: {
      '\\text{Cause}': 'Poor shielding by 4f electrons',
    },
    useCases: [
      'Zr and Hf have nearly identical radii (lanthanoid contraction effect)',
      'Explains similar properties of 4d and 5d transition metals',
      'Separation of lanthanoids is difficult due to similar sizes',
    ],
    tags: ['f-block', 'lanthanoid contraction', 'atomic radius'],
  },
  {
    id: 'colour-transition-metals',
    chapterId: 'd-f-block',
    name: 'Colour of Transition Metal Ions',
    equation: '\\Delta E = h\\nu \\quad (\\text{d-d transition})',
    contentType: 'latex',
    variables: {
      '\\Delta E': 'Crystal field splitting energy',
      'h\\nu': 'Energy of absorbed photon',
    },
    useCases: [
      'Colour arises from d-d electronic transitions',
      'Ions with d⁰ or d¹⁰ are colorless (Sc³⁺, Zn²⁺)',
      'Complementary color is observed (absorbs red → appears green)',
    ],
    tags: ['d-block', 'colour', 'crystal field', 'd-d transition'],
  },
];
