import { Formula } from '../../types';

export const biomoleculesFormulas: Formula[] = [
  {
    id: 'glucose-structure',
    chapterId: 'biomolecules',
    name: 'Glucose Molecular Formula',
    equation: 'C_6H_{12}O_6 \\quad (\\text{aldohexose})',
    contentType: 'latex',
    variables: {
      'C_6H_{12}O_6': 'Glucose — an aldohexose (aldehyde + 6 carbons)',
    },
    useCases: [
      'Open chain: 4 secondary OH + 1 primary OH + 1 CHO',
      'Cyclic form: α-glucose and β-glucose (anomers)',
      'Reduces Tollens and Fehling reagents',
    ],
    tags: ['biomolecules', 'glucose', 'carbohydrates', 'aldose'],
  },
  {
    id: 'amino-acid-zwitterion',
    chapterId: 'biomolecules',
    name: 'Amino Acid Zwitterion',
    equation: 'H_2N\\text{-}CHR\\text{-}COOH \\rightleftharpoons ^+H_3N\\text{-}CHR\\text{-}COO^-',
    contentType: 'latex',
    variables: {
      '\\text{Zwitterion}': 'Dipolar ionic form at isoelectric point',
      'R': 'Side chain (determines the specific amino acid)',
    },
    useCases: [
      'Amino acids exist as zwitterions at physiological pH',
      'Isoelectric point (pI): pH at which net charge = 0',
      'Amphoteric — acts as both acid and base',
    ],
    tags: ['biomolecules', 'amino acids', 'zwitterion', 'proteins'],
  },
  {
    id: 'peptide-bond',
    chapterId: 'biomolecules',
    name: 'Peptide Bond Formation',
    equation: 'R_1\\text{-}CO\\text{-}NH\\text{-}R_2 + H_2O \\quad (\\text{condensation})',
    contentType: 'latex',
    variables: {
      '\\text{CO-NH}': 'Peptide bond (amide linkage)',
    },
    useCases: [
      'Formed by condensation of -COOH and -NH₂ of two amino acids',
      'Partial double bond character (rigid, planar)',
      'Hydrolyzed by proteases or boiling with acid/base',
    ],
    tags: ['biomolecules', 'peptide bond', 'proteins', 'amino acids'],
  },
  {
    id: 'dna-base-pairing',
    chapterId: 'biomolecules',
    name: 'DNA Base Pairing (Chargaff\'s Rule)',
    equation: 'A = T, \\quad G = C \\quad (\\text{complementary base pairing})',
    contentType: 'latex',
    variables: {
      'A': 'Adenine pairs with Thymine (2 H-bonds)',
      'G': 'Guanine pairs with Cytosine (3 H-bonds)',
    },
    useCases: [
      'A-T: 2 hydrogen bonds, G-C: 3 hydrogen bonds',
      'More G-C content = higher melting temperature of DNA',
      'Total purines = total pyrimidines',
    ],
    tags: ['biomolecules', 'DNA', 'base pairing', 'chargaff'],
  },
];
