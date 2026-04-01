import { Formula } from '../types';

// Class 11 - Physical Chemistry
import { someBasicConceptsFormulas } from './chapters/some-basic-concepts';
import { atomicStructureFormulas } from './chapters/atomic-structure';
import { statesOfMatterFormulas } from './chapters/states-of-matter';
import { thermodynamicsFormulas } from './chapters/thermodynamics';
import { equilibriumFormulas } from './chapters/equilibrium';
import { redoxReactionsFormulas } from './chapters/redox-reactions';

// Class 11 - Inorganic Chemistry
import { classificationOfElementsFormulas } from './chapters/classification-of-elements';
import { chemicalBondingFormulas } from './chapters/chemical-bonding';
import { hydrogenFormulas } from './chapters/hydrogen';
import { sBlockFormulas } from './chapters/s-block';
import { pBlock11Formulas } from './chapters/p-block-11';

// Class 11 - Organic Chemistry
import { organicBasicsFormulas } from './chapters/organic-basics';
import { hydrocarbonsFormulas } from './chapters/hydrocarbons';
import { environmentalChemistryFormulas } from './chapters/environmental-chemistry';

// Class 12 - Physical Chemistry
import { solidStateFormulas } from './chapters/solid-state';
import { solutionsFormulas } from './chapters/solutions';
import { electrochemistryFormulas } from './chapters/electrochemistry';
import { chemicalKineticsFormulas } from './chapters/chemical-kinetics';
import { surfaceChemistryFormulas } from './chapters/surface-chemistry';

// Class 12 - Inorganic Chemistry
import { isolationOfElementsFormulas } from './chapters/isolation-of-elements';
import { pBlock12Formulas } from './chapters/p-block-12';
import { dfBlockFormulas } from './chapters/d-f-block';
import { coordinationCompoundsFormulas } from './chapters/coordination-compounds';

// Class 12 - Organic Chemistry
import { haloalkanesFormulas } from './chapters/haloalkanes';
import { alcoholsPhenolsEthersFormulas } from './chapters/alcohols-phenols-ethers';
import { aldehydesKetonesFormulas } from './chapters/aldehydes-ketones';
import { aminesFormulas } from './chapters/amines';
import { biomoleculesFormulas } from './chapters/biomolecules';
import { polymersFormulas } from './chapters/polymers';
import { chemistryEverydayFormulas } from './chapters/chemistry-everyday';

export const formulas: Formula[] = [
  ...someBasicConceptsFormulas,
  ...atomicStructureFormulas,
  ...statesOfMatterFormulas,
  ...thermodynamicsFormulas,
  ...equilibriumFormulas,
  ...redoxReactionsFormulas,
  ...classificationOfElementsFormulas,
  ...chemicalBondingFormulas,
  ...hydrogenFormulas,
  ...sBlockFormulas,
  ...pBlock11Formulas,
  ...organicBasicsFormulas,
  ...hydrocarbonsFormulas,
  ...environmentalChemistryFormulas,
  ...solidStateFormulas,
  ...solutionsFormulas,
  ...electrochemistryFormulas,
  ...chemicalKineticsFormulas,
  ...surfaceChemistryFormulas,
  ...isolationOfElementsFormulas,
  ...pBlock12Formulas,
  ...dfBlockFormulas,
  ...coordinationCompoundsFormulas,
  ...haloalkanesFormulas,
  ...alcoholsPhenolsEthersFormulas,
  ...aldehydesKetonesFormulas,
  ...aminesFormulas,
  ...biomoleculesFormulas,
  ...polymersFormulas,
  ...chemistryEverydayFormulas,
];
