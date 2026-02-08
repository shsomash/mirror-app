export const emotionalStart = 'emotional_start';

export const emotionalTree = {

  // ──────────────────────────────────────────────
  //  ENTRY POINT — Sub-dimension picker (Layer 3)
  // ──────────────────────────────────────────────
  'emotional_start': {
    id: 'emotional_start',
    question: "Let's narrow down what's happening emotionally. Which of these is the biggest issue?",
    options: [
      { label: 'Mood (sadness, flatness, depression)', next: 'mood_pattern', rootCause: null },
      { label: 'Anxiety (worry, panic, feeling on edge)', next: 'anxiety_pattern', rootCause: null },
      { label: 'Self-worth (harsh self-criticism, shame, not feeling good enough)', next: 'selfworth_pattern', rootCause: null },
      { label: 'Emotional numbness or suppression', next: 'numbness_pattern', rootCause: null },
      { label: 'Brain fog or trouble concentrating', next: 'brainfog_pattern', rootCause: null },
      { label: 'Overwhelm (too much, can\'t cope)', next: 'overwhelm_pattern', rootCause: null },
      { label: 'Anger or irritability', next: 'anger_pattern', rootCause: null },
      { label: 'Grief or loss', next: 'grief_pattern', rootCause: null },
      { label: 'Substance use or unhealthy coping', next: 'substance_pattern', rootCause: null }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: MOOD / DEPRESSION
  // ════════════════════════════════════════════════
  'mood_pattern': {
    id: 'mood_pattern',
    question: "What's the pattern?",
    options: [
      { label: 'Classic depression (no energy, nothing feels good, hopelessness)', next: 'mood_classic_severity', rootCause: null },
      { label: 'Low mood that started after a specific event', next: null, rootCause: { id: 'rc_situational_depression', label: 'Situational depression', agency: 'PARTIAL', inControl: 'Processing the event helps', notInControl: 'The loss itself can\'t be undone' } },
      { label: 'Low-grade sadness for years ("just how I am")', next: null, rootCause: { id: 'rc_dysthymia', label: 'Dysthymia (chronic low-grade depression)', agency: 'PARTIAL', inControl: 'Treatable, though long-standing patterns take time', notInControl: 'Baseline temperament may play a role' } },
      { label: 'Mood worse in certain seasons', next: null, rootCause: { id: 'rc_sad', label: 'Seasonal affective disorder', agency: 'HIGH', inControl: 'Highly responsive to intervention', notInControl: 'Seasonal light patterns' } },
      { label: 'Mood changed after having a baby', next: null, rootCause: { id: 'rc_postpartum_depression', label: 'Postpartum depression', agency: 'HIGH', inControl: 'Very treatable; not a personal failing', notInControl: 'Hormonal and neurological shifts are biological' } },
      { label: 'More irritable than sad', next: null, rootCause: { id: 'rc_irritability_depression', label: 'Irritability as depression', agency: 'PARTIAL', inControl: 'Treatable once recognized as depression', notInControl: "Often missed because it doesn't 'look like' depression" } },
      { label: 'Mood swings — high periods followed by lows', next: null, rootCause: { id: 'rc_bipolar_depression', label: 'Bipolar depression', agency: 'PARTIAL', inControl: 'Manageable with proper support', notInControl: 'Requires ongoing management; misdiagnosis risk' } },
      { label: 'Functioning fine but feel nothing (emotional flatness)', next: null, rootCause: { id: 'rc_functional_depression', label: 'Functional depression (performing but empty)', agency: 'PARTIAL', inControl: 'Treatable, but high-functioning masks the severity', notInControl: null } }
    ]
  },

  'mood_classic_severity': {
    id: 'mood_classic_severity',
    question: 'How is it affecting your daily life?',
    options: [
      { label: 'Low energy and flat, but managing', next: 'mood_classic_additional', rootCause: null },
      { label: 'Struggling to function — work, hygiene, basic tasks', next: 'mood_severe_additional', rootCause: null },
      { label: 'Thoughts of death or suicide', next: null, rootCause: { id: 'crisis_redirect', label: 'Please reach out to crisis support', agency: 'N/A', inControl: 'Crisis resources are available 24/7', notInControl: null } }
    ]
  },

  // Additional follow-up for moderate classic depression
  'mood_classic_additional': {
    id: 'mood_classic_additional',
    question: 'Is there anything else relevant?',
    options: [
      { label: 'Have tried treatment but it hasn\'t worked', next: null, rootCause: { id: 'rc_treatment_resistant_depression', label: 'Treatment-resistant depression', agency: 'LOW', inControl: 'Specialized approaches exist', notInControl: "Standard approaches haven't worked" } },
      { label: 'Feel trapped in current situation', next: null, rootCause: { id: 'rc_circumstantial_depression', label: 'Circumstantial depression (trapped situation)', agency: 'PARTIAL', inControl: 'Depends on ability to change the situation', notInControl: 'The situation itself may be genuinely constraining' } },
      { label: 'This started after a loss', next: null, rootCause: { id: 'rc_grief_depression', label: 'Grief-related depression (prolonged)', agency: 'PARTIAL', inControl: 'Grief processing helps', notInControl: 'Grief has no fixed timeline' } },
      { label: 'Mood changed after starting/changing medication', next: null, rootCause: { id: 'rc_medication_mood', label: 'Medication-induced mood change', agency: 'PARTIAL', inControl: 'Discussing alternatives with prescriber', notInControl: 'May need the medication' } },
      { label: 'May be hormonal (perimenopause, thyroid)', next: null, rootCause: { id: 'rc_hormonal_mood', label: 'Hormonal mood changes (perimenopause, thyroid, etc.)', agency: 'PARTIAL', inControl: 'Medical management exists', notInControl: 'Hormonal shifts are biological' } },
      { label: 'Substance use is involved', next: null, rootCause: { id: 'rc_depression_substance', label: 'Depression with substance use complication', agency: 'PARTIAL', inControl: 'Both need attention; each worsens the other', notInControl: null } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_moderate_depression', label: 'Moderate depression', agency: 'PARTIAL', inControl: 'Highly treatable condition', notInControl: 'Recovery takes weeks to months' } }
    ]
  },

  // Additional follow-up for severe classic depression
  'mood_severe_additional': {
    id: 'mood_severe_additional',
    question: 'Is there anything else relevant?',
    options: [
      { label: 'Have tried treatment but it hasn\'t worked', next: null, rootCause: { id: 'rc_treatment_resistant_depression', label: 'Treatment-resistant depression', agency: 'LOW', inControl: 'Specialized approaches exist', notInControl: "Standard approaches haven't worked" } },
      { label: 'Feel trapped in current situation', next: null, rootCause: { id: 'rc_circumstantial_depression', label: 'Circumstantial depression (trapped situation)', agency: 'PARTIAL', inControl: 'Depends on ability to change the situation', notInControl: 'The situation itself may be genuinely constraining' } },
      { label: 'This started after a loss', next: null, rootCause: { id: 'rc_grief_depression', label: 'Grief-related depression (prolonged)', agency: 'PARTIAL', inControl: 'Grief processing helps', notInControl: 'Grief has no fixed timeline' } },
      { label: 'Mood changed after starting/changing medication', next: null, rootCause: { id: 'rc_medication_mood', label: 'Medication-induced mood change', agency: 'PARTIAL', inControl: 'Discussing alternatives with prescriber', notInControl: 'May need the medication' } },
      { label: 'May be hormonal (perimenopause, thyroid)', next: null, rootCause: { id: 'rc_hormonal_mood', label: 'Hormonal mood changes (perimenopause, thyroid, etc.)', agency: 'PARTIAL', inControl: 'Medical management exists', notInControl: 'Hormonal shifts are biological' } },
      { label: 'Substance use is involved', next: null, rootCause: { id: 'rc_depression_substance', label: 'Depression with substance use complication', agency: 'PARTIAL', inControl: 'Both need attention; each worsens the other', notInControl: null } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_severe_depression', label: 'Severe depression', agency: 'PARTIAL', inControl: 'Treatable, but often needs professional support', notInControl: 'Severity makes self-directed change very hard' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: ANXIETY
  // ════════════════════════════════════════════════
  'anxiety_pattern': {
    id: 'anxiety_pattern',
    question: "What's the pattern?",
    options: [
      { label: 'Worry about everything, all the time', next: 'anxiety_additional_gad', rootCause: null },
      { label: 'Panic attacks (sudden intense fear, physical symptoms)', next: 'anxiety_additional_panic', rootCause: null },
      { label: 'Social situations make me very anxious', next: 'anxiety_additional_social', rootCause: null },
      { label: 'Specific fear (flying, medical procedures, heights, etc.)', next: 'anxiety_additional_phobia', rootCause: null },
      { label: 'Always on alert, scanning for danger', next: 'anxiety_hypervigilance', rootCause: null },
      { label: 'Intrusive thoughts I can\'t control', next: 'anxiety_additional_ocd', rootCause: null },
      { label: 'Constantly worried about health or illness', next: 'anxiety_additional_health', rootCause: null },
      { label: 'Anxiety tied to a specific life situation', next: 'anxiety_additional_situational', rootCause: null },
      { label: 'Free-floating dread with no clear object', next: 'anxiety_additional_dread', rootCause: null }
    ]
  },

  // Hypervigilance follow-up
  'anxiety_hypervigilance': {
    id: 'anxiety_hypervigilance',
    question: 'Has something happened to make you feel unsafe?',
    options: [
      { label: 'Yes, a specific traumatic event', next: 'anxiety_additional_ptsd', rootCause: null },
      { label: 'Ongoing or childhood trauma', next: 'anxiety_additional_cptsd', rootCause: null },
      { label: 'No specific event, just always on guard', next: 'anxiety_additional_gad', rootCause: null }
    ]
  },

  // ── Anxiety additional follow-ups (second layer) ──

  'anxiety_additional_gad': {
    id: 'anxiety_additional_gad',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_gad', label: 'Generalized anxiety disorder', agency: 'HIGH', inControl: 'Very treatable condition', notInControl: null } }
    ]
  },

  'anxiety_additional_panic': {
    id: 'anxiety_additional_panic',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_panic_disorder', label: 'Panic disorder', agency: 'HIGH', inControl: 'Highly responsive to treatment', notInControl: null } }
    ]
  },

  'anxiety_additional_social': {
    id: 'anxiety_additional_social',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_social_anxiety', label: 'Social anxiety disorder', agency: 'HIGH', inControl: 'Treatable; avoidance reinforces it', notInControl: null } }
    ]
  },

  'anxiety_additional_phobia': {
    id: 'anxiety_additional_phobia',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_specific_phobia', label: 'Specific phobia', agency: 'HIGH', inControl: 'Exposure-based approaches are very effective', notInControl: null } }
    ]
  },

  'anxiety_additional_ocd': {
    id: 'anxiety_additional_ocd',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_ocd', label: 'OCD (intrusive thoughts + compulsions)', agency: 'PARTIAL', inControl: 'Treatable with specialized approach', notInControl: 'Requires ongoing management' } }
    ]
  },

  'anxiety_additional_health': {
    id: 'anxiety_additional_health',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_health_anxiety', label: 'Health anxiety (hypochondria)', agency: 'HIGH', inControl: 'Very responsive to treatment', notInControl: null } }
    ]
  },

  'anxiety_additional_situational': {
    id: 'anxiety_additional_situational',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_situational_anxiety', label: 'Situational anxiety (specific life stressor)', agency: 'PARTIAL', inControl: 'May resolve when situation changes', notInControl: 'The situation may not be changeable' } }
    ]
  },

  'anxiety_additional_dread': {
    id: 'anxiety_additional_dread',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_free_floating_dread', label: 'Free-floating dread', agency: 'PARTIAL', inControl: 'Often treatable once underlying cause identified', notInControl: 'Cause may be hard to pin down' } }
    ]
  },

  'anxiety_additional_ptsd': {
    id: 'anxiety_additional_ptsd',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_ptsd', label: 'PTSD', agency: 'PARTIAL', inControl: 'Treatable, but healing is gradual', notInControl: "Trauma can't be undone" } }
    ]
  },

  'anxiety_additional_cptsd': {
    id: 'anxiety_additional_cptsd',
    question: 'Is there anything else contributing?',
    options: [
      { label: 'Fear of being judged or not performing well', next: null, rootCause: { id: 'rc_performance_anxiety', label: 'Performance anxiety', agency: 'HIGH', inControl: 'Addressable with practice and support', notInControl: null } },
      { label: 'Worry about death or meaning of life', next: null, rootCause: { id: 'rc_existential_anxiety', label: 'Existential anxiety (mortality, meaninglessness)', agency: 'PARTIAL', inControl: 'Relationship with uncertainty is shapeable', notInControl: 'The uncertainty itself is real' } },
      { label: 'Feeling trapped in situation', next: null, rootCause: { id: 'rc_anxiety_trapped', label: 'Anxiety from trapped circumstances', agency: 'PARTIAL', inControl: 'Depends on ability to change the circumstances', notInControl: 'Some traps are real' } },
      { label: 'Fear of being abandoned or rejected', next: null, rootCause: { id: 'rc_attachment_anxiety', label: 'Attachment anxiety (fear of abandonment)', agency: 'PARTIAL', inControl: 'Attachment patterns are changeable over time', notInControl: 'Deeply rooted; takes patience' } },
      { label: 'High caffeine, poor sleep, or substance use', next: null, rootCause: { id: 'rc_anxiety_amplified', label: 'Anxiety amplified by caffeine, substances, or sleep deprivation', agency: 'HIGH', inControl: 'Removing the amplifier helps immediately', notInControl: null } },
      { label: 'Recently had or expecting a baby', next: null, rootCause: { id: 'rc_perinatal_anxiety', label: 'Perinatal anxiety', agency: 'HIGH', inControl: 'Treatable; not a failing', notInControl: 'Hormonal and situational' } },
      { label: 'Think I might be autistic/neurodivergent', next: null, rootCause: { id: 'rc_autistic_masking_anxiety', label: 'Autistic masking exhaustion presenting as anxiety', agency: 'PARTIAL', inControl: 'Reducing masking demands helps', notInControl: 'Being autistic in a neurotypical world is an ongoing reality' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_cptsd', label: 'Complex PTSD (C-PTSD)', agency: 'PARTIAL', inControl: 'Treatable with specialized support', notInControl: 'Often deep-rooted; takes time' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: SELF-WORTH / INNER CRITIC
  // ════════════════════════════════════════════════
  'selfworth_pattern': {
    id: 'selfworth_pattern',
    question: "What's the pattern?",
    options: [
      { label: 'Constant harsh self-criticism ("never good enough")', next: 'selfworth_criticism_origin', rootCause: null },
      { label: 'Deep shame ("I\'m fundamentally flawed")', next: 'selfworth_additional_shame', rootCause: null },
      { label: 'Worth depends entirely on achievement or others\' approval', next: 'selfworth_conditional', rootCause: null },
      { label: 'Constant comparison to others', next: null, rootCause: { id: 'rc_social_comparison', label: 'Social comparison pattern', agency: 'HIGH', inControl: 'The pattern is stoppable', notInControl: 'Social media and culture constantly trigger it' } },
      { label: 'Feel like a fraud (imposter feelings)', next: null, rootCause: { id: 'rc_imposter', label: 'Imposter feelings', agency: 'HIGH', inControl: 'Very common; addressable with awareness', notInControl: null } },
      { label: 'Can\'t accept compliments or positive feedback', next: null, rootCause: { id: 'rc_low_selfworth_blocking', label: 'Low self-worth blocking positive feedback', agency: 'PARTIAL', inControl: 'Self-worth is addressable', notInControl: 'Often deep-rooted' } },
      { label: 'Believe I\'m a burden to others', next: null, rootCause: { id: 'rc_burden_belief', label: '"Burden" belief', agency: 'PARTIAL', inControl: 'Belief is challengeable', notInControl: 'Often rooted in depression or early experience' } }
    ]
  },

  'selfworth_criticism_origin': {
    id: 'selfworth_criticism_origin',
    question: 'Where do you think this comes from?',
    options: [
      { label: 'Grew up being criticized', next: 'selfworth_additional_critical_parent', rootCause: null },
      { label: 'Hold myself to impossible standards', next: 'selfworth_additional_perfectionism', rootCause: null }
    ]
  },

  // Additional self-worth follow-ups
  'selfworth_additional_critical_parent': {
    id: 'selfworth_additional_critical_parent',
    question: 'Is there anything else going on with your self-worth?',
    options: [
      { label: 'Internalized oppression (racism, sexism, homophobia, etc.)', next: null, rootCause: { id: 'rc_internalized_oppression', label: 'Internalized oppression (racism, sexism, homophobia, etc.)', agency: 'PARTIAL', inControl: 'Internal resistance is possible', notInControl: 'Systemic oppression is real and ongoing' } },
      { label: 'Self-worth collapsed after a failure or loss', next: null, rootCause: { id: 'rc_selfworth_collapsed', label: 'Self-worth collapsed after failure or loss', agency: 'PARTIAL', inControl: 'Rebuilding is possible', notInControl: 'The loss itself is real' } },
      { label: 'Worth tied to how my body looks', next: null, rootCause: { id: 'rc_body_selfworth', label: 'Body-based self-worth', agency: 'PARTIAL', inControl: 'Decoupling worth from appearance', notInControl: 'Cultural messaging is relentless' } },
      { label: 'Worth tied to finances or net worth', next: null, rootCause: { id: 'rc_financial_selfworth', label: 'Financial-based self-worth', agency: 'HIGH', inControl: 'Worth is not net worth', notInControl: null } },
      { label: 'Only feel lovable if...', next: null, rootCause: { id: 'rc_relationship_selfworth', label: 'Relationship-based self-worth ("only lovable if...")', agency: 'PARTIAL', inControl: 'Addressable; often attachment-related', notInControl: null } },
      { label: 'Never really developed a sense of inherent worth', next: null, rootCause: { id: 'rc_never_developed_worth', label: 'Never developed sense of inherent worth', agency: 'PARTIAL', inControl: 'Buildable, even late in life', notInControl: 'Takes sustained work' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_critical_parent_voice', label: 'Internalized critical parent voice', agency: 'PARTIAL', inControl: 'The inner critic can be changed', notInControl: "The original experience can't" } }
    ]
  },

  'selfworth_additional_perfectionism': {
    id: 'selfworth_additional_perfectionism',
    question: 'Is there anything else going on with your self-worth?',
    options: [
      { label: 'Internalized oppression (racism, sexism, homophobia, etc.)', next: null, rootCause: { id: 'rc_internalized_oppression', label: 'Internalized oppression (racism, sexism, homophobia, etc.)', agency: 'PARTIAL', inControl: 'Internal resistance is possible', notInControl: 'Systemic oppression is real and ongoing' } },
      { label: 'Self-worth collapsed after a failure or loss', next: null, rootCause: { id: 'rc_selfworth_collapsed', label: 'Self-worth collapsed after failure or loss', agency: 'PARTIAL', inControl: 'Rebuilding is possible', notInControl: 'The loss itself is real' } },
      { label: 'Worth tied to how my body looks', next: null, rootCause: { id: 'rc_body_selfworth', label: 'Body-based self-worth', agency: 'PARTIAL', inControl: 'Decoupling worth from appearance', notInControl: 'Cultural messaging is relentless' } },
      { label: 'Worth tied to finances or net worth', next: null, rootCause: { id: 'rc_financial_selfworth', label: 'Financial-based self-worth', agency: 'HIGH', inControl: 'Worth is not net worth', notInControl: null } },
      { label: 'Only feel lovable if...', next: null, rootCause: { id: 'rc_relationship_selfworth', label: 'Relationship-based self-worth ("only lovable if...")', agency: 'PARTIAL', inControl: 'Addressable; often attachment-related', notInControl: null } },
      { label: 'Never really developed a sense of inherent worth', next: null, rootCause: { id: 'rc_never_developed_worth', label: 'Never developed sense of inherent worth', agency: 'PARTIAL', inControl: 'Buildable, even late in life', notInControl: 'Takes sustained work' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_perfectionism', label: 'Perfectionism', agency: 'HIGH', inControl: 'Pattern is changeable', notInControl: null } }
    ]
  },

  'selfworth_additional_shame': {
    id: 'selfworth_additional_shame',
    question: 'Is there anything else going on with your self-worth?',
    options: [
      { label: 'Internalized oppression (racism, sexism, homophobia, etc.)', next: null, rootCause: { id: 'rc_internalized_oppression', label: 'Internalized oppression (racism, sexism, homophobia, etc.)', agency: 'PARTIAL', inControl: 'Internal resistance is possible', notInControl: 'Systemic oppression is real and ongoing' } },
      { label: 'Self-worth collapsed after a failure or loss', next: null, rootCause: { id: 'rc_selfworth_collapsed', label: 'Self-worth collapsed after failure or loss', agency: 'PARTIAL', inControl: 'Rebuilding is possible', notInControl: 'The loss itself is real' } },
      { label: 'Worth tied to how my body looks', next: null, rootCause: { id: 'rc_body_selfworth', label: 'Body-based self-worth', agency: 'PARTIAL', inControl: 'Decoupling worth from appearance', notInControl: 'Cultural messaging is relentless' } },
      { label: 'Worth tied to finances or net worth', next: null, rootCause: { id: 'rc_financial_selfworth', label: 'Financial-based self-worth', agency: 'HIGH', inControl: 'Worth is not net worth', notInControl: null } },
      { label: 'Only feel lovable if...', next: null, rootCause: { id: 'rc_relationship_selfworth', label: 'Relationship-based self-worth ("only lovable if...")', agency: 'PARTIAL', inControl: 'Addressable; often attachment-related', notInControl: null } },
      { label: 'Never really developed a sense of inherent worth', next: null, rootCause: { id: 'rc_never_developed_worth', label: 'Never developed sense of inherent worth', agency: 'PARTIAL', inControl: 'Buildable, even late in life', notInControl: 'Takes sustained work' } },
      { label: 'None of the above', next: null, rootCause: { id: 'rc_core_shame', label: 'Core shame (childhood origin)', agency: 'PARTIAL', inControl: 'Deep but addressable with sustained support', notInControl: "Takes time; childhood can't be redone" } }
    ]
  },

  'selfworth_conditional': {
    id: 'selfworth_conditional',
    question: 'Worth depends on which?',
    options: [
      { label: 'Achievement', next: null, rootCause: { id: 'rc_conditional_achievement', label: 'Conditional self-worth (achievement-based)', agency: 'HIGH', inControl: 'Worth can be rebuilt on different foundations', notInControl: null } },
      { label: 'Others\' approval', next: null, rootCause: { id: 'rc_external_validation', label: 'External validation dependency', agency: 'HIGH', inControl: 'Internal validation is buildable', notInControl: null } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: EMOTIONAL NUMBNESS / SUPPRESSION
  // ════════════════════════════════════════════════
  'numbness_pattern': {
    id: 'numbness_pattern',
    question: "What's happening?",
    options: [
      { label: 'Feel emotionally numb or disconnected', next: 'numbness_cause', rootCause: null },
      { label: 'Suppress specific emotions', next: null, rootCause: { id: 'rc_cultural_suppression', label: 'Cultural or gender messaging ("be strong," "don\'t cry")', agency: 'PARTIAL', inControl: 'Internal resistance is possible', notInControl: 'Cultural conditioning is deep' } },
      { label: 'Perform emotions for others without feeling them', next: null, rootCause: { id: 'rc_performing_masking', label: 'Performing for acceptance (masking)', agency: 'HIGH', inControl: 'Authenticity is practicable in safe contexts', notInControl: 'Finding safe contexts is the challenge' } },
      { label: 'Emotions overwhelm me when they break through', next: null, rootCause: { id: 'rc_emotional_flooding', label: 'Emotional flooding when walls drop', agency: 'PARTIAL', inControl: 'Regulation skills help', notInControl: 'The stored emotion can be intense' } },
      { label: 'Can\'t cry even when I want to', next: null, rootCause: { id: 'rc_alexithymia', label: 'Alexithymia (difficulty identifying emotions)', agency: 'PARTIAL', inControl: 'Emotional awareness can be developed', notInControl: 'May have neurological component' } },
      { label: 'Feel like I\'m watching my life from outside', next: null, rootCause: { id: 'rc_dissociation', label: 'Dissociation', agency: 'PARTIAL', inControl: 'Treatable with specialized support', notInControl: 'Often linked to trauma' } }
    ]
  },

  'numbness_cause': {
    id: 'numbness_cause',
    question: 'What do you think is causing it?',
    options: [
      { label: 'Childhood taught me emotions aren\'t safe', next: null, rootCause: { id: 'rc_childhood_invalidation', label: 'Childhood emotional invalidation', agency: 'PARTIAL', inControl: 'Emotional reconnection is possible', notInControl: "Childhood can't be redone" } },
      { label: 'Something traumatic happened', next: null, rootCause: { id: 'rc_trauma_shutdown', label: 'Trauma-based shutdown', agency: 'PARTIAL', inControl: 'Trauma work helps; safety must come first', notInControl: 'Healing is gradual' } },
      { label: 'I think it\'s depression', next: null, rootCause: { id: 'rc_depression_flatness', label: 'Depression-related emotional flatness', agency: 'PARTIAL', inControl: 'Treating depression restores feeling', notInControl: null } },
      { label: 'I\'m burned out', next: null, rootCause: { id: 'rc_burnout_numbness', label: 'Burnout-related numbness', agency: 'PARTIAL', inControl: 'Recovering from burnout restores capacity', notInControl: 'Recovery is slow' } },
      { label: 'I\'m on medication that flattened my emotions', next: null, rootCause: { id: 'rc_medication_blunting', label: 'Medication-induced emotional blunting', agency: 'PARTIAL', inControl: 'Discussing alternatives with prescriber', notInControl: 'May need the medication' } },
      { label: 'Substance use is numbing my emotions', next: null, rootCause: { id: 'rc_substance_numbing', label: 'Substance use numbing emotions', agency: 'PARTIAL', inControl: 'Addressing the substance use and the underlying need', notInControl: 'Both need attention' } },
      { label: 'Grief — I feel numb since a loss', next: null, rootCause: { id: 'rc_grief_numbness', label: 'Grief-related numbness (protective)', agency: 'PARTIAL', inControl: 'May lift as grief is processed', notInControl: 'Grief has its own timeline' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: BRAIN FOG / CONCENTRATION
  // ════════════════════════════════════════════════
  'brainfog_pattern': {
    id: 'brainfog_pattern',
    question: "What's happening?",
    options: [
      { label: 'Can\'t focus, easily distracted', next: 'brainfog_focus_lifelong', rootCause: null },
      { label: 'Memory problems', next: 'brainfog_memory', rootCause: null },
      { label: 'Thinking through mud (brain fog)', next: 'brainfog_mud', rootCause: null },
      { label: 'Can\'t make decisions (paralyzed)', next: null, rootCause: { id: 'rc_decision_fatigue', label: 'Decision fatigue from overload', agency: 'HIGH', inControl: 'Reducing decisions restores capacity', notInControl: null } },
      { label: 'Racing thoughts', next: null, rootCause: { id: 'rc_anxiety_cognitive', label: 'Anxiety consuming cognitive bandwidth', agency: 'HIGH', inControl: 'Treating anxiety frees up cognition', notInControl: null } },
      { label: 'Cognitive decline that scares you', next: 'brainfog_decline_scary', rootCause: null }
    ]
  },

  'brainfog_focus_lifelong': {
    id: 'brainfog_focus_lifelong',
    question: 'Has this always been the case?',
    options: [
      { label: 'Yes, lifelong', next: null, rootCause: { id: 'rc_adhd', label: 'ADHD (undiagnosed or undertreated)', agency: 'PARTIAL', inControl: 'Very manageable with support', notInControl: 'Lifelong condition' } },
      { label: 'No, started recently', next: 'brainfog_focus_recent', rootCause: null }
    ]
  },

  'brainfog_focus_recent': {
    id: 'brainfog_focus_recent',
    question: 'What changed?',
    options: [
      { label: 'Stress increased', next: null, rootCause: { id: 'rc_chronic_stress_cortisol', label: 'Chronic stress / elevated cortisol', agency: 'HIGH', inControl: 'Stress reduction restores function', notInControl: null } },
      { label: 'Started new medication', next: null, rootCause: { id: 'rc_medication_brainfog', label: 'Medication side effect', agency: 'PARTIAL', inControl: 'Discussing alternatives', notInControl: 'May need the medication' } },
      { label: 'Sleep got worse', next: null, rootCause: { id: 'rc_sleep_deprivation_cognitive', label: 'Sleep deprivation', agency: 'HIGH', inControl: 'Improving sleep improves cognition', notInControl: null } },
      { label: 'Information overload', next: null, rootCause: { id: 'rc_information_overload', label: 'Information overload', agency: 'HIGH', inControl: 'Reducing inputs is in your control', notInControl: null } }
    ]
  },

  'brainfog_memory': {
    id: 'brainfog_memory',
    question: 'How old are you / what else is happening?',
    options: [
      { label: 'Concerned about age-related decline', next: null, rootCause: { id: 'rc_age_cognitive', label: 'Age-related cognitive changes', agency: 'PARTIAL', inControl: 'Lifestyle factors help significantly', notInControl: 'Some decline is normal' } },
      { label: 'Depression or grief is present', next: 'brainfog_memory_depression_grief', rootCause: null },
      { label: 'Possible medical cause', next: null, rootCause: { id: 'rc_medical_cognitive', label: 'Medical causes (thyroid, B12, iron, blood sugar)', agency: 'HIGH', inControl: 'Often very correctable with medical support', notInControl: null } }
    ]
  },

  'brainfog_memory_depression_grief': {
    id: 'brainfog_memory_depression_grief',
    question: 'Which is more present?',
    options: [
      { label: 'Depression', next: null, rootCause: { id: 'rc_depression_cognitive_fog', label: 'Depression-related cognitive fog', agency: 'PARTIAL', inControl: 'Clears when depression is addressed', notInControl: null } },
      { label: 'Grief', next: null, rootCause: { id: 'rc_grief_cognitive_fog', label: 'Grief-related cognitive fog', agency: 'PARTIAL', inControl: 'Clears as grief is processed', notInControl: 'Grief has its own timeline' } }
    ]
  },

  'brainfog_mud': {
    id: 'brainfog_mud',
    question: 'What do you think is driving the brain fog?',
    options: [
      { label: 'Hormonal changes (perimenopause)', next: null, rootCause: { id: 'rc_perimenopause_cognitive', label: 'Perimenopause / hormonal cognitive changes', agency: 'PARTIAL', inControl: 'Management options exist', notInControl: 'Hormonal transitions are biological' } },
      { label: 'After COVID or a virus', next: null, rootCause: { id: 'rc_long_covid_cognitive', label: 'Long COVID cognitive effects', agency: 'LOW', inControl: 'Some recovery possible over time', notInControl: 'The condition is poorly understood' } },
      { label: 'Using substances', next: null, rootCause: { id: 'rc_substance_cognitive', label: 'Substance use affecting cognition', agency: 'HIGH', inControl: 'Stopping or reducing restores function', notInControl: null } },
      { label: 'Autistic overload', next: null, rootCause: { id: 'rc_autistic_cognitive_overload', label: 'Autistic cognitive overload', agency: 'PARTIAL', inControl: 'Reducing sensory/social demands helps', notInControl: 'The underlying processing difference' } }
    ]
  },

  'brainfog_decline_scary': {
    id: 'brainfog_decline_scary',
    question: 'What do you think might be causing it?',
    options: [
      { label: 'Age-related concern', next: null, rootCause: { id: 'rc_age_cognitive', label: 'Age-related cognitive changes', agency: 'PARTIAL', inControl: 'Lifestyle factors help significantly', notInControl: 'Some decline is normal' } },
      { label: 'Possible medical cause', next: null, rootCause: { id: 'rc_medical_cognitive', label: 'Medical causes (thyroid, B12, iron, blood sugar)', agency: 'HIGH', inControl: 'Often very correctable with medical support', notInControl: null } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: OVERWHELM
  // ════════════════════════════════════════════════
  'overwhelm_pattern': {
    id: 'overwhelm_pattern',
    question: "What's driving it?",
    options: [
      { label: 'Too many demands, not enough capacity', next: 'overwhelm_demands', rootCause: null },
      { label: 'Emotional overwhelm', next: null, rootCause: { id: 'rc_emotional_dysregulation', label: 'Emotional dysregulation amplifying normal load', agency: 'PARTIAL', inControl: 'Regulation skills help', notInControl: 'Dysregulation may have neurological roots' } },
      { label: 'Decision overload', next: null, rootCause: { id: 'rc_decision_fatigue_overwhelm', label: 'Decision fatigue from overload', agency: 'HIGH', inControl: 'Reducing decisions restores capacity', notInControl: null } },
      { label: 'Life transition', next: null, rootCause: { id: 'rc_life_transition', label: 'Life transition overload', agency: 'PARTIAL', inControl: 'Pacing and prioritizing what you can', notInControl: "Some changes can't be timed or controlled" } },
      { label: 'Sensory overwhelm', next: null, rootCause: { id: 'rc_sensory_overwhelm', label: 'Sensory overwhelm (autistic, HSP, or sensory processing)', agency: 'PARTIAL', inControl: 'Environmental modifications help', notInControl: 'The processing difference is inherent' } },
      { label: 'Everything feels urgent', next: 'overwhelm_urgent', rootCause: null }
    ]
  },

  'overwhelm_demands': {
    id: 'overwhelm_demands',
    question: "What's creating the overload?",
    options: [
      { label: 'Work demands', next: null, rootCause: { id: 'rc_objective_overload', label: 'Objective overload (too many real demands)', agency: 'PARTIAL', inControl: 'Some pruning may be possible', notInControl: 'Some demands are genuinely fixed' } },
      { label: 'Can\'t say no', next: null, rootCause: { id: 'rc_poor_boundaries_overload', label: 'Poor boundary-setting leading to overload', agency: 'HIGH', inControl: 'Boundaries are learnable', notInControl: null } },
      { label: 'Everything must be perfect', next: null, rootCause: { id: 'rc_perfectionism_overload', label: 'Perfectionism inflating every task', agency: 'HIGH', inControl: 'Lowering standards on non-essential things', notInControl: null } },
      { label: 'I do everything myself', next: null, rootCause: { id: 'rc_single_point_failure', label: 'Single point of failure', agency: 'PARTIAL', inControl: 'Asking for help is possible', notInControl: 'Help may not be available' } },
      { label: 'Caregiving on top of everything', next: null, rootCause: { id: 'rc_caregiver_overwhelm', label: 'Caregiver overwhelm', agency: 'PARTIAL', inControl: 'Support, respite, sharing load', notInControl: 'The caregiving need is real' } }
    ]
  },

  'overwhelm_urgent': {
    id: 'overwhelm_urgent',
    question: 'What\'s making everything feel urgent?',
    options: [
      { label: 'Financial crisis', next: null, rootCause: { id: 'rc_financial_crisis_overwhelm', label: 'Financial crisis creating cascading overwhelm', agency: 'PARTIAL', inControl: 'Stabilizing one piece helps', notInControl: 'Financial constraints may be structural' } },
      { label: 'Health crisis', next: null, rootCause: { id: 'rc_health_crisis_overwhelm', label: 'Health crisis creating overwhelm', agency: 'PARTIAL', inControl: 'Support and triage', notInControl: 'The health situation may be uncontrollable' } },
      { label: 'Just general overwhelm', next: null, rootCause: { id: 'rc_objective_overload', label: 'Objective overload (too many real demands)', agency: 'PARTIAL', inControl: 'Some pruning may be possible', notInControl: 'Some demands are genuinely fixed' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: ANGER / IRRITABILITY
  // ════════════════════════════════════════════════
  'anger_pattern': {
    id: 'anger_pattern',
    question: "What's happening?",
    options: [
      { label: 'Constantly irritable, short fuse', next: 'anger_irritable_cause', rootCause: null },
      { label: 'Rage episodes that feel disproportionate', next: 'anger_rage_cause', rootCause: null },
      { label: 'Anger I can\'t express', next: null, rootCause: { id: 'rc_suppressed_anger', label: 'Suppressed anger turning inward', agency: 'PARTIAL', inControl: 'Learning to feel and express anger safely', notInControl: 'Often requires unlearning deep patterns' } },
      { label: 'Resentment toward specific person/situation', next: null, rootCause: { id: 'rc_boundary_resentment', label: 'Boundary violations causing resentment', agency: 'HIGH', inControl: 'Setting boundaries addresses the cause', notInControl: 'Others may not respect them' } },
      { label: 'Anger at self', next: null, rootCause: { id: 'rc_suppressed_anger_inward', label: 'Suppressed anger turning inward', agency: 'PARTIAL', inControl: 'Learning to feel and express anger safely', notInControl: 'Often requires unlearning deep patterns' } },
      { label: 'Legitimate anger at an unjust situation', next: null, rootCause: { id: 'rc_legitimate_anger', label: 'Legitimate anger at unjust situation', agency: 'PARTIAL', inControl: 'The anger may be appropriate and informative', notInControl: 'The injustice may be unchangeable' } }
    ]
  },

  'anger_irritable_cause': {
    id: 'anger_irritable_cause',
    question: 'What do you think is underneath?',
    options: [
      { label: 'Not sleeping enough', next: null, rootCause: { id: 'rc_sleep_irritability', label: 'Sleep deprivation making everything reactive', agency: 'HIGH', inControl: 'Fixing sleep fixes reactivity', notInControl: null } },
      { label: 'Stressed beyond capacity', next: null, rootCause: { id: 'rc_chronic_stress_irritability', label: 'Chronic stress eroding tolerance', agency: 'HIGH', inControl: 'Addressing the stress source', notInControl: 'The stressor itself may be fixed' } },
      { label: 'Think it might be depression', next: null, rootCause: { id: 'rc_depression_irritability', label: 'Depression presenting as irritability', agency: 'PARTIAL', inControl: 'Treatable once recognized', notInControl: 'Often missed' } },
      { label: 'Hormonal', next: null, rootCause: { id: 'rc_hormonal_irritability', label: 'Hormonal irritability', agency: 'PARTIAL', inControl: 'Medical management may help', notInControl: 'Hormonal fluctuations are biological' } },
      { label: 'ADHD frustration', next: null, rootCause: { id: 'rc_adhd_frustration', label: 'ADHD-related frustration intolerance', agency: 'PARTIAL', inControl: 'ADHD management helps', notInControl: 'ADHD is persistent' } },
      { label: 'Medication', next: null, rootCause: { id: 'rc_medication_irritability', label: 'Medication side effect (steroids, some antidepressants)', agency: 'PARTIAL', inControl: 'Discussing alternatives', notInControl: 'May need the medication' } }
    ]
  },

  'anger_rage_cause': {
    id: 'anger_rage_cause',
    question: 'What do you think is driving the rage?',
    options: [
      { label: 'Past trauma', next: null, rootCause: { id: 'rc_trauma_hyperreactivity', label: 'Trauma-based hyperreactivity', agency: 'PARTIAL', inControl: 'Trauma work reduces reactivity', notInControl: 'Healing is gradual' } },
      { label: 'Autistic meltdowns', next: null, rootCause: { id: 'rc_autistic_meltdowns', label: 'Autistic meltdowns misidentified as anger', agency: 'PARTIAL', inControl: 'Reducing triggers helps', notInControl: 'The processing difference is inherent' } },
      { label: 'Unprocessed grief', next: null, rootCause: { id: 'rc_grief_anger', label: 'Unprocessed grief presenting as anger', agency: 'PARTIAL', inControl: 'Processing grief helps', notInControl: 'Grief has its own timeline' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: GRIEF / LOSS
  // ════════════════════════════════════════════════
  'grief_pattern': {
    id: 'grief_pattern',
    question: 'What kind of loss?',
    options: [
      { label: 'Death of someone close', next: 'grief_death_timeframe', rootCause: null },
      { label: 'End of a relationship', next: 'grief_relationship', rootCause: null },
      { label: 'Loss of health or physical capacity', next: null, rootCause: { id: 'rc_loss_health', label: 'Loss of health / capacity', agency: 'PARTIAL', inControl: 'Adaptation and grieving', notInControl: 'The change may be permanent' } },
      { label: 'Loss of job, career, or financial security', next: null, rootCause: { id: 'rc_loss_identity', label: 'Loss of identity (role, career, relationship-based self)', agency: 'HIGH', inControl: 'Identity can be rebuilt', notInControl: 'The old identity is gone' } },
      { label: 'Loss of identity or sense of self', next: null, rootCause: { id: 'rc_loss_identity_self', label: 'Loss of identity (role, career, relationship-based self)', agency: 'HIGH', inControl: 'Identity can be rebuilt', notInControl: 'The old identity is gone' } },
      { label: 'Loss of a dream or expected future', next: null, rootCause: { id: 'rc_loss_expected_future', label: 'Loss of expected future', agency: 'PARTIAL', inControl: 'Grieving and reimagining', notInControl: "The original future isn't coming" } },
      { label: 'Multiple losses close together', next: null, rootCause: { id: 'rc_cumulative_loss', label: 'Cumulative loss', agency: 'PARTIAL', inControl: 'Processing each; getting support', notInControl: 'The losses themselves' } },
      { label: 'Ambiguous loss (someone alive but gone)', next: null, rootCause: { id: 'rc_ambiguous_loss', label: 'Ambiguous loss', agency: 'LOW', inControl: 'Processing the ambiguity', notInControl: 'The situation is genuinely unresolved' } }
    ]
  },

  'grief_death_timeframe': {
    id: 'grief_death_timeframe',
    question: 'How long ago?',
    options: [
      { label: 'Recent (weeks/months)', next: 'grief_death_additional', rootCause: null },
      { label: 'A while ago but I\'m stuck', next: null, rootCause: { id: 'rc_complicated_grief', label: 'Complicated grief', agency: 'PARTIAL', inControl: 'Specialized grief support helps', notInControl: 'The loss itself; some grief is enduring' } },
      { label: 'Others say I should be over it', next: null, rootCause: { id: 'rc_grief_suppressed', label: 'Grief suppressed ("should be over it by now")', agency: 'HIGH', inControl: 'Permission to grieve is giveable to yourself', notInControl: "Cultural pressure to 'move on'" } }
    ]
  },

  'grief_death_additional': {
    id: 'grief_death_additional',
    question: 'Is there anything else complicating the grief?',
    options: [
      { label: 'Grief that society doesn\'t validate (disenfranchised)', next: null, rootCause: { id: 'rc_disenfranchised_grief', label: 'Disenfranchised grief', agency: 'PARTIAL', inControl: 'Finding people who understand', notInControl: 'Society may not validate this grief' } },
      { label: 'Grieving something that hasn\'t happened yet (anticipatory)', next: null, rootCause: { id: 'rc_anticipatory_grief', label: 'Anticipatory grief', agency: 'PARTIAL', inControl: 'Preparing emotionally is possible', notInControl: 'The coming loss may be unavoidable' } },
      { label: 'The loss triggered other losses (secondary)', next: null, rootCause: { id: 'rc_secondary_losses', label: 'Secondary losses', agency: 'PARTIAL', inControl: 'Some secondary losses are addressable', notInControl: 'Some follow inevitably from the primary loss' } },
      { label: 'No, just the grief itself', next: null, rootCause: { id: 'rc_acute_grief', label: 'Acute grief (recent loss)', agency: 'PARTIAL', inControl: 'Processing helps; support helps', notInControl: 'The loss is permanent; grief has no fixed timeline' } }
    ]
  },

  'grief_relationship': {
    id: 'grief_relationship',
    question: 'Is there anything complicating the grief?',
    options: [
      { label: 'Guilt about what happened', next: null, rootCause: { id: 'rc_guilt_grief', label: 'Guilt complicating grief', agency: 'PARTIAL', inControl: 'Guilt is addressable', notInControl: "The actions or inactions that caused it can't be undone" } },
      { label: 'Grief that society doesn\'t validate (disenfranchised)', next: null, rootCause: { id: 'rc_disenfranchised_grief', label: 'Disenfranchised grief', agency: 'PARTIAL', inControl: 'Finding people who understand', notInControl: 'Society may not validate this grief' } },
      { label: 'Grieving something that hasn\'t happened yet (anticipatory)', next: null, rootCause: { id: 'rc_anticipatory_grief', label: 'Anticipatory grief', agency: 'PARTIAL', inControl: 'Preparing emotionally is possible', notInControl: 'The coming loss may be unavoidable' } },
      { label: 'The loss triggered other losses (secondary)', next: null, rootCause: { id: 'rc_secondary_losses', label: 'Secondary losses', agency: 'PARTIAL', inControl: 'Some secondary losses are addressable', notInControl: 'Some follow inevitably from the primary loss' } },
      { label: 'No, just the grief itself', next: null, rootCause: { id: 'rc_acute_grief_relationship', label: 'Acute grief (end of relationship)', agency: 'PARTIAL', inControl: 'Processing helps; support helps', notInControl: 'The loss is permanent; grief has no fixed timeline' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: SUBSTANCE USE / UNHEALTHY COPING
  // ════════════════════════════════════════════════
  'substance_pattern': {
    id: 'substance_pattern',
    question: "What's the pattern?",
    options: [
      { label: 'Alcohol (escalating or problematic)', next: 'substance_alcohol_role', rootCause: null },
      { label: 'Drugs', next: null, rootCause: { id: 'rc_drug_dependence', label: 'Drug dependence or self-medicating with substances', agency: 'PARTIAL', inControl: 'Recovery is possible / The underlying need is identifiable', notInControl: 'Requires support' } },
      { label: 'Screens, internet, gaming', next: null, rootCause: { id: 'rc_screen_compulsion', label: 'Screen/gaming compulsion', agency: 'PARTIAL', inControl: "Usage is adjustable; what it's replacing needs attention", notInControl: 'The pull of the technology is designed to be addictive' } },
      { label: 'Work (avoiding life by working constantly)', next: null, rootCause: { id: 'rc_workaholism', label: 'Workaholism', agency: 'HIGH', inControl: 'Boundary-setting is possible', notInControl: 'Identity may be deeply tied to work' } },
      { label: 'Shopping or spending', next: null, rootCause: { id: 'rc_compulsive_spending', label: 'Compulsive spending', agency: 'PARTIAL', inControl: 'Spending patterns are changeable', notInControl: 'The emotional driver needs attention' } },
      { label: 'Pornography or compulsive sexual behavior', next: null, rootCause: { id: 'rc_compulsive_sexual', label: 'Compulsive sexual behavior', agency: 'PARTIAL', inControl: 'Addressable with support', notInControl: 'Often shame-laden, making it harder to address' } },
      { label: 'Gambling', next: null, rootCause: { id: 'rc_gambling', label: 'Gambling', agency: 'PARTIAL', inControl: 'Treatable with support', notInControl: 'Financial damage may already be done' } },
      { label: 'Other compulsive behavior', next: null, rootCause: { id: 'rc_other_compulsive', label: 'Other compulsive behaviors', agency: 'PARTIAL', inControl: 'Most are addressable', notInControl: 'Often anxiety-based; the anxiety needs attention' } },
      { label: 'Self-harm as coping', next: null, rootCause: { id: 'rc_self_harm', label: 'Self-harm as coping', agency: 'PARTIAL', inControl: 'Alternative coping is learnable', notInControl: "The pain it's managing is real" } }
    ]
  },

  'substance_alcohol_role': {
    id: 'substance_alcohol_role',
    question: 'What role does alcohol play?',
    options: [
      { label: 'Relaxation after stress', next: null, rootCause: { id: 'rc_alcohol_stress', label: 'Alcohol as stress valve', agency: 'HIGH', inControl: 'Both the drinking and the stress source are addressable', notInControl: null } },
      { label: 'To fall asleep', next: null, rootCause: { id: 'rc_alcohol_sleep', label: 'Alcohol as sleep aid', agency: 'HIGH', inControl: 'Both addressable', notInControl: null } },
      { label: 'To be social', next: null, rootCause: { id: 'rc_alcohol_social', label: 'Alcohol masking social anxiety', agency: 'PARTIAL', inControl: 'The underlying condition needs attention', notInControl: 'The substance is addressing a real need ineffectively' } },
      { label: 'Daily, hard to stop', next: null, rootCause: { id: 'rc_alcohol_dependence', label: 'Alcohol dependence', agency: 'PARTIAL', inControl: 'Recovery is possible', notInControl: 'Requires sustained effort and support' } },
      { label: 'Binge episodes', next: null, rootCause: { id: 'rc_binge_drinking', label: 'Binge drinking pattern', agency: 'PARTIAL', inControl: 'Pattern is addressable', notInControl: 'Social and environmental triggers' } },
      { label: 'To numb emotional pain', next: null, rootCause: { id: 'rc_alcohol_anesthetic', label: 'Alcohol as emotional anesthetic', agency: 'PARTIAL', inControl: 'The underlying condition needs attention', notInControl: null } }
    ]
  }
};
