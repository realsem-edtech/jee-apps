import { Chapter } from '../types';

export const chapters: Chapter[] = [
  // Class 11 - Physical Chemistry
  { id: 'some-basic-concepts', name: 'Some Basic Concepts of Chemistry', subject: 'physical', order: 1 },
  { id: 'atomic-structure', name: 'Structure of Atom', subject: 'physical', order: 2 },
  { id: 'states-of-matter', name: 'States of Matter', subject: 'physical', order: 3 },
  { id: 'thermodynamics', name: 'Thermodynamics', subject: 'physical', order: 4 },
  { id: 'equilibrium', name: 'Equilibrium', subject: 'physical', order: 5 },
  { id: 'redox-reactions', name: 'Redox Reactions', subject: 'physical', order: 6 },

  // Class 11 - Inorganic Chemistry
  { id: 'classification-of-elements', name: 'Classification of Elements & Periodicity', subject: 'inorganic', order: 7 },
  { id: 'chemical-bonding', name: 'Chemical Bonding and Molecular Structure', subject: 'inorganic', order: 8 },
  { id: 'hydrogen', name: 'Hydrogen', subject: 'inorganic', order: 9 },
  { id: 's-block', name: 'The s-Block Elements', subject: 'inorganic', order: 10 },
  { id: 'p-block-11', name: 'The p-Block Elements (Class 11)', subject: 'inorganic', order: 11 },

  // Class 11 - Organic Chemistry
  { id: 'organic-basics', name: 'Organic Chemistry: Some Basic Principles', subject: 'organic', order: 12 },
  { id: 'hydrocarbons', name: 'Hydrocarbons', subject: 'organic', order: 13 },

  // Class 11 - Environmental (treated as inorganic/general)
  { id: 'environmental-chemistry', name: 'Environmental Chemistry', subject: 'inorganic', order: 14 },

  // Class 12 - Physical Chemistry
  { id: 'solid-state', name: 'The Solid State', subject: 'physical', order: 15 },
  { id: 'solutions', name: 'Solutions', subject: 'physical', order: 16 },
  { id: 'electrochemistry', name: 'Electrochemistry', subject: 'physical', order: 17 },
  { id: 'chemical-kinetics', name: 'Chemical Kinetics', subject: 'physical', order: 18 },
  { id: 'surface-chemistry', name: 'Surface Chemistry', subject: 'physical', order: 19 },

  // Class 12 - Inorganic Chemistry
  { id: 'isolation-of-elements', name: 'General Principles of Isolation of Elements', subject: 'inorganic', order: 20 },
  { id: 'p-block-12', name: 'The p-Block Elements (Class 12)', subject: 'inorganic', order: 21 },
  { id: 'd-f-block', name: 'The d- and f-Block Elements', subject: 'inorganic', order: 22 },
  { id: 'coordination-compounds', name: 'Coordination Compounds', subject: 'inorganic', order: 23 },

  // Class 12 - Organic Chemistry
  { id: 'haloalkanes', name: 'Haloalkanes and Haloarenes', subject: 'organic', order: 24 },
  { id: 'alcohols-phenols-ethers', name: 'Alcohols, Phenols and Ethers', subject: 'organic', order: 25 },
  { id: 'aldehydes-ketones', name: 'Aldehydes, Ketones and Carboxylic Acids', subject: 'organic', order: 26 },
  { id: 'amines', name: 'Amines', subject: 'organic', order: 27 },
  { id: 'biomolecules', name: 'Biomolecules', subject: 'organic', order: 28 },
  { id: 'polymers', name: 'Polymers', subject: 'organic', order: 29 },
  { id: 'chemistry-everyday', name: 'Chemistry in Everyday Life', subject: 'organic', order: 30 },
];
