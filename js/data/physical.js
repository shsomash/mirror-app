// ─────────────────────────────────────────────────────────────
//  Your Mirror — Physical Well-Being decision tree
//  Every branch and every terminal root-cause node from the
//  specification is encoded below.
// ─────────────────────────────────────────────────────────────

export const physicalStart = 'physical_start';

export const physicalTree = {

  /* ============================================================
     LAYER 3 — Sub-dimension selection
     ============================================================ */
  'physical_start': {
    id: 'physical_start',
    question: "Let's narrow down what's happening physically. Which of these is the biggest issue?",
    options: [
      { label: 'Sleep problems', next: 'sleep_pattern', rootCause: null },
      { label: 'Eating or nutrition issues', next: 'eating_pattern', rootCause: null },
      { label: 'Pain or physical symptoms', next: 'pain_pattern', rootCause: null },
      { label: 'Low energy or chronic exhaustion', next: 'energy_pattern', rootCause: null },
      { label: 'Movement or physical capacity declining', next: 'movement_pattern', rootCause: null },
      { label: 'Avoiding medical care', next: 'medical_avoidance', rootCause: null },
      { label: 'Relationship with your body (appearance, aging, self-image)', next: 'body_relationship', rootCause: null },
      { label: 'Substance use affecting your body', next: 'substance_use', rootCause: null },
      { label: 'Living with a health condition (chronic illness, disability)', next: 'health_condition', rootCause: null }
    ]
  },

  /* ============================================================
     BRANCH: LIVING WITH A HEALTH CONDITION
     ============================================================ */
  'health_condition': {
    id: 'health_condition',
    question: "What's the main challenge with your health condition?",
    options: [
      {
        label: 'Managing a chronic condition (diabetes, autoimmune, heart, etc.)',
        next: null,
        rootCause: {
          id: 'rc_chronic_illness_management',
          label: 'Chronic illness management burden',
          agency: 'PARTIAL',
          inControl: 'Adherence, lifestyle, advocacy with providers',
          notInControl: 'The condition itself'
        }
      },
      {
        label: 'Newly diagnosed — adjusting to a new reality',
        next: null,
        rootCause: {
          id: 'rc_new_diagnosis_adjustment',
          label: 'New diagnosis adjustment',
          agency: 'PARTIAL',
          inControl: 'Learning, treatment, support-seeking',
          notInControl: 'The diagnosis; grief for previous health is real'
        }
      },
      {
        label: 'Condition is progressive or worsening',
        next: null,
        rootCause: {
          id: 'rc_progressive_condition',
          label: 'Progressive or worsening condition',
          agency: 'LOW',
          inControl: 'Quality of life within limits; pacing',
          notInControl: 'Disease progression'
        }
      },
      {
        label: 'Invisible illness — people don\'t understand',
        next: null,
        rootCause: {
          id: 'rc_invisible_illness',
          label: 'Invisible illness (misunderstood by others)',
          agency: 'PARTIAL',
          inControl: 'Choosing who to educate; setting limits',
          notInControl: 'Others\' understanding and accommodation'
        }
      },
      {
        label: 'Treatment fatigue — tired of managing it',
        next: null,
        rootCause: {
          id: 'rc_treatment_fatigue',
          label: 'Treatment fatigue',
          agency: 'PARTIAL',
          inControl: 'Simplifying where possible; support',
          notInControl: 'The ongoing nature of the condition'
        }
      },
      {
        label: 'Can\'t afford treatment or medication',
        next: null,
        rootCause: {
          id: 'rc_treatment_cost_barrier',
          label: 'Treatment cost barrier',
          agency: 'LOW',
          inControl: 'Patient assistance programs, advocacy',
          notInControl: 'Healthcare costs are systemic'
        }
      }
    ]
  },

  /* ============================================================
     BRANCH: SLEEP PROBLEMS
     ============================================================ */
  'sleep_pattern': {
    id: 'sleep_pattern',
    question: "What's happening with your sleep?",
    options: [
      { label: "Can't fall asleep", next: 'sleep_cant_fall', rootCause: null },
      { label: "Can't stay asleep / wake up frequently", next: 'sleep_cant_stay', rootCause: null },
      { label: 'Sleep enough hours but wake up exhausted', next: 'sleep_exhausted', rootCause: null },
      { label: 'Sleep schedule is chaotic', next: 'sleep_chaotic', rootCause: null },
      { label: 'Relying on substances to sleep', next: 'sleep_substances', rootCause: null }
    ]
  },

  /* ---- Can't fall asleep ---- */
  'sleep_cant_fall': {
    id: 'sleep_cant_fall',
    question: 'When you lie down, what happens?',
    options: [
      {
        label: 'Mind races with anxious thoughts',
        next: null,
        rootCause: {
          id: 'rc_anxiety_insomnia',
          label: 'Anxiety-driven insomnia',
          agency: 'HIGH',
          inControl: 'Anxiety is a treatable condition',
          notInControl: null
        }
      },
      {
        label: 'Replaying the day, ruminating on problems',
        next: null,
        rootCause: {
          id: 'rc_stress_cycling',
          label: 'Unresolved stress cycling',
          agency: 'HIGH',
          inControl: 'Identifying and addressing the stress source',
          notInControl: 'The stressor itself may or may not be changeable'
        }
      },
      { label: 'Physically not tired at bedtime', next: 'sleep_not_tired', rootCause: null },
      { label: 'Body is uncomfortable (pain, restlessness)', next: 'sleep_body_uncomfortable', rootCause: null }
    ]
  },

  /* ---- Not tired at bedtime ---- */
  'sleep_not_tired': {
    id: 'sleep_not_tired',
    question: "What's keeping you awake?",
    options: [
      {
        label: 'Shift work or irregular hours',
        next: null,
        rootCause: {
          id: 'rc_work_schedule_misalign',
          label: 'Work schedule misalignment',
          agency: 'LOW',
          inControl: 'Optimizing sleep within the constraint',
          notInControl: 'The schedule itself if job requires it'
        }
      },
      {
        label: 'Screens and stimulation late into the night',
        next: null,
        rootCause: {
          id: 'rc_stimulation_wakefulness',
          label: 'Stimulation-driven wakefulness',
          agency: 'HIGH',
          inControl: 'Screen habits, wind-down routines',
          notInControl: null
        }
      },
      {
        label: 'Natural night owl pattern, always been this way',
        next: null,
        rootCause: {
          id: 'rc_circadian_mismatch',
          label: 'Circadian preference mismatch with life demands',
          agency: 'PARTIAL',
          inControl: 'Adjusting schedule where possible',
          notInControl: 'Your natural chronotype'
        }
      },
      {
        label: 'Napping during the day out of exhaustion',
        next: null,
        rootCause: {
          id: 'rc_fragmented_sleep_wake',
          label: 'Fragmented sleep-wake cycle',
          agency: 'HIGH',
          inControl: 'Establishing consistent timing',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Body uncomfortable ---- */
  'sleep_body_uncomfortable': {
    id: 'sleep_body_uncomfortable',
    question: "What's the discomfort?",
    options: [
      {
        label: 'Chronic pain',
        next: null,
        rootCause: {
          id: 'rc_pain_disrupted_sleep',
          label: 'Pain-disrupted sleep',
          agency: 'PARTIAL',
          inControl: 'Pain management approaches',
          notInControl: 'The underlying condition may be chronic'
        }
      },
      {
        label: 'Restless legs or involuntary movement',
        next: null,
        rootCause: {
          id: 'rc_restless_leg',
          label: 'Restless leg syndrome or movement disorder',
          agency: 'PARTIAL',
          inControl: 'Condition is manageable',
          notInControl: "It's a neurological condition"
        }
      },
      {
        label: 'Partner snoring, kids, environmental noise',
        next: null,
        rootCause: {
          id: 'rc_env_sleep_disruption',
          label: 'Environmental sleep disruption',
          agency: 'PARTIAL',
          inControl: 'Earplugs, white noise, separate sleeping if needed',
          notInControl: "Other people's behavior"
        }
      },
      {
        label: 'Temperature, light, or bedroom environment',
        next: null,
        rootCause: {
          id: 'rc_sleep_env_mismatch',
          label: 'Sleep environment mismatch',
          agency: 'HIGH',
          inControl: 'Temperature, light, bedding adjustments',
          notInControl: null
        }
      },
      {
        label: 'Pregnancy or postpartum physical discomfort',
        next: null,
        rootCause: {
          id: 'rc_pregnancy_sleep',
          label: 'Pregnancy/postpartum sleep disruption',
          agency: 'LOW',
          inControl: 'Comfort measures',
          notInControl: 'This is a temporary biological phase'
        }
      }
    ]
  },

  /* ---- Can't stay asleep ---- */
  'sleep_cant_stay': {
    id: 'sleep_cant_stay',
    question: "What's waking you up?",
    options: [
      {
        label: 'Wake with anxiety or racing thoughts',
        next: null,
        rootCause: {
          id: 'rc_anxiety_trauma_waking',
          label: 'Anxiety or trauma-driven waking',
          agency: 'PARTIAL',
          inControl: 'Anxiety and trauma are treatable',
          notInControl: 'Healing is not instant'
        }
      },
      {
        label: 'Need to urinate frequently',
        next: null,
        rootCause: {
          id: 'rc_nocturia',
          label: 'Nocturia',
          agency: 'PARTIAL',
          inControl: 'Fluid timing, medical evaluation',
          notInControl: 'Underlying medical cause may require management'
        }
      },
      {
        label: 'Partner, children, or noise',
        next: null,
        rootCause: {
          id: 'rc_caregiving_env_disruption',
          label: 'Caregiving or environmental disruption',
          agency: 'PARTIAL',
          inControl: 'Sharing duties, optimizing what you can',
          notInControl: 'The demands themselves may be fixed'
        }
      },
      {
        label: "Wake very early (4-5am) and can't return to sleep",
        next: null,
        rootCause: {
          id: 'rc_early_morning_waking',
          label: 'Early morning waking',
          agency: 'PARTIAL',
          inControl: 'Depends on cause (depression, cortisol, aging)',
          notInControl: 'Some causes are more addressable than others'
        }
      },
      {
        label: 'No clear reason, just fragmented sleep',
        next: null,
        rootCause: {
          id: 'rc_fragmented_unknown',
          label: 'Fragmented sleep of unknown origin',
          agency: 'UNCERTAIN',
          inControl: 'Medical evaluation may reveal cause',
          notInControl: 'Until cause is identified, hard to know'
        }
      },
      {
        label: 'Hot flashes or night sweats',
        next: null,
        rootCause: {
          id: 'rc_hormonal_sleep',
          label: 'Hormonal sleep disruption',
          agency: 'PARTIAL',
          inControl: 'Hormone management options exist',
          notInControl: 'Hormonal transitions are biological'
        }
      }
    ]
  },

  /* ---- Sleep enough but wake exhausted ---- */
  'sleep_exhausted': {
    id: 'sleep_exhausted',
    question: "You're getting hours but not rest. Have you noticed any of these?",
    options: [
      {
        label: 'Snoring, gasping, partner says you stop breathing',
        next: null,
        rootCause: {
          id: 'rc_sleep_apnea',
          label: 'Obstructive sleep apnea',
          agency: 'HIGH',
          inControl: 'Highly treatable with medical support',
          notInControl: null
        }
      },
      {
        label: 'Tossing, turning, restless throughout the night',
        next: null,
        rootCause: {
          id: 'rc_anxiety_pain_fragment',
          label: 'Anxiety or pain fragmenting sleep quality',
          agency: 'PARTIAL',
          inControl: 'Anxiety and pain are treatable',
          notInControl: 'Healing takes time'
        }
      },
      {
        label: 'Heavy, leaden feeling on waking regardless of hours',
        next: null,
        rootCause: {
          id: 'rc_depression_sleep',
          label: 'Depression-related sleep',
          agency: 'PARTIAL',
          inControl: 'Depression is treatable',
          notInControl: 'Recovery takes time'
        }
      },
      {
        label: 'Fatigue persists even with good sleep for weeks',
        next: null,
        rootCause: {
          id: 'rc_cfs_me',
          label: 'Chronic fatigue syndrome / ME',
          agency: 'LOW',
          inControl: 'Energy management, pacing',
          notInControl: 'CFS/ME is a chronic condition with no reliable cure'
        }
      },
      {
        label: 'Recently started new medication',
        next: null,
        rootCause: {
          id: 'rc_med_sleep_quality',
          label: 'Medication-induced sleep quality disruption',
          agency: 'HIGH',
          inControl: 'Discuss alternatives with prescriber',
          notInControl: null
        }
      },
      {
        label: 'Grinding teeth, jaw clenching',
        next: null,
        rootCause: {
          id: 'rc_bruxism',
          label: 'Bruxism',
          agency: 'PARTIAL',
          inControl: 'Night guard, stress reduction',
          notInControl: 'Underlying cause may be persistent'
        }
      }
    ]
  },

  /* ---- Chaotic schedule ---- */
  'sleep_chaotic': {
    id: 'sleep_chaotic',
    question: "What's driving the irregular pattern?",
    options: [
      {
        label: 'Shift work or variable work hours',
        next: null,
        rootCause: {
          id: 'rc_occupational_schedule',
          label: 'Occupational schedule constraint',
          agency: 'LOW',
          inControl: 'Optimizing within the constraint',
          notInControl: "The job's demands"
        }
      },
      {
        label: 'Crash-and-sleep pattern (insomnia then collapse)',
        next: null,
        rootCause: {
          id: 'rc_insomnia_exhaust_cycle',
          label: 'Insomnia-exhaustion cycle',
          agency: 'HIGH',
          inControl: 'Breaking the cycle with consistent timing',
          notInControl: null
        }
      },
      {
        label: 'No consistent routine, sleep whenever',
        next: null,
        rootCause: {
          id: 'rc_absent_sleep_structure',
          label: 'Absent sleep structure',
          agency: 'HIGH',
          inControl: 'Establishing routine',
          notInControl: null
        }
      },
      {
        label: 'Jet lag or frequent travel',
        next: null,
        rootCause: {
          id: 'rc_travel_circadian',
          label: 'Travel-induced circadian disruption',
          agency: 'PARTIAL',
          inControl: 'Recovery strategies',
          notInControl: 'Travel demands may be fixed'
        }
      },
      {
        label: 'Gaming, socializing, or activities keeping you up',
        next: null,
        rootCause: {
          id: 'rc_behavioral_delayed_sleep',
          label: 'Behavioral delayed sleep',
          agency: 'HIGH',
          inControl: 'Changing the behavior',
          notInControl: null
        }
      },
      {
        label: 'Caregiving demands at unpredictable hours',
        next: null,
        rootCause: {
          id: 'rc_caregiving_schedule_chaos',
          label: 'Caregiving-driven schedule chaos',
          agency: 'PARTIAL',
          inControl: 'Sharing duties, support',
          notInControl: 'The caregiving need itself'
        }
      }
    ]
  },

  /* ---- Substance-aided sleep ---- */
  'sleep_substances': {
    id: 'sleep_substances',
    question: 'What are you using?',
    options: [
      {
        label: 'Alcohol',
        next: null,
        rootCause: {
          id: 'rc_alcohol_sleep',
          label: 'Alcohol as sleep aid',
          agency: 'HIGH',
          inControl: 'The drinking is changeable; the underlying cause needs attention',
          notInControl: null
        }
      },
      {
        label: 'Prescription sleep medication (long-term use)',
        next: null,
        rootCause: {
          id: 'rc_sleep_med_dependence',
          label: 'Sleep medication dependence',
          agency: 'PARTIAL',
          inControl: 'Tapering is possible with support',
          notInControl: 'The original sleep problem needs addressing'
        }
      },
      {
        label: 'OTC aids (Benadryl, melatonin, CBD) nightly',
        next: null,
        rootCause: {
          id: 'rc_otc_insomnia',
          label: 'OTC compensation for untreated insomnia',
          agency: 'HIGH',
          inControl: 'Addressing the root insomnia',
          notInControl: null
        }
      },
      {
        label: 'Cannabis',
        next: null,
        rootCause: {
          id: 'rc_cannabis_sleep',
          label: 'Cannabis as sleep aid',
          agency: 'PARTIAL',
          inControl: 'Usage is changeable',
          notInControl: "The underlying need it's addressing"
        }
      },
      {
        label: 'Multiple substances combined',
        next: null,
        rootCause: {
          id: 'rc_polypharmacy_sleep',
          label: 'Polypharmacy sleep pattern',
          agency: 'PARTIAL',
          inControl: 'Simplifying with medical guidance',
          notInControl: 'Underlying conditions driving multiple substances'
        }
      }
    ]
  },

  /* ============================================================
     BRANCH: EATING / NUTRITION ISSUES
     ============================================================ */
  'eating_pattern': {
    id: 'eating_pattern',
    question: "What's happening with food and eating?",
    options: [
      { label: 'Not eating enough', next: 'eating_not_enough', rootCause: null },
      { label: 'Eating too much or binge eating', next: 'eating_too_much', rootCause: null },
      { label: 'Food quality is consistently poor', next: 'eating_poor_quality', rootCause: null },
      { label: 'Eating pattern is chaotic (skip, then binge)', next: 'eating_chaotic', rootCause: null },
      { label: 'Obsessive about food quality or "eating perfectly"', next: 'eating_obsessive', rootCause: null },
      { label: 'Eating to manage emotions', next: 'eating_emotional', rootCause: null },
      { label: 'Significant unintended weight change', next: 'eating_weight_change', rootCause: null }
    ]
  },

  /* ---- Not eating enough ---- */
  'eating_not_enough': {
    id: 'eating_not_enough',
    question: "Why aren't you eating enough?",
    options: [
      {
        label: 'No appetite, forgetting to eat',
        next: null,
        rootCause: {
          id: 'rc_depression_appetite',
          label: 'Depression-suppressed appetite',
          agency: 'PARTIAL',
          inControl: 'Depression is treatable; appetite often returns',
          notInControl: 'Recovery timeline'
        }
      },
      {
        label: 'Intentionally restricting to control weight',
        next: null,
        rootCause: {
          id: 'rc_restrictive_eating',
          label: 'Restrictive eating pattern',
          agency: 'PARTIAL',
          inControl: 'Pattern is addressable with support',
          notInControl: 'It often has deep psychological roots'
        }
      },
      {
        label: "Can't afford enough food",
        next: null,
        rootCause: {
          id: 'rc_food_insecurity',
          label: 'Food insecurity',
          agency: 'LOW',
          inControl: 'Accessing available resources',
          notInControl: 'Income and systemic factors'
        }
      },
      {
        label: 'Too busy, no time to eat',
        next: null,
        rootCause: {
          id: 'rc_time_scarcity_eating',
          label: 'Time scarcity deprioritizing eating',
          agency: 'PARTIAL',
          inControl: 'Some restructuring may be possible',
          notInControl: 'The demands creating the scarcity'
        }
      },
      {
        label: 'Nausea, digestive issues, or food sensitivities',
        next: null,
        rootCause: {
          id: 'rc_gi_barrier',
          label: 'GI or medical barrier to eating',
          agency: 'PARTIAL',
          inControl: 'Medical evaluation and management',
          notInControl: 'The underlying condition'
        }
      },
      {
        label: 'Anxiety killing appetite',
        next: null,
        rootCause: {
          id: 'rc_anxiety_appetite',
          label: 'Anxiety-suppressed appetite',
          agency: 'HIGH',
          inControl: 'Anxiety is treatable; appetite follows',
          notInControl: null
        }
      },
      {
        label: 'Medication side effect',
        next: null,
        rootCause: {
          id: 'rc_med_appetite',
          label: 'Medication-suppressed appetite',
          agency: 'PARTIAL',
          inControl: 'Discussing alternatives with prescriber',
          notInControl: 'May need the medication'
        }
      },
      {
        label: 'Grief or emotional pain',
        next: null,
        rootCause: {
          id: 'rc_grief_appetite',
          label: 'Grief-related appetite loss',
          agency: 'PARTIAL',
          inControl: 'Grief processing helps over time',
          notInControl: 'Grief has its own timeline'
        }
      }
    ]
  },

  /* ---- Eating too much ---- */
  'eating_too_much': {
    id: 'eating_too_much',
    question: 'What does the overeating look like?',
    options: [
      {
        label: 'Episodes of eating large amounts with loss of control',
        next: null,
        rootCause: {
          id: 'rc_binge_eating',
          label: 'Binge eating pattern',
          agency: 'PARTIAL',
          inControl: 'Pattern is treatable with support',
          notInControl: "It's often deeply rooted"
        }
      },
      {
        label: 'Constant grazing, never feeling satisfied',
        next: null,
        rootCause: {
          id: 'rc_satiety_disruption',
          label: 'Persistent hunger or satiety signal disruption',
          agency: 'PARTIAL',
          inControl: 'Medical evaluation may help',
          notInControl: 'May be hormonal or neurological'
        }
      },
      {
        label: 'Overeating at night after restricting during day',
        next: null,
        rootCause: {
          id: 'rc_restrict_binge_cycle',
          label: 'Restrict-binge cycle',
          agency: 'HIGH',
          inControl: 'Breaking the restriction breaks the cycle',
          notInControl: null
        }
      },
      {
        label: 'Eating past fullness regularly without distress',
        next: null,
        rootCause: {
          id: 'rc_normalized_overeating',
          label: 'Normalized overeating',
          agency: 'HIGH',
          inControl: 'Awareness and portion recalibration',
          notInControl: null
        }
      },
      {
        label: 'Eating when not hungry but compelled to',
        next: null,
        rootCause: {
          id: 'rc_compulsive_eating',
          label: 'Compulsive eating',
          agency: 'PARTIAL',
          inControl: 'Treatable with support',
          notInControl: 'Compulsive patterns run deep'
        }
      }
    ]
  },

  /* ---- Poor food quality ---- */
  'eating_poor_quality': {
    id: 'eating_poor_quality',
    question: 'Why is food quality poor?',
    options: [
      {
        label: "Can't afford fresh, whole foods",
        next: null,
        rootCause: {
          id: 'rc_financial_food',
          label: 'Financial constraint on food quality',
          agency: 'LOW',
          inControl: 'Working within budget',
          notInControl: 'Income is structural'
        }
      },
      {
        label: "Don't know how to cook or prepare food",
        next: null,
        rootCause: {
          id: 'rc_cooking_skill_gap',
          label: 'Cooking skill gap',
          agency: 'HIGH',
          inControl: 'Skills are learnable',
          notInControl: null
        }
      },
      {
        label: 'Too exhausted to cook',
        next: null,
        rootCause: {
          id: 'rc_fatigue_food',
          label: 'Fatigue-driven food choices',
          agency: 'PARTIAL',
          inControl: 'Depends on fatigue source',
          notInControl: 'The fatigue itself may be hard to change'
        }
      },
      {
        label: 'Using food for comfort',
        next: null,
        rootCause: {
          id: 'rc_comfort_eating',
          label: 'Comfort eating pattern',
          agency: 'HIGH',
          inControl: 'Alternative coping is learnable',
          notInControl: null
        }
      },
      {
        label: 'Food desert — limited access to quality food',
        next: null,
        rootCause: {
          id: 'rc_food_desert',
          label: 'Geographic food access barrier',
          agency: 'LOW',
          inControl: 'Some workarounds exist',
          notInControl: 'The food environment'
        }
      },
      {
        label: 'Cultural or family food patterns normalized',
        next: null,
        rootCause: {
          id: 'rc_inherited_food',
          label: 'Inherited food patterns',
          agency: 'PARTIAL',
          inControl: 'Awareness helps; change is gradual',
          notInControl: 'Deeply ingrained habits'
        }
      },
      {
        label: "Don't care enough to eat well",
        next: null,
        rootCause: {
          id: 'rc_self_neglect_food',
          label: 'Self-neglect via food',
          agency: 'PARTIAL',
          inControl: 'May indicate depression or low self-worth needing attention',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Chaotic eating pattern ---- */
  'eating_chaotic': {
    id: 'eating_chaotic',
    question: "What's driving the chaos?",
    options: [
      {
        label: 'Diet, then break diet, then binge',
        next: null,
        rootCause: {
          id: 'rc_diet_binge_cycle',
          label: 'Diet-binge cycle',
          agency: 'HIGH',
          inControl: 'Stopping the dieting stops the cycle',
          notInControl: null
        }
      },
      {
        label: 'Forget to eat, then feel ravenous and overcorrect',
        next: null,
        rootCause: {
          id: 'rc_adhd_interoception',
          label: 'ADHD or poor interoception',
          agency: 'PARTIAL',
          inControl: 'Structure and reminders help',
          notInControl: 'ADHD is persistent'
        }
      },
      {
        label: 'Too busy for regular meals',
        next: null,
        rootCause: {
          id: 'rc_work_caregiving_meals',
          label: 'Work or caregiving crowding out meals',
          agency: 'PARTIAL',
          inControl: 'Some restructuring possible',
          notInControl: 'The demands may be fixed'
        }
      },
      {
        label: 'No structure or routine at all',
        next: null,
        rootCause: {
          id: 'rc_absent_eating_structure',
          label: 'Absent eating structure',
          agency: 'HIGH',
          inControl: 'Structure is buildable',
          notInControl: null
        }
      },
      {
        label: 'Eating only when others eat, not when hungry',
        next: null,
        rootCause: {
          id: 'rc_external_eating',
          label: 'Externally driven eating schedule',
          agency: 'HIGH',
          inControl: 'Tuning into your own hunger signals',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Obsessive about food ---- */
  'eating_obsessive': {
    id: 'eating_obsessive',
    question: 'What does the obsession look like?',
    options: [
      {
        label: "Rigid rules about 'clean' or 'pure' eating",
        next: null,
        rootCause: {
          id: 'rc_orthorexic',
          label: 'Orthorexic pattern',
          agency: 'PARTIAL',
          inControl: 'Addressable with support',
          notInControl: 'The anxiety driving it needs attention'
        }
      },
      {
        label: 'Extreme tracking of macros, calories, ingredients',
        next: null,
        rootCause: {
          id: 'rc_control_food',
          label: 'Control-seeking through food',
          agency: 'PARTIAL',
          inControl: 'The control need often traces to anxiety',
          notInControl: null
        }
      },
      {
        label: 'Compensating for eating with rigid rules or exercise',
        next: null,
        rootCause: {
          id: 'rc_compensatory_cycle',
          label: 'Compensatory cycle',
          agency: 'PARTIAL',
          inControl: 'Cycle is breakable with support',
          notInControl: 'Deep psychological roots'
        }
      },
      {
        label: "Can't eat socially because of food rules",
        next: null,
        rootCause: {
          id: 'rc_food_rigidity_social',
          label: 'Food rigidity isolating you socially',
          agency: 'HIGH',
          inControl: 'Loosening rules is possible',
          notInControl: null
        }
      },
      {
        label: 'Constant research about "optimal" nutrition',
        next: null,
        rootCause: {
          id: 'rc_optimization_food',
          label: 'Optimization fixation applied to food',
          agency: 'HIGH',
          inControl: 'Recognizing the pattern is the first step',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Emotional eating ---- */
  'eating_emotional': {
    id: 'eating_emotional',
    question: 'When do you turn to food emotionally?',
    options: [
      {
        label: 'When stressed or anxious',
        next: null,
        rootCause: {
          id: 'rc_food_stress_reg',
          label: 'Food as stress regulation',
          agency: 'HIGH',
          inControl: 'Other coping methods exist',
          notInControl: null
        }
      },
      {
        label: 'When sad, lonely, or bored',
        next: null,
        rootCause: {
          id: 'rc_food_emotional_filler',
          label: 'Food as emotional filler',
          agency: 'PARTIAL',
          inControl: 'Addressing the underlying emotion',
          notInControl: 'The emptiness itself may be hard to resolve quickly'
        }
      },
      {
        label: 'To celebrate or reward myself (only reliable pleasure)',
        next: null,
        rootCause: {
          id: 'rc_food_primary_pleasure',
          label: 'Food as primary pleasure source',
          agency: 'PARTIAL',
          inControl: 'Expanding pleasure sources',
          notInControl: 'If other pleasures are genuinely limited (illness, poverty, isolation)'
        }
      },
      {
        label: 'After conflict or emotional upset',
        next: null,
        rootCause: {
          id: 'rc_food_conflict_soothe',
          label: 'Food as post-conflict soothing',
          agency: 'HIGH',
          inControl: 'Other soothing methods exist',
          notInControl: null
        }
      },
      {
        label: 'When overwhelmed and unable to cope',
        next: null,
        rootCause: {
          id: 'rc_food_overwhelm',
          label: 'Food as overwhelm response',
          agency: 'PARTIAL',
          inControl: 'Depends on reducing the overwhelm',
          notInControl: 'The source of overwhelm may be fixed'
        }
      }
    ]
  },

  /* ---- Unintended weight change ---- */
  'eating_weight_change': {
    id: 'eating_weight_change',
    question: "What's happening?",
    options: [
      {
        label: 'Gaining weight without eating more',
        next: null,
        rootCause: {
          id: 'rc_metabolic_weight',
          label: 'Metabolic, hormonal, or medication-driven weight change',
          agency: 'PARTIAL',
          inControl: 'Medical evaluation and management',
          notInControl: 'The underlying cause'
        }
      },
      {
        label: 'Losing weight without trying',
        next: null,
        rootCause: {
          id: 'rc_unexplained_weight_loss',
          label: 'Unexplained weight loss',
          agency: 'UNCERTAIN',
          inControl: 'Medical evaluation needed first',
          notInControl: 'Until cause known, agency unclear'
        }
      },
      {
        label: 'Weight fluctuating significantly',
        next: null,
        rootCause: {
          id: 'rc_weight_instability',
          label: 'Weight instability',
          agency: 'PARTIAL',
          inControl: 'Depends on cause',
          notInControl: 'Hormonal and medical factors'
        }
      }
    ]
  },

  /* ============================================================
     BRANCH: PAIN OR PHYSICAL SYMPTOMS
     ============================================================ */
  'pain_pattern': {
    id: 'pain_pattern',
    question: 'What are you experiencing?',
    options: [
      { label: 'Chronic pain with a diagnosis', next: 'pain_diagnosed', rootCause: null },
      { label: 'Chronic pain without a clear cause', next: 'pain_undiagnosed', rootCause: null },
      { label: 'Pain from overexertion or injury', next: 'pain_overexertion', rootCause: null },
      { label: 'Unexplained physical symptoms (fatigue, headaches, GI, etc.)', next: 'pain_unexplained', rootCause: null },
      { label: 'Pain or symptoms you\'re ignoring or minimizing', next: 'pain_ignoring', rootCause: null },
      { label: 'Post-surgical or post-treatment pain', next: 'pain_postsurgical', rootCause: null },
      { label: 'Pain that worsens with stress', next: 'pain_stress', rootCause: null }
    ]
  },

  /* ---- Diagnosed chronic pain ---- */
  'pain_diagnosed': {
    id: 'pain_diagnosed',
    question: 'How is it being managed?',
    options: [
      {
        label: 'Have treatment, it helps enough',
        next: null,
        rootCause: {
          id: 'rc_managed_chronic',
          label: 'Managed chronic condition',
          agency: 'PARTIAL',
          inControl: 'Optimizing management, quality of life around it',
          notInControl: 'The condition itself'
        }
      },
      {
        label: "Have treatment, it's not enough",
        next: null,
        rootCause: {
          id: 'rc_inadequate_pain_mgmt',
          label: 'Inadequately managed chronic pain',
          agency: 'HIGH',
          inControl: 'Seeking better management is possible',
          notInControl: 'Complete elimination of pain may not be'
        }
      },
      {
        label: 'Not getting treatment',
        next: null,
        rootCause: {
          id: 'rc_untreated_diagnosed',
          label: 'Untreated diagnosed condition',
          agency: 'HIGH',
          inControl: 'Seeking treatment',
          notInControl: 'Barriers to access'
        }
      },
      {
        label: 'Treatment helps but side effects are a problem',
        next: null,
        rootCause: {
          id: 'rc_treatment_side_effects',
          label: 'Treatment side effect burden',
          agency: 'PARTIAL',
          inControl: 'Discussing alternatives with provider',
          notInControl: 'May have limited options'
        }
      }
    ]
  },

  /* ---- Undiagnosed chronic pain ---- */
  'pain_undiagnosed': {
    id: 'pain_undiagnosed',
    question: 'Have you had this evaluated medically?',
    options: [
      {
        label: 'Yes, doctors found nothing',
        next: null,
        rootCause: {
          id: 'rc_medically_unexplained',
          label: 'Medically unexplained pain',
          agency: 'UNCERTAIN',
          inControl: 'The pain is real; cause is unclear',
          notInControl: 'Until identified, agency is hard to assess'
        }
      },
      {
        label: 'Yes, diagnosed with fibromyalgia or similar',
        next: null,
        rootCause: {
          id: 'rc_central_sensitization',
          label: 'Central sensitization syndrome',
          agency: 'PARTIAL',
          inControl: 'Multimodal management helps',
          notInControl: 'Not curable, but manageable'
        }
      },
      {
        label: "No, haven't gone",
        next: null,
        rootCause: {
          id: 'rc_unevaluated_pain',
          label: 'Unevaluated chronic pain',
          agency: 'HIGH',
          inControl: 'Getting evaluated is the first step',
          notInControl: 'What the evaluation reveals'
        }
      },
      {
        label: 'Multiple doctors, conflicting opinions',
        next: null,
        rootCause: {
          id: 'rc_diagnostic_uncertainty',
          label: 'Diagnostic uncertainty',
          agency: 'PARTIAL',
          inControl: 'Seeking additional opinions',
          notInControl: "Medicine doesn't have answers for everything"
        }
      }
    ]
  },

  /* ---- Overexertion / injury ---- */
  'pain_overexertion': {
    id: 'pain_overexertion',
    question: 'How did it happen?',
    options: [
      {
        label: 'Pushed too hard in exercise or physical work',
        next: null,
        rootCause: {
          id: 'rc_overexertion',
          label: 'Overexertion pattern',
          agency: 'HIGH',
          inControl: 'Changing the behavior',
          notInControl: null
        }
      },
      {
        label: 'Acute injury, slow recovery',
        next: null,
        rootCause: {
          id: 'rc_injury_recovery',
          label: 'Injury recovery',
          agency: 'PARTIAL',
          inControl: 'Supporting recovery',
          notInControl: 'Healing timeline'
        }
      },
      {
        label: 'Repetitive strain from work',
        next: null,
        rootCause: {
          id: 'rc_repetitive_strain',
          label: 'Occupational repetitive strain',
          agency: 'PARTIAL',
          inControl: 'Ergonomics, breaks',
          notInControl: 'The job demands themselves'
        }
      },
      {
        label: 'Returned too quickly from previous injury',
        next: null,
        rootCause: {
          id: 'rc_premature_return',
          label: 'Premature return to activity',
          agency: 'HIGH',
          inControl: 'Allowing proper recovery',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Unexplained symptoms ---- */
  'pain_unexplained': {
    id: 'pain_unexplained',
    question: 'What symptoms?',
    options: [
      {
        label: 'Headaches, muscle tension, jaw clenching',
        next: null,
        rootCause: {
          id: 'rc_tension_symptoms',
          label: 'Tension-pattern symptoms',
          agency: 'HIGH',
          inControl: 'Stress reduction addresses the symptoms',
          notInControl: null
        }
      },
      {
        label: 'GI issues (IBS, nausea, stomach pain)',
        next: null,
        rootCause: {
          id: 'rc_gut_stress',
          label: 'Gut-stress connection',
          agency: 'PARTIAL',
          inControl: 'Stress management helps GI symptoms',
          notInControl: 'The connection is biological'
        }
      },
      {
        label: 'Fatigue, body aches, brain fog together',
        next: null,
        rootCause: {
          id: 'rc_systemic_stress_physical',
          label: 'Systemic stress or depression manifesting physically',
          agency: 'PARTIAL',
          inControl: 'Treating the underlying condition',
          notInControl: 'Recovery timeline'
        }
      },
      {
        label: 'Symptoms worse during stressful periods',
        next: null,
        rootCause: {
          id: 'rc_stress_amplified_somatic',
          label: 'Stress-amplified somatic symptoms',
          agency: 'HIGH',
          inControl: 'Reducing stress reduces symptoms',
          notInControl: null
        }
      },
      {
        label: 'Dizziness, heart racing, chest tightness',
        next: null,
        rootCause: {
          id: 'rc_anxiety_physical',
          label: 'Anxiety manifesting as physical symptoms',
          agency: 'HIGH',
          inControl: 'Anxiety is highly treatable',
          notInControl: null
        }
      },
      {
        label: 'Skin issues (eczema, hives, breakouts) worsening',
        next: null,
        rootCause: {
          id: 'rc_stress_skin',
          label: 'Stress-skin connection',
          agency: 'PARTIAL',
          inControl: 'Stress management helps',
          notInControl: 'Skin conditions may have independent factors'
        }
      },
      {
        label: 'Tingling, numbness, or strange sensations',
        next: null,
        rootCause: {
          id: 'rc_anxiety_somatic_sensations',
          label: 'Anxiety-driven somatic sensations',
          agency: 'HIGH',
          inControl: 'Anxiety treatment resolves most',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Ignoring symptoms ---- */
  'pain_ignoring': {
    id: 'pain_ignoring',
    question: 'Why are you not addressing them?',
    options: [
      {
        label: "Don't think it's serious enough",
        next: null,
        rootCause: {
          id: 'rc_minimization',
          label: 'Minimization pattern',
          agency: 'HIGH',
          inControl: 'Shifting the pattern',
          notInControl: null
        }
      },
      {
        label: '"I can tough it out"',
        next: null,
        rootCause: {
          id: 'rc_stoic_neglect',
          label: 'Stoic self-neglect',
          agency: 'HIGH',
          inControl: "Recognizing toughness isn't the same as health",
          notInControl: null
        }
      },
      {
        label: "Can't afford care",
        next: null,
        rootCause: {
          id: 'rc_financial_barrier_care',
          label: 'Financial barrier to care',
          agency: 'LOW',
          inControl: 'Seeking sliding-scale or community options',
          notInControl: 'Healthcare costs are systemic'
        }
      },
      {
        label: "Don't trust doctors or medical system",
        next: null,
        rootCause: {
          id: 'rc_medical_mistrust',
          label: 'Medical mistrust',
          agency: 'PARTIAL',
          inControl: 'Finding trustworthy providers is possible',
          notInControl: 'Past experiences and systemic issues are real'
        }
      },
      {
        label: 'Too busy to deal with it',
        next: null,
        rootCause: {
          id: 'rc_demands_crowd_selfcare',
          label: 'Life demands crowding out self-care',
          agency: 'PARTIAL',
          inControl: 'Some reprioritization may be possible',
          notInControl: 'The demands themselves'
        }
      },
      {
        label: "Afraid of what they'll find",
        next: null,
        rootCause: {
          id: 'rc_health_anxiety_avoidance',
          label: 'Health anxiety driving avoidance',
          agency: 'HIGH',
          inControl: 'The anxiety is treatable; the avoidance makes it worse',
          notInControl: null
        }
      },
      {
        label: 'Previous bad experience with medical system',
        next: null,
        rootCause: {
          id: 'rc_medical_trauma',
          label: 'Medical trauma',
          agency: 'PARTIAL',
          inControl: 'Processing the trauma is possible',
          notInControl: "The past experience can't be undone"
        }
      },
      {
        label: "Don't think I deserve care",
        next: null,
        rootCause: {
          id: 'rc_low_worth_medical_neglect',
          label: 'Low self-worth manifesting as medical neglect',
          agency: 'PARTIAL',
          inControl: 'Self-worth is addressable',
          notInControl: "It's often deeply rooted"
        }
      }
    ]
  },

  /* ---- Post-surgical / post-treatment ---- */
  'pain_postsurgical': {
    id: 'pain_postsurgical',
    question: "What's happening?",
    options: [
      {
        label: 'Pain lasting longer than expected',
        next: null,
        rootCause: {
          id: 'rc_prolonged_postop',
          label: 'Prolonged post-operative recovery',
          agency: 'PARTIAL',
          inControl: 'Supporting recovery',
          notInControl: "The body's timeline"
        }
      },
      {
        label: 'Chronic pain developed after surgery',
        next: null,
        rootCause: {
          id: 'rc_postsurgical_chronic',
          label: 'Post-surgical chronic pain syndrome',
          agency: 'PARTIAL',
          inControl: 'Pain management approaches exist',
          notInControl: 'Complete resolution may not be possible'
        }
      },
      {
        label: 'Side effects from treatment ongoing',
        next: null,
        rootCause: {
          id: 'rc_treatment_aftermath',
          label: 'Treatment aftermath',
          agency: 'PARTIAL',
          inControl: 'Managing side effects',
          notInControl: 'Some may be permanent'
        }
      }
    ]
  },

  /* ---- Stress-worsened pain ---- */
  'pain_stress': {
    id: 'pain_stress',
    question: 'Pain increases when you\'re stressed?',
    options: [
      {
        label: 'Yes, noticeably worse during stressful periods',
        next: null,
        rootCause: {
          id: 'rc_stress_amplified_pain',
          label: 'Stress-amplified pain',
          agency: 'HIGH',
          inControl: 'Stress reduction reduces pain',
          notInControl: null
        }
      },
      {
        label: 'Pain triggers stress, stress worsens pain (cycle)',
        next: null,
        rootCause: {
          id: 'rc_pain_stress_loop',
          label: 'Pain-stress feedback loop',
          agency: 'PARTIAL',
          inControl: 'Breaking the loop from either end',
          notInControl: 'Both sides reinforce each other'
        }
      },
      {
        label: 'Pain is mainly present during emotional distress',
        next: null,
        rootCause: {
          id: 'rc_psychosomatic_pain',
          label: 'Primarily psychosomatic pain',
          agency: 'PARTIAL',
          inControl: 'The emotional source is addressable',
          notInControl: 'The pain itself is real and present'
        }
      }
    ]
  },

  /* ============================================================
     BRANCH: LOW ENERGY / CHRONIC EXHAUSTION
     ============================================================ */
  'energy_pattern': {
    id: 'energy_pattern',
    question: 'What does the exhaustion look like?',
    options: [
      { label: 'Tired despite sleeping enough', next: 'energy_tired_despite_sleep', rootCause: null },
      { label: 'Exhausted from overwork or overcommitment', next: 'energy_overwork', rootCause: null },
      { label: 'Fatigue with pain, inflammation, or immune issues', next: 'energy_fatigue_pain', rootCause: null },
      { label: 'Exhaustion from constant worry or hypervigilance', next: 'energy_worry', rootCause: null },
      { label: 'Energy crashes at specific times of day', next: 'energy_crashes', rootCause: null },
      { label: 'Exhaustion that started after a specific event', next: 'energy_post_event', rootCause: null }
    ]
  },

  /* ---- Tired despite sleeping enough ---- */
  'energy_tired_despite_sleep': {
    id: 'energy_tired_despite_sleep',
    question: "You're sleeping enough but still exhausted. What fits best?",
    options: [
      {
        label: 'Heavy, flat, nothing feels worth the effort',
        next: null,
        rootCause: {
          id: 'rc_depression_fatigue',
          label: 'Depression-related fatigue',
          agency: 'PARTIAL',
          inControl: 'Depression is treatable',
          notInControl: 'Recovery timeline'
        }
      },
      {
        label: 'Fatigue persists for weeks/months despite rest',
        next: null,
        rootCause: {
          id: 'rc_energy_cfs_me',
          label: 'Chronic fatigue syndrome / ME',
          agency: 'LOW',
          inControl: 'Energy management, pacing',
          notInControl: 'The condition itself'
        }
      },
      {
        label: 'Other symptoms too (hair loss, cold intolerance, weight change)',
        next: null,
        rootCause: {
          id: 'rc_thyroid_anemia',
          label: 'Thyroid, anemia, or other medical cause',
          agency: 'HIGH',
          inControl: 'Medical causes are often correctable',
          notInControl: null
        }
      },
      {
        label: 'Sleep quality might be poor (snoring, tossing, apnea)',
        next: null,
        rootCause: {
          id: 'rc_sleep_quality_masking',
          label: 'Sleep quality issue masking as energy issue',
          agency: 'HIGH',
          inControl: 'Addressing sleep',
          notInControl: null
        }
      },
      {
        label: 'Diet is poor or skipping meals regularly',
        next: null,
        rootCause: {
          id: 'rc_nutritional_deficiency',
          label: 'Nutritional deficiency',
          agency: 'HIGH',
          inControl: 'Dietary change or supplementation',
          notInControl: null
        }
      },
      {
        label: 'Very sedentary — barely move during the day',
        next: null,
        rootCause: {
          id: 'rc_sedentary_deconditioning',
          label: 'Sedentary deconditioning',
          agency: 'HIGH',
          inControl: 'Gradual increase in movement',
          notInControl: null
        }
      },
      {
        label: 'Started a new medication recently',
        next: null,
        rootCause: {
          id: 'rc_med_side_effect_energy',
          label: 'Medication side effect',
          agency: 'PARTIAL',
          inControl: 'Discussing alternatives',
          notInControl: 'May need the medication'
        }
      }
    ]
  },

  /* ---- Overwork / overcommitment ---- */
  'energy_overwork': {
    id: 'energy_overwork',
    question: "What's draining you?",
    options: [
      {
        label: 'Working extremely long hours (60+ per week)',
        next: null,
        rootCause: {
          id: 'rc_overwork',
          label: 'Overwork (60+ hours/week)',
          agency: 'PARTIAL',
          inControl: 'Setting boundaries',
          notInControl: 'Financial necessity or job demands'
        }
      },
      {
        label: 'Caregiving responsibilities on top of everything',
        next: null,
        rootCause: {
          id: 'rc_caregiver_burnout',
          label: 'Caregiver burnout',
          agency: 'PARTIAL',
          inControl: 'Seeking support, sharing load',
          notInControl: 'The caregiving need itself'
        }
      },
      {
        label: 'Emotionally drained even if hours aren\'t extreme',
        next: null,
        rootCause: {
          id: 'rc_emotional_exhaustion',
          label: 'Emotional exhaustion (burnout)',
          agency: 'PARTIAL',
          inControl: 'Rest and boundaries',
          notInControl: 'Recovery from burnout is slow'
        }
      }
    ]
  },

  /* ---- Fatigue with pain / inflammation / immune ---- */
  'energy_fatigue_pain': {
    id: 'energy_fatigue_pain',
    question: 'What does the fatigue look like alongside physical symptoms?',
    options: [
      {
        label: 'Widespread pain plus crushing fatigue, lasting months',
        next: null,
        rootCause: {
          id: 'rc_energy_cfs_me_pain',
          label: 'Chronic fatigue syndrome / ME',
          agency: 'LOW',
          inControl: 'Energy management, pacing',
          notInControl: 'The condition itself'
        }
      },
      {
        label: 'Fatigue with hormonal symptoms (cycle changes, weight shifts)',
        next: null,
        rootCause: {
          id: 'rc_adrenal_hormonal',
          label: 'Adrenal or hormonal fatigue pattern',
          agency: 'PARTIAL',
          inControl: 'Medical evaluation and management',
          notInControl: 'Hormonal shifts may be biological'
        }
      },
      {
        label: 'Started after an illness and never recovered',
        next: null,
        rootCause: {
          id: 'rc_post_viral',
          label: 'Post-viral fatigue (long COVID or similar)',
          agency: 'LOW',
          inControl: 'Pacing, gradual return',
          notInControl: 'The condition is poorly understood'
        }
      }
    ]
  },

  /* ---- Constant worry / hypervigilance ---- */
  'energy_worry': {
    id: 'energy_worry',
    question: 'Your exhaustion is driven by constant mental alertness?',
    options: [
      {
        label: "Yes, I'm always on edge and it's draining me",
        next: null,
        rootCause: {
          id: 'rc_anxiety_hypervig_exhaust',
          label: 'Anxiety/hypervigilance exhaustion',
          agency: 'HIGH',
          inControl: 'Anxiety is treatable; energy returns',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Energy crashes at specific times ---- */
  'energy_crashes': {
    id: 'energy_crashes',
    question: 'When do the crashes happen and what else is going on?',
    options: [
      {
        label: 'Crashes after meals or when skipping meals',
        next: null,
        rootCause: {
          id: 'rc_nutritional_deficiency_crash',
          label: 'Nutritional deficiency',
          agency: 'HIGH',
          inControl: 'Dietary change or supplementation',
          notInControl: null
        }
      },
      {
        label: 'Afternoon crashes with hormonal or stress symptoms',
        next: null,
        rootCause: {
          id: 'rc_adrenal_hormonal_crash',
          label: 'Adrenal or hormonal fatigue pattern',
          agency: 'PARTIAL',
          inControl: 'Medical evaluation and management',
          notInControl: 'Hormonal shifts may be biological'
        }
      },
      {
        label: 'Morning exhaustion no matter when I go to bed',
        next: null,
        rootCause: {
          id: 'rc_sleep_quality_crash',
          label: 'Sleep quality issue masking as energy issue',
          agency: 'HIGH',
          inControl: 'Addressing sleep',
          notInControl: null
        }
      },
      {
        label: 'Energy dropped after starting or changing medication',
        next: null,
        rootCause: {
          id: 'rc_med_side_effect_crash',
          label: 'Medication side effect',
          agency: 'PARTIAL',
          inControl: 'Discussing alternatives',
          notInControl: 'May need the medication'
        }
      }
    ]
  },

  /* ---- After a specific event ---- */
  'energy_post_event': {
    id: 'energy_post_event',
    question: 'What happened before the exhaustion started?',
    options: [
      {
        label: 'A major loss, trauma, or life change',
        next: null,
        rootCause: {
          id: 'rc_post_event_exhaustion',
          label: 'Post-event exhaustion (grief, trauma, major change)',
          agency: 'PARTIAL',
          inControl: 'Processing the event',
          notInControl: 'Healing has its own timeline'
        }
      },
      {
        label: 'An illness (COVID, flu, infection) and never bounced back',
        next: null,
        rootCause: {
          id: 'rc_post_viral_event',
          label: 'Post-viral fatigue (long COVID or similar)',
          agency: 'LOW',
          inControl: 'Pacing, gradual return',
          notInControl: 'The condition is poorly understood'
        }
      },
      {
        label: 'Everything just started feeling heavy and pointless',
        next: null,
        rootCause: {
          id: 'rc_depression_fatigue_event',
          label: 'Depression-related fatigue',
          agency: 'PARTIAL',
          inControl: 'Depression is treatable',
          notInControl: 'Recovery timeline'
        }
      }
    ]
  },

  /* ============================================================
     BRANCH: MOVEMENT / PHYSICAL CAPACITY DECLINE
     ============================================================ */
  'movement_pattern': {
    id: 'movement_pattern',
    question: "What's happening with your movement or physical capacity?",
    options: [
      { label: "Stopped exercising (used to, don't anymore)", next: 'movement_stopped', rootCause: null },
      { label: 'Never established a movement habit', next: 'movement_never', rootCause: null },
      { label: 'Physical capacity declining (strength, balance, flexibility)', next: 'movement_declining', rootCause: null },
      { label: 'Movement limited by pain or condition', next: 'movement_pain_limited', rootCause: null },
      { label: 'Exercise has become compulsive or punishing', next: 'movement_compulsive', rootCause: null }
    ]
  },

  /* ---- Stopped exercising ---- */
  'movement_stopped': {
    id: 'movement_stopped',
    question: 'What happened?',
    options: [
      {
        label: 'Lost all motivation, everything feels pointless',
        next: null,
        rootCause: {
          id: 'rc_depression_movement',
          label: 'Depression killing motivation to move',
          agency: 'PARTIAL',
          inControl: 'Depression is treatable; movement often returns',
          notInControl: 'Recovery timeline'
        }
      },
      {
        label: 'No time — work, family, obligations fill every hour',
        next: null,
        rootCause: {
          id: 'rc_time_scarcity_movement',
          label: 'Time scarcity',
          agency: 'PARTIAL',
          inControl: 'Some restructuring may be possible',
          notInControl: 'The demands creating the scarcity'
        }
      },
      {
        label: "If I can't do it perfectly/intensely, I don't do it at all",
        next: null,
        rootCause: {
          id: 'rc_all_or_nothing_exercise',
          label: 'All-or-nothing exercise pattern',
          agency: 'HIGH',
          inControl: 'The mindset is changeable',
          notInControl: null
        }
      },
      {
        label: 'Used to be fit / athletic and losing that identity is painful',
        next: null,
        rootCause: {
          id: 'rc_fitness_identity_loss',
          label: 'Loss of identity around fitness',
          agency: 'PARTIAL',
          inControl: 'Redefining your relationship with movement',
          notInControl: 'Past capacity may not return'
        }
      },
      {
        label: 'Desk job all day, too drained to move after',
        next: null,
        rootCause: {
          id: 'rc_sedentary_work',
          label: 'Sedentary work environment',
          agency: 'HIGH',
          inControl: 'Building movement into the day',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Never established movement ---- */
  'movement_never': {
    id: 'movement_never',
    question: "What's in the way?",
    options: [
      {
        label: "Never found a type of movement I enjoy",
        next: null,
        rootCause: {
          id: 'rc_never_enjoyed_movement',
          label: 'Never learned to enjoy movement',
          agency: 'HIGH',
          inControl: 'Exploration is possible',
          notInControl: null
        }
      },
      {
        label: 'Feel too self-conscious — gym anxiety, body shame',
        next: null,
        rootCause: {
          id: 'rc_gym_anxiety',
          label: 'Gym anxiety or body shame preventing movement',
          agency: 'HIGH',
          inControl: 'Many alternatives to gym environments exist',
          notInControl: null
        }
      },
      {
        label: "No time — it's always the first thing cut",
        next: null,
        rootCause: {
          id: 'rc_time_scarcity_never',
          label: 'Time scarcity',
          agency: 'PARTIAL',
          inControl: 'Some restructuring may be possible',
          notInControl: 'The demands creating the scarcity'
        }
      },
      {
        label: 'Sit all day for work, hard to break the pattern',
        next: null,
        rootCause: {
          id: 'rc_sedentary_work_never',
          label: 'Sedentary work environment',
          agency: 'HIGH',
          inControl: 'Building movement into the day',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Capacity declining ---- */
  'movement_declining': {
    id: 'movement_declining',
    question: 'What do you think is causing it?',
    options: [
      {
        label: 'Getting older, body just doesn\'t cooperate like it used to',
        next: null,
        rootCause: {
          id: 'rc_age_decline',
          label: 'Age-related capacity decline',
          agency: 'PARTIAL',
          inControl: 'Exercise and adaptation slow the decline',
          notInControl: 'Aging itself is inevitable'
        }
      },
      {
        label: 'Pain makes movement difficult or risky',
        next: null,
        rootCause: {
          id: 'rc_pain_limited_movement',
          label: 'Pain-limited movement',
          agency: 'PARTIAL',
          inControl: 'Pain management and adapted movement',
          notInControl: 'The pain source'
        }
      },
      {
        label: 'Disability or chronic condition constraining what I can do',
        next: null,
        rootCause: {
          id: 'rc_disability_movement',
          label: 'Disability constraining movement',
          agency: 'PARTIAL',
          inControl: 'Adapted movement within capacity',
          notInControl: 'The condition itself'
        }
      },
      {
        label: 'Just haven\'t been moving — deconditioning from inactivity',
        next: null,
        rootCause: {
          id: 'rc_sedentary_deconditioning_decline',
          label: 'Sedentary deconditioning',
          agency: 'HIGH',
          inControl: 'Gradual increase in movement',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Pain-limited movement (direct) ---- */
  'movement_pain_limited': {
    id: 'movement_pain_limited',
    question: 'Pain is limiting your ability to move?',
    options: [
      {
        label: 'Yes, movement causes or worsens pain',
        next: null,
        rootCause: {
          id: 'rc_pain_limited_direct',
          label: 'Pain-limited movement',
          agency: 'PARTIAL',
          inControl: 'Pain management and adapted movement',
          notInControl: 'The pain source'
        }
      }
    ]
  },

  /* ---- Compulsive exercise ---- */
  'movement_compulsive': {
    id: 'movement_compulsive',
    question: 'What drives the compulsion?',
    options: [
      {
        label: "Can't stop — anxiety or guilt if I miss a workout",
        next: null,
        rootCause: {
          id: 'rc_compulsive_exercise',
          label: 'Compulsive exercise',
          agency: 'PARTIAL',
          inControl: 'The pattern is addressable with support',
          notInControl: 'The anxiety driving it may need separate attention'
        }
      },
      {
        label: 'Exercising to "earn" or "burn off" food',
        next: null,
        rootCause: {
          id: 'rc_exercise_punishment',
          label: 'Exercise as punishment for eating',
          agency: 'PARTIAL',
          inControl: 'The pattern is breakable with support',
          notInControl: 'Often linked to deeper body image or eating issues'
        }
      }
    ]
  },

  /* ============================================================
     BRANCH: MEDICAL CARE AVOIDANCE
     ============================================================ */
  'medical_avoidance': {
    id: 'medical_avoidance',
    question: "Why are you avoiding medical care?",
    options: [
      {
        label: "Can't afford it",
        next: null,
        rootCause: {
          id: 'rc_financial_barrier_uninsured',
          label: 'Financial barrier (uninsured/underinsured)',
          agency: 'LOW',
          inControl: 'Seeking sliding-scale or community options',
          notInControl: 'Healthcare costs are systemic'
        }
      },
      {
        label: "Afraid of what they'll find",
        next: null,
        rootCause: {
          id: 'rc_health_anxiety_diagnosis',
          label: 'Health anxiety (fear of diagnosis)',
          agency: 'HIGH',
          inControl: 'The anxiety is treatable; the avoidance makes it worse',
          notInControl: null
        }
      },
      {
        label: "Don't trust doctors or medical system",
        next: null,
        rootCause: {
          id: 'rc_medical_trauma_avoidance',
          label: 'Medical trauma (past dismissal, harm)',
          agency: 'PARTIAL',
          inControl: 'Finding better providers is possible',
          notInControl: "The past can't be changed"
        }
      },
      {
        label: "Don't think it's serious enough",
        next: null,
        rootCause: {
          id: 'rc_self_neglect_serious',
          label: 'Self-neglect ("not serious enough")',
          agency: 'HIGH',
          inControl: 'Shifting the pattern',
          notInControl: null
        }
      },
      {
        label: "Can't get time off work / logistical barriers",
        next: null,
        rootCause: {
          id: 'rc_work_constraint_care',
          label: "Work constraints (can't take time)",
          agency: 'PARTIAL',
          inControl: 'Telehealth, flexible scheduling',
          notInControl: 'Job precarity'
        }
      },
      {
        label: 'Previous bad experience',
        next: null,
        rootCause: {
          id: 'rc_systemic_mistrust',
          label: 'Systemic medical mistrust (racial, cultural)',
          agency: 'PARTIAL',
          inControl: 'Finding culturally competent providers',
          notInControl: 'Systemic bias is real'
        }
      },
      {
        label: "Don't think I deserve care",
        next: null,
        rootCause: {
          id: 'rc_low_worth_neglect',
          label: 'Low self-worth driving neglect',
          agency: 'PARTIAL',
          inControl: 'Self-worth is addressable',
          notInControl: "It's often deeply rooted"
        }
      },
      {
        label: 'Language or cultural barriers',
        next: null,
        rootCause: {
          id: 'rc_language_cultural_barrier',
          label: 'Language or cultural barriers',
          agency: 'PARTIAL',
          inControl: 'Seeking providers who speak your language',
          notInControl: 'Availability may be limited'
        }
      },
      {
        label: 'Immigration status fear',
        next: null,
        rootCause: {
          id: 'rc_immigration_fear',
          label: 'Immigration status fear',
          agency: 'LOW',
          inControl: 'Community health options may exist',
          notInControl: 'The fear is grounded in real risk'
        }
      },
      {
        label: 'Dental care avoidance (shame or cost)',
        next: null,
        rootCause: {
          id: 'rc_dental_avoidance',
          label: 'Dental care avoidance (shame or cost)',
          agency: 'PARTIAL',
          inControl: 'Gradual re-engagement',
          notInControl: 'Cost is real barrier'
        }
      }
    ]
  },

  /* ============================================================
     BRANCH: RELATIONSHIP WITH BODY
     ============================================================ */
  'body_relationship': {
    id: 'body_relationship',
    question: "What's the struggle with your body?",
    options: [
      { label: 'Hate how my body looks', next: 'body_appearance', rootCause: null },
      { label: "Body doesn't perform like it used to", next: 'body_performance', rootCause: null },
      {
        label: 'Aging is distressing',
        next: null,
        rootCause: {
          id: 'rc_aging_distress',
          label: 'Aging distress',
          agency: 'PARTIAL',
          inControl: 'Relationship with aging is shapeable',
          notInControl: 'Aging itself'
        }
      },
      {
        label: 'Body feels like a burden or enemy',
        next: null,
        rootCause: {
          id: 'rc_body_obstacle',
          label: 'Body as obstacle (chronic illness or disability)',
          agency: 'PARTIAL',
          inControl: 'Adaptation and management',
          notInControl: 'The condition'
        }
      },
      {
        label: 'Disconnect from body (don\'t feel "in" it)',
        next: null,
        rootCause: {
          id: 'rc_dissociation_body',
          label: 'Dissociation from body',
          agency: 'PARTIAL',
          inControl: 'Reconnection is possible through somatic work',
          notInControl: 'Often linked to trauma'
        }
      },
      {
        label: 'Gender or body dysphoria',
        next: null,
        rootCause: {
          id: 'rc_gender_dysphoria',
          label: 'Gender dysphoria',
          agency: 'PARTIAL',
          inControl: 'Transition and expression options exist',
          notInControl: 'Social acceptance varies; biology has limits'
        }
      }
    ]
  },

  /* ---- Body appearance ---- */
  'body_appearance': {
    id: 'body_appearance',
    question: "What's behind the feeling?",
    options: [
      {
        label: 'Distorted perception of how I look',
        next: null,
        rootCause: {
          id: 'rc_body_image_distortion',
          label: 'Body image distortion',
          agency: 'PARTIAL',
          inControl: 'Perception is addressable with support',
          notInControl: 'Cultural messaging is constant'
        }
      },
      {
        label: 'Feeling judged by society for my weight/shape',
        next: null,
        rootCause: {
          id: 'rc_weight_stigma',
          label: 'Internalized weight stigma',
          agency: 'PARTIAL',
          inControl: 'Challenging internalized beliefs',
          notInControl: 'Societal stigma is real'
        }
      },
      {
        label: 'My worth depends on how I look',
        next: null,
        rootCause: {
          id: 'rc_appearance_worth',
          label: 'Appearance-dependent self-worth',
          agency: 'HIGH',
          inControl: 'Decoupling worth from appearance',
          notInControl: null
        }
      },
      {
        label: 'Constantly comparing to others',
        next: null,
        rootCause: {
          id: 'rc_comparison_others',
          label: 'Comparison to others',
          agency: 'HIGH',
          inControl: 'The comparison habit is changeable',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Body performance ---- */
  'body_performance': {
    id: 'body_performance',
    question: 'What changed?',
    options: [
      {
        label: 'Post-injury or illness',
        next: null,
        rootCause: {
          id: 'rc_post_injury_grief',
          label: 'Post-injury or post-illness body grief',
          agency: 'PARTIAL',
          inControl: 'Processing the grief and adapting',
          notInControl: 'The injury or illness itself'
        }
      },
      {
        label: 'Aging — body just can\'t do what it used to',
        next: null,
        rootCause: {
          id: 'rc_comparison_younger_self',
          label: 'Comparison to younger self',
          agency: 'PARTIAL',
          inControl: 'Adjusting expectations and adapting',
          notInControl: 'Aging is inevitable'
        }
      },
      {
        label: 'Post-pregnancy body changes',
        next: null,
        rootCause: {
          id: 'rc_post_pregnancy_body',
          label: 'Post-pregnancy body changes',
          agency: 'PARTIAL',
          inControl: 'Gradual recovery and acceptance',
          notInControl: 'Some changes may be permanent'
        }
      }
    ]
  },

  /* ============================================================
     BRANCH: SUBSTANCE USE AFFECTING BODY
     ============================================================ */
  'substance_use': {
    id: 'substance_use',
    question: 'What substance is affecting your body?',
    options: [
      { label: 'Alcohol', next: 'substance_alcohol', rootCause: null },
      {
        label: 'Nicotine/vaping',
        next: null,
        rootCause: {
          id: 'rc_nicotine_addiction',
          label: 'Nicotine addiction',
          agency: 'PARTIAL',
          inControl: 'Cessation is achievable with support',
          notInControl: 'Addiction is neurological'
        }
      },
      {
        label: 'Cannabis',
        next: null,
        rootCause: {
          id: 'rc_cannabis_dependence',
          label: 'Cannabis dependence',
          agency: 'PARTIAL',
          inControl: 'Reduction or cessation is possible',
          notInControl: 'May be masking anxiety, pain, or insomnia'
        }
      },
      {
        label: 'Prescription medication misuse',
        next: null,
        rootCause: {
          id: 'rc_prescription_misuse',
          label: 'Prescription misuse',
          agency: 'PARTIAL',
          inControl: 'Addressable with medical support',
          notInControl: 'Physical dependence may complicate'
        }
      },
      {
        label: 'Other drugs',
        next: null,
        rootCause: {
          id: 'rc_recreational_drugs',
          label: 'Recreational drug use affecting health',
          agency: 'HIGH',
          inControl: 'Use patterns are changeable',
          notInControl: null
        }
      },
      {
        label: 'Caffeine dependence',
        next: null,
        rootCause: {
          id: 'rc_caffeine_dependence',
          label: 'Caffeine dependence affecting sleep/anxiety',
          agency: 'HIGH',
          inControl: 'Reduction is fully in your control',
          notInControl: null
        }
      }
    ]
  },

  /* ---- Alcohol follow-up ---- */
  'substance_alcohol': {
    id: 'substance_alcohol',
    question: "What's your relationship with alcohol?",
    options: [
      {
        label: 'Social drinking that\'s increased over time',
        next: null,
        rootCause: {
          id: 'rc_social_drinking_escalated',
          label: 'Social drinking escalated',
          agency: 'HIGH',
          inControl: 'Pattern is catchable and reversible early',
          notInControl: null
        }
      },
      {
        label: 'Using it to cope with anxiety or depression',
        next: null,
        rootCause: {
          id: 'rc_alcohol_masking',
          label: 'Alcohol masking anxiety or depression',
          agency: 'PARTIAL',
          inControl: 'The underlying condition needs attention',
          notInControl: 'The substance is addressing a real need poorly'
        }
      },
      {
        label: 'Difficult to stop or cut back',
        next: null,
        rootCause: {
          id: 'rc_alcohol_dependence',
          label: 'Alcohol dependence',
          agency: 'PARTIAL',
          inControl: 'Recovery is possible',
          notInControl: 'It requires sustained effort and often support'
        }
      },
      {
        label: 'Using multiple substances',
        next: null,
        rootCause: {
          id: 'rc_polysubstance',
          label: 'Polysubstance pattern',
          agency: 'PARTIAL',
          inControl: 'Addressable with support',
          notInControl: 'Often indicates significant underlying distress'
        }
      }
    ]
  }
};
