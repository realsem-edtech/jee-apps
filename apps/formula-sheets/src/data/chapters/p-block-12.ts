import { Formula } from '../../types';

export const pBlock12Formulas: Formula[] = [
  {
    id: 'interhalogen-formula',
    chapterId: 'p-block-12',
    name: 'Interhalogen Compounds',
    equation: 'XX\'_n \\quad (n = 1, 3, 5, 7)',
    contentType: 'latex',
    variables: {
      'X': 'Larger halogen (central atom)',
      'X\'': 'Smaller halogen',
      'n': 'Number of smaller halogens (odd numbers only)',
    },
    useCases: [
      'ClF, BrF₃, IF₅, IF₇ are examples',
      'Central atom is always the larger halogen',
      'More reactive than constituent halogens',
    ],
    tags: ['p-block', 'interhalogens', 'halogens'],
  },
  {
    id: 'oxoacids-sulfur',
    chapterId: 'p-block-12',
    name: 'Oxoacids of Sulfur',
    equation: 'H_2SO_4 \\rightarrow H^+ + HSO_4^- \\rightarrow 2H^+ + SO_4^{2-}',
    contentType: 'latex',
    variables: {
      'H_2SO_4': 'Sulfuric acid (diprotic, strong)',
      'HSO_4^-': 'Bisulfate ion (Ka₂ = 0.012)',
    },
    useCases: [
      'H₂SO₄ is strong for first dissociation, weak for second',
      'Concentrated H₂SO₄ is dehydrating and oxidizing agent',
      'Contact process: 2SO₂ + O₂ → 2SO₃ (V₂O₅ catalyst)',
    ],
    tags: ['p-block', 'sulfur', 'oxoacids', 'sulfuric acid'],
  },
  {
    id: 'xenon-fluorides',
    chapterId: 'p-block-12',
    name: 'Xenon Fluoride Compounds',
    equation: 'XeF_2 (\\text{linear}), \\quad XeF_4 (\\text{square planar}), \\quad XeF_6 (\\text{distorted octahedral})',
    contentType: 'latex',
    variables: {
      'XeF_2': 'sp³d hybridized, 3 lone pairs',
      'XeF_4': 'sp³d² hybridized, 2 lone pairs',
      'XeF_6': 'sp³d³ hybridized, 1 lone pair',
    },
    useCases: [
      'First noble gas compounds synthesized by Bartlett',
      'All are strong fluorinating agents',
      'Hydrolysis gives XeO₃ (explosive)',
    ],
    tags: ['p-block', 'noble gases', 'xenon', 'fluorides'],
  },
  {
    id: 'strength-oxoacids-halogens',
    chapterId: 'p-block-12',
    name: 'Strength of Oxoacids of Halogens',
    equation: 'HOCl < HClO_2 < HClO_3 < HClO_4',
    contentType: 'latex',
    variables: {
      'HOCl': 'Hypochlorous acid (weakest)',
      'HClO_4': 'Perchloric acid (strongest — most O atoms)',
    },
    useCases: [
      'More oxygen atoms = stronger acid (better charge stabilization)',
      'HClO₄ is one of the strongest known acids',
      'Same trend for sulfur, nitrogen, phosphorus oxoacids',
    ],
    tags: ['p-block', 'halogens', 'oxoacids', 'acid strength'],
  },
];
