import { Formula } from '../../types';

export const isolationOfElementsFormulas: Formula[] = [
  {
    id: 'ellingham-diagram',
    chapterId: 'isolation-of-elements',
    name: 'Ellingham Diagram Principle',
    equation: '\\Delta G = \\Delta H - T\\Delta S \\quad (\\text{for oxide formation})',
    contentType: 'latex',
    variables: {
      '\\Delta G': 'Gibbs energy of oxide formation',
      '\\Delta H': 'Enthalpy change of reaction',
      '\\Delta S': 'Entropy change of reaction',
      'T': 'Temperature',
    },
    useCases: [
      'Metal with more negative ΔG can reduce oxide of metal with less negative ΔG',
      'Al can reduce Fe₂O₃ (thermite), Cr₂O₃, MnO₂',
      'C line crosses metal oxide lines at high T → carbon reduction',
    ],
    tags: ['metallurgy', 'ellingham', 'reduction', 'oxide'],
  },
  {
    id: 'electrolytic-reduction',
    chapterId: 'isolation-of-elements',
    name: 'Electrolytic Reduction (Hall-Héroult)',
    equation: 'Al_2O_3 \\xrightarrow{\\text{cryolite, electrolysis}} 2Al + \\frac{3}{2}O_2',
    contentType: 'latex',
    variables: {
      'Al_2O_3': 'Alumina (dissolved in molten cryolite Na₃AlF₆)',
    },
    useCases: [
      'Extraction of highly electropositive metals (Na, Ca, Al)',
      'Cryolite lowers melting point of alumina from 2072°C to ~1000°C',
      'Anode is consumed (carbon electrodes)',
    ],
    tags: ['metallurgy', 'electrolysis', 'aluminum', 'hall heroult'],
  },
  {
    id: 'concentration-froth',
    chapterId: 'isolation-of-elements',
    name: 'Froth Flotation Principle',
    equation: '\\text{Sulfide ore (hydrophobic)} + \\text{oil} \\rightarrow \\text{floats in froth}',
    contentType: 'latex',
    variables: {
      '\\text{Collectors}': 'Pine oil, xanthates — make ore hydrophobic',
      '\\text{Frothers}': 'Cresol — stabilize froth',
      '\\text{Depressants}': 'NaCN depresses ZnS in PbS-ZnS separation',
    },
    useCases: [
      'Concentration of sulfide ores (Cu₂S, PbS, ZnS)',
      'Selective flotation using depressants',
      'Not used for oxide or carbonate ores',
    ],
    tags: ['metallurgy', 'froth flotation', 'ore concentration'],
  },
];
