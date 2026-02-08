export const identityStart = 'identity_start';

export const identityTree = {

  // ──────────────────────────────────────────────
  //  ENTRY POINT — Sub-dimension picker (Layer 3)
  // ──────────────────────────────────────────────
  'identity_start': {
    id: 'identity_start',
    question: "Let's narrow down the identity challenge. Which resonates most?",
    options: [
      { label: "Don't know who I am", next: 'identity_unknown', rootCause: null },
      { label: 'Gap between how I see myself and how others see me', next: 'perception_gap', rootCause: null },
      { label: 'Lost sense of purpose or direction', next: 'lost_purpose', rootCause: null },
      { label: "Life doesn't align with my values", next: 'values_misalignment', rootCause: null },
      { label: 'Feeling stuck or stagnant', next: 'stuck_stagnant', rootCause: null },
      { label: 'Existential questions (meaning, mortality, control)', next: 'existential', rootCause: null },
      { label: 'Identity in transition (becoming someone new)', next: 'identity_transition', rootCause: null },
      { label: 'Carrying shame about who I am', next: 'shame', rootCause: null },
      { label: 'Defined by roles and responsibilities, not by who I actually am', next: 'role_collector', rootCause: null }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: ROLE COLLECTOR
  // ════════════════════════════════════════════════
  'role_collector': {
    id: 'role_collector',
    question: "What's happening with all the roles?",
    options: [
      { label: 'If I stopped doing things for everyone, I wouldn\'t know who I am', next: null, rootCause: { id: 'rc_role_collector_no_core', label: 'Role collector (no core self beneath the roles)', agency: 'PARTIAL', inControl: 'Self-discovery is possible, even late', notInControl: 'The roles may be hard to shed without consequences' } },
      { label: 'Keep adding roles because saying no feels impossible', next: null, rootCause: { id: 'rc_role_collector_cant_say_no', label: 'Role accumulation from inability to say no', agency: 'HIGH', inControl: 'Boundaries are learnable', notInControl: null } },
      { label: 'Roles conflict with each other and I\'m stretched thin', next: null, rootCause: { id: 'rc_role_conflict', label: 'Role conflict (competing demands)', agency: 'PARTIAL', inControl: 'Prioritizing; some roles may be droppable', notInControl: 'Some roles are genuinely non-negotiable' } },
      { label: 'Lost a major role and don\'t know who I am without it', next: null, rootCause: { id: 'rc_identity_single_role', label: 'Identity built on single role, role ended', agency: 'HIGH', inControl: 'Identity can be rebuilt; this is a normal transition', notInControl: 'Grief for the old identity' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: DON'T KNOW WHO I AM
  // ════════════════════════════════════════════════
  'identity_unknown': {
    id: 'identity_unknown',
    question: "What's the confusion?",
    options: [
      { label: 'Never developed an independent identity', next: 'identity_unknown_never_developed', rootCause: null },
      { label: "Identity was one role — now it's gone", next: null, rootCause: { id: 'rc_identity_single_role', label: 'Identity built on single role, role ended', agency: 'HIGH', inControl: 'Identity can be rebuilt; this is a normal transition', notInControl: 'Grief for the old identity' } },
      { label: 'Life transition disrupted who I thought I was', next: null, rootCause: { id: 'rc_life_transition_disruption', label: 'Life transition disruption', agency: 'PARTIAL', inControl: 'Rebuilding identity', notInControl: 'The disruption itself' } },
      { label: 'Too many versions of myself in different contexts', next: null, rootCause: { id: 'rc_compartmentalized_selves', label: 'Compartmentalized selves', agency: 'PARTIAL', inControl: 'Integration is possible', notInControl: 'Some context-switching is normal' } },
      { label: 'Actively avoiding self-knowledge', next: null, rootCause: { id: 'rc_fear_self_knowledge', label: 'Fear of self-knowledge', agency: 'PARTIAL', inControl: 'Exploration is possible with support', notInControl: 'The fear often protects something' } },
      { label: "Know who I'm not, but can't articulate who I am", next: null, rootCause: { id: 'rc_know_who_im_not', label: "Know who I'm not but not who I am", agency: 'PARTIAL', inControl: 'Defining by negation is a starting point', notInControl: 'Positive identity takes time' } }
    ]
  },

  // Follow-up: What shaped you instead?
  'identity_unknown_never_developed': {
    id: 'identity_unknown_never_developed',
    question: 'What shaped you instead?',
    options: [
      { label: "Parents' expectations", next: null, rootCause: { id: 'rc_others_expectations', label: "Grew into others' expectations", agency: 'HIGH', inControl: 'Self-discovery is possible at any age', notInControl: 'Lost time' } },
      { label: 'Never taught to develop own identity', next: null, rootCause: { id: 'rc_never_taught_identity', label: 'Never taught to develop independent identity', agency: 'HIGH', inControl: 'Buildable', notInControl: null } },
      { label: 'Masking neurodivergence', next: null, rootCause: { id: 'rc_neurodivergent_identity', label: 'Neurodivergent identity confusion (masking erased authentic self)', agency: 'PARTIAL', inControl: 'Unmasking is possible in safe contexts', notInControl: 'Social cost of authenticity may be real' } },
      { label: 'Cultural complexity', next: null, rootCause: { id: 'rc_cultural_identity_complexity', label: 'Cultural identity complexity (bicultural, immigrant, third culture)', agency: 'PARTIAL', inControl: 'Integration and self-definition are possible', notInControl: 'The complexity is real and ongoing' } },
      { label: 'Nothing feels core', next: null, rootCause: { id: 'rc_identity_diffusion', label: 'Identity diffusion (nothing feels core or stable)', agency: 'PARTIAL', inControl: 'Stability builds through committed choices', notInControl: null } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: PERCEPTION GAP
  // ════════════════════════════════════════════════
  'perception_gap': {
    id: 'perception_gap',
    question: "What's the gap?",
    options: [
      { label: 'See myself more positively than others seem to', next: 'perception_gap_positive', rootCause: null },
      { label: 'See myself more negatively than others seem to', next: 'perception_gap_negative', rootCause: null },
      { label: 'Unaware of how I come across', next: 'perception_gap_unaware', rootCause: null },
      { label: 'Neurodivergent communication creating social misreadings', next: 'perception_gap_nd', rootCause: null }
    ]
  },

  // See myself more positively
  'perception_gap_positive': {
    id: 'perception_gap_positive',
    question: "What might be behind the gap?",
    options: [
      { label: 'Defensive, miss feedback', next: null, rootCause: { id: 'rc_defensive_self_perception', label: 'Defensive self-perception', agency: 'HIGH', inControl: 'Self-awareness is growable', notInControl: null } },
      { label: 'Limited self-awareness (narcissistic traits)', next: null, rootCause: { id: 'rc_narcissistic_traits', label: 'Narcissistic traits', agency: 'PARTIAL', inControl: 'Addressable with willingness', notInControl: 'Self-awareness is limited by the condition itself' } },
      { label: 'Never examined', next: null, rootCause: { id: 'rc_low_self_awareness', label: 'Low self-awareness', agency: 'HIGH', inControl: 'Awareness is buildable through feedback and reflection', notInControl: null } }
    ]
  },

  // See myself more negatively
  'perception_gap_negative': {
    id: 'perception_gap_negative',
    question: "What might be behind the gap?",
    options: [
      { label: 'Distorted negative self-view', next: null, rootCause: { id: 'rc_distorted_negative_self_view', label: 'Distorted negative self-view', agency: 'HIGH', inControl: 'Your self-perception is challengeable', notInControl: null } },
      { label: 'Low self-worth blocking positive feedback', next: null, rootCause: { id: 'rc_low_self_worth_blocking', label: 'Low self-worth blocking positive feedback', agency: 'PARTIAL', inControl: 'Self-worth is addressable', notInControl: 'Often deep-rooted' } }
    ]
  },

  // Unaware of how I come across
  'perception_gap_unaware': {
    id: 'perception_gap_unaware',
    question: "What might be behind the gap?",
    options: [
      { label: 'Never seek feedback', next: null, rootCause: { id: 'rc_never_seek_feedback', label: 'Never seek feedback', agency: 'HIGH', inControl: 'Asking is in your control', notInControl: null } },
      { label: 'Get defensive when receiving feedback', next: null, rootCause: { id: 'rc_feedback_resistance', label: 'Feedback resistance', agency: 'HIGH', inControl: 'Learning to hear feedback without reacting', notInControl: null } },
      { label: 'Cultural communication mismatch', next: null, rootCause: { id: 'rc_cultural_communication_mismatch', label: 'Cultural communication style mismatch', agency: 'PARTIAL', inControl: 'Adaptation is possible', notInControl: 'The mismatch is real' } }
    ]
  },

  // Neurodivergent communication
  'perception_gap_nd': {
    id: 'perception_gap_nd',
    question: "What's the specific difficulty?",
    options: [
      { label: 'Autism-related social differences', next: null, rootCause: { id: 'rc_autism_social_differences', label: 'Autism-related social differences', agency: 'PARTIAL', inControl: 'Understanding and compensation strategies', notInControl: 'Neurotype is inherent' } },
      { label: 'ADHD interpersonal issues', next: null, rootCause: { id: 'rc_adhd_interpersonal', label: 'ADHD interpersonal blind spots', agency: 'PARTIAL', inControl: 'Awareness and ADHD management help', notInControl: 'ADHD is persistent' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: LOST SENSE OF PURPOSE
  // ════════════════════════════════════════════════
  'lost_purpose': {
    id: 'lost_purpose',
    question: "What's the purpose issue?",
    options: [
      { label: 'Never had purpose (always did what I "should")', next: 'purpose_never_had', rootCause: null },
      { label: 'Previous purpose is gone', next: 'purpose_gone', rootCause: null },
      { label: 'Purpose feels empty or performed', next: 'purpose_empty', rootCause: null },
      { label: "Want purpose but can't find it", next: 'purpose_searching', rootCause: null },
      { label: 'Depression making everything feel pointless', next: null, rootCause: { id: 'rc_depression_meaningless', label: 'Depression making everything feel meaningless', agency: 'PARTIAL', inControl: 'Meaning often returns when depression is addressed', notInControl: null } },
      { label: 'Pressure to have a grand calling', next: null, rootCause: { id: 'rc_grand_purpose_pressure', label: 'Grand purpose pressure', agency: 'HIGH', inControl: 'Most lives have multiple small purposes, not one big one', notInControl: "Cultural mythology of 'the calling'" } },
      { label: 'Spiritual or faith crisis affecting purpose', next: null, rootCause: { id: 'rc_spiritual_faith_crisis', label: 'Spiritual or faith crisis', agency: 'PARTIAL', inControl: 'Worldview is rebuildable', notInControl: "Lost faith can't be forced" } }
    ]
  },

  // Never had purpose
  'purpose_never_had': {
    id: 'purpose_never_had',
    question: 'What kept you from having your own purpose?',
    options: [
      { label: 'Following a script', next: null, rootCause: { id: 'rc_following_script', label: 'Following a script instead of internal compass', agency: 'HIGH', inControl: "It's not too late to choose", notInControl: "Time spent on the script can't be recovered" } },
      { label: 'Never developed own wants (caretaker role)', next: null, rootCause: { id: 'rc_never_developed_wants', label: 'Never developed own wants', agency: 'HIGH', inControl: 'Wants are discoverable', notInControl: null } }
    ]
  },

  // Previous purpose is gone
  'purpose_gone': {
    id: 'purpose_gone',
    question: 'What happened to it?',
    options: [
      { label: 'Career ended', next: null, rootCause: { id: 'rc_career_sole_purpose', label: 'Career as sole purpose, career ended', agency: 'HIGH', inControl: 'Purpose can come from many places', notInControl: 'The career loss' } },
      { label: 'Kids raised, goal achieved', next: null, rootCause: { id: 'rc_purpose_completed', label: 'Purpose completed', agency: 'HIGH', inControl: 'This is completion, not failure — next chapter is open', notInControl: null } },
      { label: 'Retired', next: null, rootCause: { id: 'rc_retired_purposeless', label: 'Retired and purposeless', agency: 'HIGH', inControl: 'Post-work purpose is buildable', notInControl: null } }
    ]
  },

  // Purpose feels empty or performed
  'purpose_empty': {
    id: 'purpose_empty',
    question: "What's making it feel empty?",
    options: [
      { label: 'Following "should" rather than authentic desire', next: null, rootCause: { id: 'rc_inauthentic_purpose', label: 'Inauthentic purpose', agency: 'HIGH', inControl: 'Authenticity is choosable', notInControl: null } },
      { label: 'Achieved the goal, feels hollow', next: null, rootCause: { id: 'rc_arriving_emptiness', label: '"Arriving" emptiness', agency: 'HIGH', inControl: 'Redefining what matters', notInControl: null } },
      { label: 'Only feel valuable when producing', next: null, rootCause: { id: 'rc_productivity_trap', label: 'Purpose-through-productivity trap', agency: 'HIGH', inControl: 'Worth and productivity are separable', notInControl: null } }
    ]
  },

  // Want purpose but can't find it
  'purpose_searching': {
    id: 'purpose_searching',
    question: "What's getting in the way?",
    options: [
      { label: 'Pressure to have "a calling"', next: null, rootCause: { id: 'rc_grand_purpose_pressure', label: 'Grand purpose pressure', agency: 'HIGH', inControl: 'Most lives have multiple small purposes, not one big one', notInControl: "Cultural mythology of 'the calling'" } },
      { label: 'Anxiety about not knowing', next: null, rootCause: { id: 'rc_purpose_anxiety', label: 'Purpose anxiety', agency: 'HIGH', inControl: 'The pressure is removable', notInControl: null } },
      { label: 'Lost to chronic illness or disability', next: null, rootCause: { id: 'rc_purpose_lost_chronic_illness', label: 'Purpose lost to chronic illness or disability', agency: 'PARTIAL', inControl: "Purpose adapts; different doesn't mean less", notInControl: 'The health limitation' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: VALUES MISALIGNMENT
  // ════════════════════════════════════════════════
  'values_misalignment': {
    id: 'values_misalignment',
    question: "What's the issue?",
    options: [
      { label: "Don't know my values", next: null, rootCause: { id: 'rc_values_never_examined', label: 'Values never examined', agency: 'HIGH', inControl: 'Clarifiable now', notInControl: null } },
      { label: "Know my values, life doesn't match", next: 'values_life_mismatch', rootCause: null },
      { label: 'Values conflict with each other', next: null, rootCause: { id: 'rc_internal_values_conflict', label: 'Internal values conflict', agency: 'PARTIAL', inControl: 'Both/and thinking may help', notInControl: 'Some conflicts are genuine' } },
      { label: "Values changed, life hasn't caught up", next: null, rootCause: { id: 'rc_values_evolved', label: "Values evolved, life hasn't caught up", agency: 'HIGH', inControl: 'Updating life to match', notInControl: null } },
      { label: 'Pressure to violate my values', next: 'values_pressure', rootCause: null },
      { label: "Living someone else's values", next: null, rootCause: { id: 'rc_living_inherited_values', label: 'Living inherited values', agency: 'HIGH', inControl: 'Choosing your own is possible', notInControl: 'Family/cultural pushback' } },
      { label: 'Values clear but no courage to act on them', next: null, rootCause: { id: 'rc_values_no_courage', label: 'Values clear but no courage to act', agency: 'PARTIAL', inControl: 'Courage is buildable; small steps', notInControl: 'Fear is real' } }
    ]
  },

  // Know my values, life doesn't match
  'values_life_mismatch': {
    id: 'values_life_mismatch',
    question: "Where's the biggest mismatch?",
    options: [
      { label: 'Financial constraint forcing compromises', next: null, rootCause: { id: 'rc_financial_values_compromise', label: 'Financial constraint forcing values compromise', agency: 'LOW', inControl: 'Making peace where possible', notInControl: 'Economic reality' } },
      { label: "Work doesn't match my values", next: null, rootCause: { id: 'rc_work_values_misalignment', label: 'Work-values misalignment', agency: 'PARTIAL', inControl: 'Job change may be possible', notInControl: 'Golden handcuffs, market, obligations' } },
      { label: "Relationship doesn't match my values", next: null, rootCause: { id: 'rc_relationship_values_misalignment', label: 'Relationship-values misalignment', agency: 'PARTIAL', inControl: "Communicating; deciding what's tolerable", notInControl: "Your partner's values" } },
      { label: 'Compromising integrity daily', next: null, rootCause: { id: 'rc_integrity_compromise', label: 'Integrity compromise', agency: 'HIGH', inControl: 'Identifying the specific compromises', notInControl: null } }
    ]
  },

  // Pressure to violate my values
  'values_pressure': {
    id: 'values_pressure',
    question: "Where's the pressure coming from?",
    options: [
      { label: 'Cultural or family pressure', next: null, rootCause: { id: 'rc_cultural_family_pressure', label: 'Cultural or family pressure against your values', agency: 'PARTIAL', inControl: 'Finding your own path', notInControl: 'The pressure is real and ongoing' } },
      { label: 'Religious values conflict', next: null, rootCause: { id: 'rc_religious_values_conflict', label: 'Religious values conflict', agency: 'PARTIAL', inControl: 'Your own spiritual path is choosable', notInControl: 'Community and family consequences' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: STUCK / STAGNANT
  // ════════════════════════════════════════════════
  'stuck_stagnant': {
    id: 'stuck_stagnant',
    question: "What's happening?",
    options: [
      { label: 'Not learning or growing', next: 'stuck_not_growing', rootCause: null },
      { label: 'Avoiding challenges', next: null, rootCause: { id: 'rc_perfectionism', label: 'Perfectionism (fear of doing it imperfectly)', agency: 'HIGH', inControl: 'The standard is adjustable', notInControl: null } },
      { label: 'Start many things, finish nothing', next: 'stuck_no_follow_through', rootCause: null },
      { label: 'Waiting to start living', next: null, rootCause: { id: 'rc_conditional_living', label: 'Conditional living', agency: 'HIGH', inControl: 'Starting now, even small', notInControl: null } },
      { label: 'Motivation is gone', next: 'stuck_no_motivation', rootCause: null },
      { label: 'Comfortable but unfulfilled', next: null, rootCause: { id: 'rc_comfort_trap', label: 'Comfort as trap', agency: 'HIGH', inControl: 'Disruption is choosable', notInControl: null } },
      { label: 'Content where I am (not actually stuck)', next: null, rootCause: { id: 'rc_content_not_stuck', label: 'Content where you are (not actually stuck)', agency: 'N/A', inControl: 'Not a problem if genuinely fulfilled', notInControl: null } }
    ]
  },

  // Not learning or growing
  'stuck_not_growing': {
    id: 'stuck_not_growing',
    question: "What's behind it?",
    options: [
      { label: 'Fixed mindset', next: null, rootCause: { id: 'rc_fixed_mindset', label: 'Fixed mindset', agency: 'HIGH', inControl: 'Growth mindset is developable', notInControl: null } },
      { label: 'Burnout', next: null, rootCause: { id: 'rc_burnout', label: 'Burnout', agency: 'PARTIAL', inControl: 'Recovery requires rest and boundary changes', notInControl: 'Recovery is slow' } },
      { label: 'Chronic overwhelm', next: null, rootCause: { id: 'rc_chronic_overwhelm', label: 'Chronic overwhelm (survival mode)', agency: 'PARTIAL', inControl: 'Addressing the overwhelm source', notInControl: 'Life demands may be real' } }
    ]
  },

  // Start many things, finish nothing
  'stuck_no_follow_through': {
    id: 'stuck_no_follow_through',
    question: "What's behind it?",
    options: [
      { label: 'ADHD', next: null, rootCause: { id: 'rc_adhd_follow_through', label: 'ADHD follow-through difficulty', agency: 'PARTIAL', inControl: 'ADHD management and external structure help', notInControl: 'ADHD is persistent' } },
      { label: 'Fear of commitment', next: null, rootCause: { id: 'rc_fear_commitment', label: 'Fear of commitment', agency: 'PARTIAL', inControl: 'Making peace with choosing', notInControl: null } }
    ]
  },

  // Motivation is gone
  'stuck_no_motivation': {
    id: 'stuck_no_motivation',
    question: "What's behind it?",
    options: [
      { label: 'Depression', next: null, rootCause: { id: 'rc_depression_killing_motivation', label: 'Depression killing motivation', agency: 'PARTIAL', inControl: 'Depression is treatable; motivation follows', notInControl: null } },
      { label: 'Fear of success', next: null, rootCause: { id: 'rc_fear_of_success', label: 'Fear of success', agency: 'PARTIAL', inControl: 'Explorable', notInControl: 'Often unconscious' } },
      { label: 'Stagnation as protection', next: null, rootCause: { id: 'rc_stagnation_protection', label: 'Stagnation as protection', agency: 'PARTIAL', inControl: "Examining what you're protecting against", notInControl: 'The original threat may be gone' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: EXISTENTIAL QUESTIONS
  // ════════════════════════════════════════════════
  'existential': {
    id: 'existential',
    question: "What's the question?",
    options: [
      { label: 'Mortality awareness', next: 'existential_mortality', rootCause: null },
      { label: 'Meaninglessness', next: 'existential_meaninglessness', rootCause: null },
      { label: 'Loss of control', next: null, rootCause: { id: 'rc_loss_of_control_anxiety', label: 'Loss of control anxiety', agency: 'HIGH', inControl: 'Relationship with uncertainty is shapeable', notInControl: "You can't control everything" } },
      { label: 'Cosmic insignificance', next: 'existential_insignificance', rootCause: null },
      { label: 'Loss of faith or worldview', next: 'existential_faith_loss', rootCause: null },
      { label: 'Suffering as a philosophical problem', next: null, rootCause: { id: 'rc_suffering_philosophical', label: 'Suffering as philosophical problem', agency: 'PARTIAL', inControl: 'Philosophy and community help', notInControl: 'Suffering is part of existence' } },
      { label: 'Existential acceptance already reached', next: null, rootCause: { id: 'rc_existential_acceptance', label: 'Existential acceptance already reached', agency: 'N/A', inControl: 'This is integration, not a problem', notInControl: null } }
    ]
  },

  // Mortality awareness
  'existential_mortality': {
    id: 'existential_mortality',
    question: "What's the experience?",
    options: [
      { label: 'Midlife reckoning', next: null, rootCause: { id: 'rc_midlife_mortality', label: 'Midlife mortality reckoning', agency: 'PARTIAL', inControl: 'Finding peace with finitude is possible', notInControl: 'Death is real' } },
      { label: 'Death anxiety', next: null, rootCause: { id: 'rc_death_anxiety', label: 'Death anxiety', agency: 'PARTIAL', inControl: "Anxiety about death is treatable; death itself isn't a problem to solve", notInControl: null } }
    ]
  },

  // Meaninglessness
  'existential_meaninglessness': {
    id: 'existential_meaninglessness',
    question: "What's the experience?",
    options: [
      { label: 'Nihilism — nothing matters', next: null, rootCause: { id: 'rc_existential_nihilism', label: 'Existential nihilism', agency: 'PARTIAL', inControl: 'Meaning can be created even if not inherent', notInControl: 'Inherent meaning may not exist' } },
      { label: 'Meaning crisis — used to have meaning, lost it', next: null, rootCause: { id: 'rc_meaning_crisis', label: 'Meaning crisis', agency: 'PARTIAL', inControl: 'Meaning is buildable through connection, creation, contribution', notInControl: 'No cosmic answer may exist' } }
    ]
  },

  // Cosmic insignificance
  'existential_insignificance': {
    id: 'existential_insignificance',
    question: 'How does the insignificance feel?',
    options: [
      { label: 'Crushing', next: null, rootCause: { id: 'rc_cosmic_insignificance_crushing', label: 'Cosmic insignificance (crushing)', agency: 'PARTIAL', inControl: 'Some find this freeing; the shift is possible', notInControl: 'The scale of the universe' } },
      { label: 'Freeing', next: null, rootCause: { id: 'rc_cosmic_insignificance_freeing', label: 'Cosmic insignificance (freeing)', agency: 'N/A', inControl: 'This is wisdom, not a problem', notInControl: null } }
    ]
  },

  // Loss of faith or worldview
  'existential_faith_loss': {
    id: 'existential_faith_loss',
    question: 'What happened?',
    options: [
      { label: 'Religious deconstruction', next: null, rootCause: { id: 'rc_faith_crisis', label: 'Faith crisis', agency: 'PARTIAL', inControl: 'Rebuilding worldview is possible', notInControl: "Lost faith can't be forced back" } },
      { label: 'Worldview shattered by trauma or loss', next: null, rootCause: { id: 'rc_shattered_worldview', label: 'Shattered worldview', agency: 'PARTIAL', inControl: 'Worldview can be rebuilt over time', notInControl: 'The shattering event' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: IDENTITY IN TRANSITION
  // ════════════════════════════════════════════════
  'identity_transition': {
    id: 'identity_transition',
    question: "What's the transition?",
    options: [
      { label: 'Becoming a parent', next: null, rootCause: { id: 'rc_new_parent_identity', label: 'New parent identity shift', agency: 'PARTIAL', inControl: 'Integrating parenthood without losing self', notInControl: 'The demands of a new child' } },
      { label: 'Career change or career ending', next: null, rootCause: { id: 'rc_career_identity_loss', label: 'Career identity loss', agency: 'HIGH', inControl: 'Identity can be rebuilt beyond career', notInControl: null } },
      { label: 'Relationship change', next: 'transition_relationship', rootCause: null },
      { label: 'Health change or aging', next: null, rootCause: { id: 'rc_aging_identity', label: 'Aging identity', agency: 'PARTIAL', inControl: 'Relationship with aging is shapeable', notInControl: 'Aging itself' } },
      { label: 'Coming out or identity disclosure', next: null, rootCause: { id: 'rc_coming_out', label: 'Coming out / identity disclosure', agency: 'PARTIAL', inControl: 'Living authentically is in your control', notInControl: "Others' reactions" } },
      { label: 'Cultural or geographic transition', next: null, rootCause: { id: 'rc_immigration_cultural', label: 'Immigration / cultural transition', agency: 'PARTIAL', inControl: 'Integration and self-definition', notInControl: 'The displacement itself' } },
      { label: 'Recovery identity (addiction, illness)', next: null, rootCause: { id: 'rc_recovery_identity', label: 'Recovery identity', agency: 'PARTIAL', inControl: 'Building a new self', notInControl: 'The recovery process' } },
      { label: 'Gender transition', next: null, rootCause: { id: 'rc_gender_transition', label: 'Gender transition', agency: 'PARTIAL', inControl: 'Steps toward authentic expression', notInControl: 'Social acceptance, medical access, biological limits' } },
      { label: 'Empty nester', next: null, rootCause: { id: 'rc_empty_nester', label: 'Empty nester identity', agency: 'HIGH', inControl: 'Rebuilding after kids leave', notInControl: null } },
      { label: 'Retirement', next: null, rootCause: { id: 'rc_retirement_identity', label: 'Retirement identity', agency: 'HIGH', inControl: 'Post-work identity is buildable', notInControl: null } }
    ]
  },

  // Relationship change
  'transition_relationship': {
    id: 'transition_relationship',
    question: 'What changed?',
    options: [
      { label: 'Divorce', next: null, rootCause: { id: 'rc_post_divorce_identity', label: 'Post-divorce identity rebuilding', agency: 'PARTIAL', inControl: 'Self-discovery is possible', notInControl: 'The grief and logistics' } },
      { label: 'Loss of partner', next: null, rootCause: { id: 'rc_post_loss_identity', label: 'Post-loss identity shift', agency: 'PARTIAL', inControl: 'Gradual rebuilding', notInControl: 'The loss' } },
      { label: 'Widowhood', next: null, rootCause: { id: 'rc_widowhood_identity', label: 'Widowhood identity', agency: 'PARTIAL', inControl: 'Gradual rebuilding', notInControl: 'The loss is permanent' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: SHAME ABOUT WHO I AM
  // ════════════════════════════════════════════════
  'shame': {
    id: 'shame',
    question: "What's the shame about?",
    options: [
      { label: 'Something I did', next: null, rootCause: { id: 'rc_guilt_to_shame', label: 'Guilt converted to identity shame', agency: 'HIGH', inControl: 'Separating action from identity', notInControl: null } },
      { label: 'Who I am (an inherent trait)', next: 'shame_who_i_am', rootCause: null },
      { label: 'Where I come from', next: 'shame_origin', rootCause: null },
      { label: 'What I lack', next: 'shame_lack', rootCause: null },
      { label: 'A secret I carry', next: null, rootCause: { id: 'rc_secret_burden', label: 'Secret burden', agency: 'PARTIAL', inControl: 'Speaking it — even to one person — often reduces the weight', notInControl: 'The event or fact itself' } }
    ]
  },

  // Who I am
  'shame_who_i_am': {
    id: 'shame_who_i_am',
    question: "What's the shame about?",
    options: [
      { label: 'Sexuality or gender', next: null, rootCause: { id: 'rc_shame_sexuality_gender', label: 'Shame about sexuality or gender', agency: 'PARTIAL', inControl: 'Self-acceptance is possible', notInControl: "Others' acceptance; societal attitudes" } },
      { label: 'Neurodivergence', next: null, rootCause: { id: 'rc_shame_neurodivergence', label: 'Shame about neurodivergence', agency: 'PARTIAL', inControl: 'Self-acceptance; finding ND community', notInControl: 'Neurotypical world expectations' } },
      { label: 'Body', next: null, rootCause: { id: 'rc_shame_body', label: 'Shame about body', agency: 'PARTIAL', inControl: 'Relationship with body is shapeable', notInControl: 'Cultural messaging' } },
      { label: 'Mental illness', next: null, rootCause: { id: 'rc_shame_mental_illness', label: 'Shame about mental illness', agency: 'HIGH', inControl: 'Mental illness is a health condition, not a character flaw', notInControl: 'Stigma is real' } }
    ]
  },

  // Where I come from
  'shame_origin': {
    id: 'shame_origin',
    question: "What's the shame about?",
    options: [
      { label: 'Class or poverty background', next: null, rootCause: { id: 'rc_class_shame', label: 'Class shame', agency: 'PARTIAL', inControl: "Examining the shame; it's not a reflection of worth", notInControl: 'Classism is real' } },
      { label: 'Family of origin', next: null, rootCause: { id: 'rc_family_origin_shame', label: 'Family-of-origin shame', agency: 'PARTIAL', inControl: 'You are not your family', notInControl: 'Their history follows you in some ways' } }
    ]
  },

  // What I lack
  'shame_lack': {
    id: 'shame_lack',
    question: "What's the shame about?",
    options: [
      { label: 'Education or achievement', next: null, rootCause: { id: 'rc_education_achievement_shame', label: 'Education or achievement shame', agency: 'HIGH', inControl: 'Worth is not determined by credentials', notInControl: null } },
      { label: 'Past relationships or choices', next: null, rootCause: { id: 'rc_shame_past_choices', label: 'Shame about past relationships or choices', agency: 'HIGH', inControl: 'Past cannot be changed; relationship with it can', notInControl: null } },
      { label: 'Addiction history', next: null, rootCause: { id: 'rc_shame_addiction', label: 'Shame about addiction history', agency: 'PARTIAL', inControl: 'Recovery is its own kind of strength', notInControl: 'Stigma is real' } }
    ]
  }

};
