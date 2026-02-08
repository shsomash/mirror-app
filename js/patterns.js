// Layer 6: Cross-Dimensional Pattern Detection

const patternDefinitions = [
  {
    id: 'overwork_cascade',
    name: 'Overwork Cascade',
    triggerRootCauses: [
      'rc_anxiety_insomnia', 'rc_stimulation_wakefulness',
      'rc_overwork', 'rc_emotional_exhaustion',
      'rc_time_scarcity_movement', 'rc_time_scarcity_eating',
      'rc_workaholism', 'rc_conditional_achievement'
    ],
    checkQuestions: [
      {
        id: 'owc_hours',
        question: 'How many hours per week are you working?',
        options: [
          { label: 'Less than 40', score: 0 },
          { label: '40-50', score: 1 },
          { label: '50-60', score: 2 },
          { label: '60+', score: 3 }
        ]
      },
      {
        id: 'owc_relationship',
        question: 'Would you say your closest relationship feels connected or distant right now?',
        options: [
          { label: 'Connected', score: 0 },
          { label: 'Somewhat distant', score: 1 },
          { label: 'Distant', score: 2 },
          { label: 'N/A', score: 0 }
        ]
      },
      {
        id: 'owc_spending',
        question: 'Do you find yourself spending money impulsively or as a pressure valve?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'owc_identity',
        question: 'How much of your sense of who you are is tied to your work?',
        options: [
          { label: 'Very much', score: 3 },
          { label: 'Somewhat', score: 1 },
          { label: 'Not much', score: 0 }
        ]
      }
    ],
    threshold: 5,
    description: 'Your sleep, your stress, your relationships, and your sense of self may all be connected to one thing: your relationship to work. When work expands to fill everything, the rest of life starts to show the strain — not as separate problems, but as one system under pressure.'
  },
  {
    id: 'financial_strain_cascade',
    name: 'Financial Strain Cascade',
    triggerRootCauses: [
      'rc_structural_poverty', 'rc_gig_volatility', 'rc_job_loss',
      'rc_lifestyle_inflation', 'rc_cc_lifestyle', 'rc_cc_low_income',
      'rc_medical_debt', 'rc_payday_loans', 'rc_avoidance_shame',
      'rc_avoidance_overwhelm', 'rc_income_insufficient_savings'
    ],
    checkQuestions: [
      {
        id: 'fsc_medical',
        question: 'Are you avoiding medical or dental care because of cost?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'fsc_relationship',
        question: 'Is financial stress creating tension in your relationships?',
        options: [
          { label: 'Yes, significantly', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'fsc_mood',
        question: 'Has your mood or motivation declined alongside the financial pressure?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'fsc_selfcare',
        question: 'Are you neglecting your physical health because of financial stress?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: 'Financial pressure rarely stays in one lane. When money is tight or stressful, it often ripples outward — affecting your health, your relationships, your mood, and how you care for yourself. What looks like several problems may trace back to one source of strain.'
  },
  {
    id: 'identity_collapse',
    name: 'Identity Collapse',
    triggerRootCauses: [
      'rc_others_expectations', 'rc_identity_single_role',
      'rc_life_transition_disruption', 'rc_fear_self_knowledge',
      'rc_identity_diffusion', 'rc_never_taught_identity'
    ],
    checkQuestions: [
      {
        id: 'ic_selfcare',
        question: 'Have you been neglecting your physical health or appearance?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'ic_mood',
        question: 'Would you say you feel depressed or emotionally flat?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'ic_social',
        question: 'Have you withdrawn from friends or social activities?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'ic_numb',
        question: 'Do you feel emotionally numb or disconnected from yourself?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: 'When your sense of who you are becomes unclear, the effects tend to radiate outward. Physical self-neglect, emotional flatness, social withdrawal — these may not be separate problems. They may all be expressions of a deeper question: Who am I now?'
  },
  {
    id: 'people_pleaser_burnout',
    name: 'People-Pleaser Burnout',
    triggerRootCauses: [
      'people_pleasing', 'fear_of_abandonment_compliance',
      'codependency', 'caretaker_identity',
      'rc_poor_boundaries_overload', 'rc_generosity_beyond_means'
    ],
    checkQuestions: [
      {
        id: 'ppb_exhaustion',
        question: 'Are you physically exhausted from doing things for others?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'ppb_anxiety',
        question: "Do you feel anxious about others' reactions if you say no?",
        options: [
          { label: 'Yes, often', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'Rarely', score: 0 }
        ]
      },
      {
        id: 'ppb_resentment',
        question: 'Do you feel growing resentment toward people you help?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'ppb_worth',
        question: 'Do you feel your worth depends on being helpful or needed?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "Your exhaustion, your anxiety, your resentment, and your sense of worth may all be connected to one pattern: the belief that your value comes from what you give to others. When saying no feels impossible, eventually everything — body, mind, relationships — starts to show the cost."
  },
  {
    id: 'unprocessed_trauma_system',
    name: 'Unprocessed Trauma System',
    triggerRootCauses: [
      'rc_ptsd', 'rc_cptsd', 'rc_trauma_shutdown',
      'rc_anxiety_trauma_waking', 'rc_trauma_hyperreactivity',
      'rc_childhood_invalidation', 'childhood_trauma_family'
    ],
    checkQuestions: [
      {
        id: 'uts_pain',
        question: 'Do you experience chronic pain or physical symptoms without a clear medical cause?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'uts_emotions',
        question: 'Do you tend to suppress or shut down your emotions?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'uts_intimacy',
        question: 'Is it difficult for you to let people get close?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'uts_substances',
        question: 'Do you use substances, screens, or other behaviors to numb or escape?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "Your body, your emotions, your relationships, and your coping patterns may all be carrying the imprint of something that happened to you. Unprocessed trauma doesn't stay in one place — it shows up everywhere, often disguised as something else."
  },
  {
    id: 'depression_constellation',
    name: 'Depression Constellation',
    triggerRootCauses: [
      'rc_moderate_depression', 'rc_severe_depression', 'rc_dysthymia',
      'rc_functional_depression', 'rc_situational_depression',
      'rc_depression_fatigue', 'rc_depression_sleep',
      'rc_depression_appetite', 'rc_depression_cognitive_fog'
    ],
    checkQuestions: [
      {
        id: 'dc_fatigue',
        question: 'Are you experiencing persistent fatigue or low energy?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'dc_social',
        question: 'Have you pulled away from friends or social activities?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'dc_meaning',
        question: 'Does life feel meaningless or like nothing matters?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'dc_neglect',
        question: 'Have you stopped taking care of yourself physically or financially?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "Your fatigue, your withdrawal, your loss of meaning, and your self-neglect may not be separate problems. Depression often shows up as a constellation — affecting energy, relationships, purpose, and self-care all at once. Addressing the depression often improves everything else."
  },
  {
    id: 'the_avoider',
    name: 'The Avoider',
    triggerRootCauses: [
      'rc_avoidance_shame', 'rc_avoidance_overwhelm',
      'rc_health_anxiety_avoidance', 'rc_minimization',
      'rc_medical_mistrust', 'rc_self_neglect_serious',
      'rc_debt_shame'
    ],
    checkQuestions: [
      {
        id: 'av_anxiety',
        question: 'Do you experience anxiety or dread about things you need to deal with?',
        options: [
          { label: 'Yes, often', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'Rarely', score: 0 }
        ]
      },
      {
        id: 'av_areas',
        question: 'Do you avoid dealing with problems in more than one area of life?',
        options: [
          { label: 'Yes — multiple areas', score: 2 },
          { label: 'Maybe one other area', score: 1 },
          { label: 'Just this one area', score: 0 }
        ]
      }
    ],
    threshold: 3,
    description: "The avoidance you've identified may not be limited to one area. When avoidance becomes a pattern, it tends to show up everywhere — finances, health, relationships, difficult conversations. The good news: the same skills that help in one area work in all of them."
  },
  {
    id: 'self_medication_spiral',
    name: 'Self-Medication Spiral',
    triggerRootCauses: [
      'rc_alcohol_dependence', 'rc_alcohol_stress', 'rc_alcohol_sleep',
      'rc_alcohol_anesthetic', 'rc_alcohol_masking',
      'rc_cannabis_sleep', 'rc_cannabis_dependence',
      'rc_drug_dependence',
      'rc_screen_compulsion', 'rc_substance_numbing'
    ],
    checkQuestions: [
      {
        id: 'sms_depression',
        question: 'Are you experiencing depression or persistent low mood?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'sms_anxiety',
        question: 'Is anxiety a significant part of your daily experience?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'sms_relationships',
        question: 'Has the substance use or behavior affected your relationships?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'sms_identity',
        question: 'Do you feel confused about who you are without the substance or behavior?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "The substance use or compulsive behavior you've identified isn't happening in isolation. It's likely connected to pain, anxiety, or emptiness in other areas of your life. The substance is treating something — and until that something gets attention, the cycle tends to continue."
  },
  {
    id: 'the_comparer',
    name: 'The Comparer',
    triggerRootCauses: [
      'rc_social_comparison', 'rc_comparison_spending', 'rc_comparison_spending_appearances',
      'rc_body_image_distortion', 'rc_weight_stigma',
      'rc_appearance_worth', 'rc_comparison_others',
      'rc_financial_comparison'
    ],
    checkQuestions: [
      {
        id: 'comp_areas',
        question: 'Do you compare yourself to others in more than one area (body, money, career, social life)?',
        options: [
          { label: 'Yes — multiple areas', score: 2 },
          { label: 'Mainly one area', score: 1 },
          { label: 'Not really', score: 0 }
        ]
      },
      {
        id: 'comp_social',
        question: 'Does social media make you feel worse about yourself?',
        options: [
          { label: 'Yes, regularly', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 3,
    description: "Comparison is showing up across multiple areas of your life. Whether it's your body, your bank account, or your social life, the pattern is the same: measuring yourself against others and coming up short. The problem isn't that you're falling behind — it's that comparison itself is the trap."
  },
  {
    id: 'control_as_coping',
    name: 'Control as Coping',
    triggerRootCauses: [
      'rc_orthorexic', 'rc_control_food',
      'rc_compensatory_cycle', 'rc_compulsive_exercise',
      'rc_perfectionism', 'rc_perfectionism_overload',
      'rc_optimization_food'
    ],
    checkQuestions: [
      {
        id: 'cac_anxiety',
        question: 'Do you feel anxious when things are out of your control?',
        options: [
          { label: 'Yes, very', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'Not particularly', score: 0 }
        ]
      },
      {
        id: 'cac_rigid',
        question: 'Do your rules or standards cause friction in relationships?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'cac_perfectionism',
        question: 'Do you hold yourself to very high standards in multiple areas?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'In some areas', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "The control you're exerting over food, exercise, or standards may be serving a deeper purpose: managing anxiety. When the world feels uncertain, controlling what you can becomes a way to feel safe. But the rigidity often creates its own problems — in relationships, in self-compassion, in the ability to rest."
  },
  {
    id: 'caregiver_depletion',
    name: 'Caregiver Depletion',
    triggerRootCauses: [
      'rc_caregiver_burnout', 'rc_caregiving_schedule_chaos',
      'rc_caregiving_env_disruption', 'rc_caregiver_overwhelm',
      'rc_caregiving_limiting_hours', 'caregiver_isolation',
      'elder_care_burden'
    ],
    checkQuestions: [
      {
        id: 'cd_exhaustion',
        question: 'Are you physically exhausted from caregiving?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'cd_identity',
        question: 'Have you lost touch with who you are outside of caregiving?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'cd_isolation',
        question: 'Are you socially isolated because of caregiving demands?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'cd_resentment',
        question: 'Do you feel resentment — even if you also feel love and duty?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "Caregiving has become the lens through which your entire life is experienced. Your exhaustion, your isolation, your lost sense of self, and your resentment are all connected to the same source. This isn't a character flaw — it's what happens when one person carries too much for too long."
  },
  {
    id: 'grief_cascade',
    name: 'Grief Cascade',
    triggerRootCauses: [
      'rc_acute_grief', 'rc_complicated_grief', 'rc_ambiguous_loss',
      'rc_cumulative_loss', 'rc_grief_suppressed', 'rc_anticipatory_grief',
      'rc_grief_appetite', 'rc_grief_numbness',
      'rc_grief_cognitive_fog', 'rc_grief_anger',
      'rc_loss_health', 'rc_loss_identity', 'rc_loss_expected_future'
    ],
    checkQuestions: [
      {
        id: 'gc_mood',
        question: 'Has your mood significantly worsened since the loss?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'gc_identity',
        question: 'Has the loss disrupted your sense of who you are?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'gc_social',
        question: 'Have you withdrawn from people since the loss?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'gc_physical',
        question: 'Has the loss affected your body — sleep, appetite, energy, or pain?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "The loss you've experienced isn't staying in one place. It's affecting your mood, your identity, your relationships, and your body. This is what grief does — it cascades. These aren't separate problems to solve. They're all part of the same process of loss."
  },
  {
    id: 'chronic_condition_cascade',
    name: 'Chronic Condition Cascade',
    triggerRootCauses: [
      'rc_managed_chronic', 'rc_inadequate_pain_mgmt',
      'rc_central_sensitization', 'rc_cfs_me', 'rc_energy_cfs_me',
      'rc_pain_disrupted_sleep', 'rc_pain_limited_movement',
      'rc_body_obstacle'
    ],
    checkQuestions: [
      {
        id: 'ccc_mood',
        question: 'Has the condition affected your mood significantly?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'ccc_social',
        question: 'Has it reduced your social life or relationships?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'ccc_identity',
        question: 'Has it changed how you see yourself?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'ccc_financial',
        question: 'Has it created financial strain?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "Your chronic condition isn't just a physical issue — it's rippling into your mood, your relationships, your identity, and your finances. This cascade is common and real. The condition may not be curable, but many of its secondary effects are addressable."
  },
  {
    id: 'achievement_trap',
    name: 'Achievement Trap',
    triggerRootCauses: [
      'rc_conditional_achievement', 'rc_perfectionism',
      'rc_imposter', 'rc_workaholism',
      'rc_overwork', 'rc_external_validation',
      'rc_arriving_emptiness', 'rc_productivity_trap'
    ],
    checkQuestions: [
      {
        id: 'at_overwork',
        question: 'Do you regularly work beyond what is healthy or sustainable?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Sometimes', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'at_relationships',
        question: 'Have your relationships suffered because of your drive to achieve?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'at_burnout',
        question: 'Do you feel burned out but unable to stop?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Somewhat', score: 1 },
          { label: 'No', score: 0 }
        ]
      },
      {
        id: 'at_identity',
        question: 'Would you feel lost or worthless if you stopped achieving?',
        options: [
          { label: 'Yes', score: 2 },
          { label: 'Maybe', score: 1 },
          { label: 'No', score: 0 }
        ]
      }
    ],
    threshold: 4,
    description: "Your drive to achieve isn't just a work habit — it's become the foundation of your self-worth. The overwork, the relationship strain, the burnout, and the fragile identity all connect to the same belief: I am only as good as what I produce. That belief is challengeable."
  }
];

export function findTriggeredPatterns(rootCauseIds) {
  return patternDefinitions.filter(pattern =>
    pattern.triggerRootCauses.some(trigger => rootCauseIds.includes(trigger))
  );
}

export function getPatternQuestions(pattern) {
  return pattern.checkQuestions;
}

export function evaluatePattern(pattern, answers) {
  let totalScore = 0;
  for (const q of pattern.checkQuestions) {
    const answer = answers[q.id];
    if (answer !== undefined) {
      totalScore += answer;
    }
  }
  return {
    confirmed: totalScore >= pattern.threshold,
    score: totalScore,
    pattern
  };
}

export function getPatternDefinitions() {
  return patternDefinitions;
}
