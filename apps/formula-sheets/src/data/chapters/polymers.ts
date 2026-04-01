import { Formula } from '../../types';

export const polymersFormulas: Formula[] = [
  {
    id: 'degree-of-polymerization',
    chapterId: 'polymers',
    name: 'Degree of Polymerization',
    equation: 'DP = \\frac{M_{polymer}}{M_{monomer}}',
    contentType: 'latex',
    variables: {
      'DP': 'Degree of polymerization (number of repeating units)',
      'M_{polymer}': 'Molecular mass of polymer',
      'M_{monomer}': 'Molecular mass of monomer unit',
    },
    useCases: [
      'Higher DP = higher molecular weight polymer',
      'Affects mechanical properties (tensile strength, elasticity)',
      'Natural rubber: DP of isoprene ≈ 5000',
    ],
    tags: ['polymers', 'degree of polymerization', 'molecular weight'],
  },
  {
    id: 'addition-polymerization',
    chapterId: 'polymers',
    name: 'Addition Polymerization',
    equation: 'n(CH_2{=}CHX) \\rightarrow [\\text{-}CH_2\\text{-}CHX\\text{-}]_n',
    contentType: 'latex',
    variables: {
      'n': 'Number of monomer units',
      'X': 'Substituent (H for PE, Cl for PVC, C₆H₅ for PS)',
    },
    useCases: [
      'Monomers with C=C double bonds (vinyl monomers)',
      'No by-product formed (100% atom economy)',
      'Examples: polyethylene, PVC, polystyrene, Teflon',
    ],
    tags: ['polymers', 'addition polymerization', 'vinyl polymers'],
  },
  {
    id: 'condensation-polymerization',
    chapterId: 'polymers',
    name: 'Condensation Polymerization',
    equation: 'n(HO\\text{-}R\\text{-}COOH) \\rightarrow [\\text{-}O\\text{-}R\\text{-}CO\\text{-}]_n + nH_2O',
    contentType: 'latex',
    variables: {
      'n': 'Number of monomer units',
      'H_2O': 'By-product (water, HCl, etc.)',
    },
    useCases: [
      'Requires bifunctional monomers (diols + diacids, diamines + diacids)',
      'Examples: Nylon-6,6, Dacron (PET), Bakelite',
      'Small molecule eliminated in each step',
    ],
    tags: ['polymers', 'condensation polymerization', 'nylon', 'PET'],
  },
];
