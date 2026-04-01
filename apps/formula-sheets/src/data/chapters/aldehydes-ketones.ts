import { Formula } from '../../types';

export const aldehydesKetonesFormulas: Formula[] = [
  {
    id: 'nucleophilic-addition',
    chapterId: 'aldehydes-ketones',
    name: 'Nucleophilic Addition to Carbonyl',
    equation: 'R_2C{=}O + Nu^- \\rightarrow R_2C(Nu)(O^-) \\xrightarrow{H^+} R_2C(Nu)(OH)',
    contentType: 'latex',
    variables: {
      'Nu^-': 'Nucleophile (CN⁻, RMgX, NaBH₄, LiAlH₄ etc.)',
    },
    useCases: [
      'Aldehydes more reactive than ketones (less steric hindrance)',
      'Cyanohydrin formation: HCN addition',
      'Grignard reaction: RMgX gives alcohol',
    ],
    tags: ['organic', 'carbonyl', 'nucleophilic addition', 'aldehydes'],
  },
  {
    id: 'aldol-condensation',
    chapterId: 'aldehydes-ketones',
    name: 'Aldol Condensation',
    equation: '2 \\text{RCH}_2\\text{CHO} \\xrightarrow{\\text{dil. NaOH}} \\text{RCH}_2\\text{CH(OH)CH(R)CHO}',
    contentType: 'latex',
    variables: {
      '\\text{dil. NaOH}': 'Dilute base catalyst',
    },
    useCases: [
      'Requires α-hydrogen on aldehyde/ketone',
      'Aldol product dehydrates on heating → α,β-unsaturated carbonyl',
      'Cross aldol with two different aldehydes gives mixture',
    ],
    tags: ['organic', 'aldol', 'condensation', 'carbonyl reactions'],
  },
  {
    id: 'cannizzaro-reaction',
    chapterId: 'aldehydes-ketones',
    name: 'Cannizzaro Reaction',
    equation: '2HCHO \\xrightarrow{\\text{conc. NaOH}} HCOONa + CH_3OH',
    contentType: 'latex',
    variables: {
      '\\text{conc. NaOH}': 'Concentrated alkali',
    },
    useCases: [
      'Only for aldehydes WITHOUT α-hydrogen (HCHO, C₆H₅CHO)',
      'Disproportionation: one molecule oxidized, one reduced',
      'Does not occur with aldehydes having α-H (they undergo aldol instead)',
    ],
    tags: ['organic', 'cannizzaro', 'disproportionation', 'carbonyl'],
  },
  {
    id: 'tollens-test',
    chapterId: 'aldehydes-ketones',
    name: "Tollens' Test (Silver Mirror)",
    equation: 'RCHO + 2[Ag(NH_3)_2]^+ + 2OH^- \\rightarrow RCOO^- + 2Ag \\downarrow + 4NH_3',
    contentType: 'latex',
    variables: {
      '[Ag(NH_3)_2]^+': "Tollens' reagent (ammoniacal AgNO₃)",
      'Ag \\downarrow': 'Silver mirror deposit',
    },
    useCases: [
      'Distinguishes aldehydes from ketones (aldehydes give positive test)',
      'Formic acid also gives positive Tollens test',
      'Silver mirror deposited on inner walls of test tube',
    ],
    tags: ['organic', 'tollens test', 'aldehydes', 'distinguishing test'],
  },
  {
    id: 'fehling-test',
    chapterId: 'aldehydes-ketones',
    name: "Fehling's Test",
    equation: 'RCHO + 2Cu^{2+} + 5OH^- \\rightarrow RCOO^- + Cu_2O \\downarrow + 3H_2O',
    contentType: 'latex',
    variables: {
      'Cu^{2+}': "Fehling's solution (alkaline CuSO₄ + sodium potassium tartrate)",
      'Cu_2O': 'Red precipitate of cuprous oxide',
    },
    useCases: [
      'Aliphatic aldehydes give positive test (red precipitate)',
      'Aromatic aldehydes (benzaldehyde) do NOT reduce Fehling solution',
      'Used to detect reducing sugars (glucose)',
    ],
    tags: ['organic', 'fehling test', 'aldehydes', 'reducing sugars'],
  },
];
