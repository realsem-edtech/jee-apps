import { Formula } from '../../types';

export const pBlock11Formulas: Formula[] = [
  {
    id: 'boron-electron-deficient',
    chapterId: 'p-block-11',
    name: 'Diborane Structure',
    equation: 'B_2H_6: \\text{2 B-H-B (3c-2e bonds) + 4 B-H (2c-2e bonds)}',
    contentType: 'latex',
    variables: {
      '3c-2e': 'Three-center two-electron bond (banana bond)',
      '2c-2e': 'Normal covalent bond',
    },
    useCases: [
      'Understanding electron-deficient bonding in boranes',
      'Explaining why BH₃ dimerizes to B₂H₆',
      'Bridge hydrogen concept in boron hydrides',
    ],
    tags: ['p-block', 'boron', 'diborane', 'electron deficient'],
  },
  {
    id: 'carbon-allotropes',
    chapterId: 'p-block-11',
    name: 'Carbon Allotrope Hybridizations',
    equation: '\\text{Diamond: } sp^3, \\quad \\text{Graphite: } sp^2, \\quad \\text{Fullerene: } sp^2',
    contentType: 'latex',
    variables: {
      'sp^3': 'Tetrahedral, 3D network (hardest natural substance)',
      'sp^2': 'Trigonal planar, layered/cage structure',
    },
    useCases: [
      'Explaining why diamond is hard (3D sp³ network)',
      'Why graphite conducts electricity (delocalized π electrons)',
      'Comparing structures of carbon allotropes',
    ],
    tags: ['p-block', 'carbon', 'allotropes', 'hybridization'],
  },
  {
    id: 'oxoacids-nitrogen',
    chapterId: 'p-block-11',
    name: 'Oxoacids of Nitrogen',
    equation: 'HNO_3 \\rightarrow H^+ + NO_3^- \\quad (\\text{strong acid})',
    contentType: 'latex',
    variables: {
      'HNO_3': 'Nitric acid (strong oxidizing acid)',
      'HNO_2': 'Nitrous acid (weak, unstable)',
    },
    useCases: [
      'HNO₃ acts as oxidizing acid with metals (not H₂ evolution)',
      'Aqua regia: 3HCl + HNO₃ dissolves gold and platinum',
      'Ring test for NO₃⁻ detection',
    ],
    tags: ['p-block', 'nitrogen', 'nitric acid', 'oxoacids'],
  },
  {
    id: 'allotropes-phosphorus',
    chapterId: 'p-block-11',
    name: 'Allotropes of Phosphorus',
    equation: 'P_4 \\text{ (white)} \\xrightarrow{573K, \\text{inert}} P_n \\text{ (red)}',
    contentType: 'latex',
    variables: {
      'P_4': 'White phosphorus (tetrahedral, toxic, glows in dark)',
      'P_n': 'Red phosphorus (polymeric, stable, non-toxic)',
    },
    useCases: [
      'White P is reactive and stored under water',
      'Red P is used in matchbox striking surface',
      'Black P is most stable allotrope (layered structure)',
    ],
    tags: ['p-block', 'phosphorus', 'allotropes'],
  },
  {
    id: 'ozone-structure',
    chapterId: 'p-block-11',
    name: 'Ozone Formation',
    equation: '3O_2 \\xrightarrow{UV} 2O_3 \\quad \\Delta H = +ve',
    contentType: 'latex',
    variables: {
      'O_2': 'Dioxygen',
      'O_3': 'Ozone (angular, resonance structures)',
    },
    useCases: [
      'Ozone is thermodynamically unstable (endothermic formation)',
      'Ozone layer absorbs UV radiation in stratosphere',
      'Powerful oxidizing agent, used in water purification',
    ],
    tags: ['p-block', 'oxygen', 'ozone', 'allotropes'],
  },
];
