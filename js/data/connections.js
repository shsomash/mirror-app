export const connectionsStart = 'connections_start';

export const connectionsTree = {

  // ──────────────────────────────────────────────
  //  ENTRY POINT — Sub-dimension picker (Layer 3)
  // ──────────────────────────────────────────────
  'connections_start': {
    id: 'connections_start',
    question: "Let's narrow down the relationship issue. Which area is most pressing?",
    options: [
      { label: 'Romantic partnership (or desire for one)', next: 'romantic_status', rootCause: null },
      { label: 'Family relationships', next: 'family_which', rootCause: null },
      { label: 'Friendships', next: 'friendship_issue', rootCause: null },
      { label: 'Loneliness or isolation', next: 'loneliness_pattern', rootCause: null },
      { label: 'Boundaries and reciprocity', next: 'boundaries_issue', rootCause: null },
      { label: 'Community or belonging', next: 'community_issue', rootCause: null },
      { label: 'Conflict with a specific person', next: 'conflict_who', rootCause: null },
      { label: 'Caregiving strain (child, parent, partner, or other)', next: 'caregiving_strain', rootCause: null }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: CAREGIVING STRAIN (broader than elder care)
  // ════════════════════════════════════════════════
  'caregiving_strain': {
    id: 'caregiving_strain',
    question: 'Who are you caring for?',
    options: [
      { label: 'Aging parent', next: null, rootCause: { id: 'elder_care_burden_broad', label: 'Elder care burden', agency: 'PARTIAL', inControl: 'Sharing load, seeking support, setting limits', notInControl: 'The aging process and care needs' } },
      { label: 'Child with special needs or illness', next: null, rootCause: { id: 'special_needs_caregiving', label: 'Special needs child caregiving', agency: 'PARTIAL', inControl: 'Support, respite, advocacy', notInControl: "The child's condition" } },
      { label: 'Partner with illness or disability', next: null, rootCause: { id: 'partner_caregiving', label: 'Partner caregiving burden', agency: 'PARTIAL', inControl: 'Seeking support; maintaining your own health', notInControl: "Your partner's condition" } },
      { label: 'Multiple people depending on me', next: null, rootCause: { id: 'sandwich_generation', label: 'Sandwich generation (caregiving in multiple directions)', agency: 'PARTIAL', inControl: 'Prioritizing, delegating where possible', notInControl: 'The demands are genuinely competing' } },
      { label: 'Caregiving has taken over my identity', next: null, rootCause: { id: 'caregiver_identity_loss', label: 'Caregiver identity loss', agency: 'PARTIAL', inControl: 'Reclaiming even small parts of yourself', notInControl: 'The caregiving demands are real' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: ROMANTIC PARTNERSHIP
  // ════════════════════════════════════════════════
  'romantic_status': {
    id: 'romantic_status',
    question: 'Are you currently in a romantic partnership?',
    options: [
      { label: 'Yes, I\'m in a relationship', next: 'romantic_in_rel', rootCause: null },
      { label: 'No, I\'m single', next: 'romantic_single', rootCause: null }
    ]
  },

  'romantic_in_rel': {
    id: 'romantic_in_rel',
    question: "What's the main issue?",
    options: [
      { label: 'Communication breakdown', next: 'comm_breakdown', rootCause: null },
      { label: 'Emotional disconnection', next: 'emotional_disconnect', rootCause: null },
      { label: 'Intimacy problems', next: 'intimacy_issue', rootCause: null },
      { label: 'Trust broken', next: 'trust_broken', rootCause: null },
      { label: 'Power imbalance or control', next: null, rootCause: { id: 'power_control_dynamic', label: 'Power or control dynamic', agency: 'LOW', inControl: 'Recognizing it is in your control', notInControl: "If it's abuse, the other person rarely changes" } },
      { label: 'Different values or life directions', next: null, rootCause: { id: 'fundamental_value_incompatibility', label: 'Fundamental value incompatibility', agency: 'LOW', inControl: 'Recognizing it is in your control', notInControl: "You can't make someone share your values" } },
      { label: 'External stress straining relationship', next: 'external_stress', rootCause: null },
      { label: 'Considering leaving but unsure', next: 'leaving_unsure', rootCause: null },
      { label: 'Staying for reasons other than love', next: 'staying_reasons', rootCause: null },
      { label: 'Codependency', next: null, rootCause: { id: 'codependency', label: 'Codependency pattern', agency: 'PARTIAL', inControl: 'Your part is addressable', notInControl: 'The dynamic involves both people' } },
      { label: 'Conflict avoidance (we never fight but nothing gets resolved)', next: 'conflict_avoidance_pattern', rootCause: null }
    ]
  },

  'conflict_avoidance_pattern': {
    id: 'conflict_avoidance_pattern',
    question: "What's behind the avoidance?",
    options: [
      { label: 'Fear of the other person\'s reaction', next: null, rootCause: { id: 'conflict_avoidance_fear', label: 'Conflict avoidance (fear of reaction)', agency: 'PARTIAL', inControl: 'Learning to tolerate discomfort in conversations', notInControl: "The other person's reaction" } },
      { label: 'Grew up in a home where conflict was dangerous', next: null, rootCause: { id: 'conflict_avoidance_childhood', label: 'Conflict avoidance (learned in childhood)', agency: 'PARTIAL', inControl: 'The pattern is changeable with practice', notInControl: 'The childhood experience shaped this deeply' } },
      { label: 'Keeping the peace is more important to me than being heard', next: null, rootCause: { id: 'conflict_avoidance_peacekeeping', label: 'Conflict avoidance (peacekeeping at own expense)', agency: 'HIGH', inControl: 'Your voice matters; raising it is a skill', notInControl: null } },
      { label: 'Don\'t know how to have a disagreement without it escalating', next: null, rootCause: { id: 'conflict_avoidance_skill_gap', label: 'Conflict avoidance (skill gap)', agency: 'HIGH', inControl: 'Healthy conflict is a learnable skill', notInControl: null } }
    ]
  },

  'comm_breakdown': {
    id: 'comm_breakdown',
    question: 'What happens when you try to talk?',
    options: [
      { label: 'Both willing but lack skills', next: null, rootCause: { id: 'communication_skill_deficit', label: 'Communication skill deficit (both willing)', agency: 'HIGH', inControl: 'Skills are learnable', notInControl: null } },
      { label: 'One person won\'t engage', next: null, rootCause: { id: 'communication_one_wont', label: 'Communication breakdown (one person won\'t engage)', agency: 'PARTIAL', inControl: 'Your communication is in your control', notInControl: "Your partner's willingness" } },
      { label: 'Accumulated grievances', next: null, rootCause: { id: 'unresolved_resentment', label: 'Unresolved resentment (accumulated grievances)', agency: 'PARTIAL', inControl: 'Addressing it is possible if both engage', notInControl: "The other person's willingness to hear" } },
      { label: 'Stonewalling', next: null, rootCause: { id: 'stonewalling', label: 'Stonewalling pattern', agency: 'PARTIAL', inControl: 'Your pattern is changeable', notInControl: "Your partner's pattern" } }
    ]
  },

  'emotional_disconnect': {
    id: 'emotional_disconnect',
    question: "What's happening?",
    options: [
      { label: 'One partner has withdrawn', next: null, rootCause: { id: 'emotional_withdrawal', label: 'Emotional withdrawal by one partner', agency: 'PARTIAL', inControl: "You can express need; you can't force engagement", notInControl: 'Whether your partner re-engages' } },
      { label: 'Depression affecting relationship', next: null, rootCause: { id: 'depression_affecting_rel', label: 'Depression affecting the relationship', agency: 'PARTIAL', inControl: 'The depression is treatable', notInControl: 'Its impact on the relationship takes time to repair' } },
      { label: 'Changed after children', next: null, rootCause: { id: 'relationship_changed_children', label: 'Relationship changed after children', agency: 'PARTIAL', inControl: 'Reconnecting is possible with effort', notInControl: 'The demands of parenting are real' } }
    ]
  },

  'intimacy_issue': {
    id: 'intimacy_issue',
    question: 'What kind?',
    options: [
      { label: 'Sexual intimacy lost', next: null, rootCause: { id: 'loss_sexual_intimacy', label: 'Loss of sexual intimacy', agency: 'PARTIAL', inControl: 'Exploration and communication help', notInControl: 'Medical factors, mismatched desire' } },
      { label: 'Emotional intimacy lost', next: null, rootCause: { id: 'loss_emotional_intimacy', label: 'Loss of emotional intimacy', agency: 'PARTIAL', inControl: 'Reconnection requires both people', notInControl: null } }
    ]
  },

  'trust_broken': {
    id: 'trust_broken',
    question: 'What happened?',
    options: [
      { label: 'Recent infidelity', next: null, rootCause: { id: 'infidelity_recent', label: 'Infidelity (recent)', agency: 'PARTIAL', inControl: 'Deciding how to respond is in your control', notInControl: "Trust takes years to rebuild; your partner's actions" } },
      { label: 'Ongoing or repeated', next: null, rootCause: { id: 'infidelity_ongoing', label: 'Infidelity (ongoing or repeated)', agency: 'LOW', inControl: 'Your response is in your control', notInControl: "The pattern is your partner's" } }
    ]
  },

  'external_stress': {
    id: 'external_stress',
    question: 'What kind of stress?',
    options: [
      { label: 'Money, work, general', next: null, rootCause: { id: 'external_stress_rel', label: 'External stress straining relationship', agency: 'PARTIAL', inControl: 'Addressing the stressor; protecting the relationship', notInControl: 'The stressor itself' } },
      { label: "Partner's mental health", next: null, rootCause: { id: 'partner_mental_health', label: "Partner's mental health affecting relationship", agency: 'PARTIAL', inControl: 'Supporting without losing yourself', notInControl: "Your partner's health journey is theirs" } },
      { label: "Partner's substance use", next: null, rootCause: { id: 'partner_substance_use', label: "Partner's substance use affecting relationship", agency: 'LOW', inControl: 'Your boundaries and wellbeing', notInControl: "Your partner's addiction" } }
    ]
  },

  'leaving_unsure': {
    id: 'leaving_unsure',
    question: "What's holding you?",
    options: [
      { label: 'Love is there but not working', next: null, rootCause: { id: 'love_not_working', label: "Love is there but relationship isn't working", agency: 'PARTIAL', inControl: "Love alone doesn't fix dysfunction; skills and willingness matter", notInControl: null } },
      { label: 'Relationship has run its course', next: null, rootCause: { id: 'relationship_run_its_course', label: 'Relationship has run its course', agency: 'PARTIAL', inControl: 'Accepting this is possible', notInControl: 'Grief, logistics, entanglement' } }
    ]
  },

  'staying_reasons': {
    id: 'staying_reasons',
    question: "What's keeping you?",
    options: [
      { label: 'Children', next: null, rootCause: { id: 'staying_for_children', label: 'Staying for children', agency: 'UNCERTAIN', inControl: 'Complex; no universally right answer', notInControl: "Children's needs, financial realities, safety" } },
      { label: 'Financial dependence', next: null, rootCause: { id: 'staying_financial_dependence', label: 'Staying out of financial dependence', agency: 'PARTIAL', inControl: 'Building independence where possible', notInControl: 'Constraints may be real' } },
      { label: 'Obligation, guilt, or fear', next: null, rootCause: { id: 'staying_obligation', label: 'Staying out of obligation, guilt, or fear', agency: 'PARTIAL', inControl: "Examining what's truly holding you", notInControl: 'Some constraints are real; some are beliefs' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: ROMANTIC — SINGLE
  // ════════════════════════════════════════════════
  'romantic_single': {
    id: 'romantic_single',
    question: "What's the challenge?",
    options: [
      { label: 'Not meeting anyone', next: 'single_not_meeting', rootCause: null },
      { label: 'Dating but no real connection', next: 'single_no_connection', rootCause: null },
      { label: 'Afraid of vulnerability', next: null, rootCause: { id: 'fear_vulnerability', label: 'Fear of vulnerability or intimacy', agency: 'PARTIAL', inControl: 'Addressable with support', notInControl: 'Often rooted in past experience' } },
      { label: 'Recently out of a relationship', next: null, rootCause: { id: 'not_over_previous', label: 'Not over previous relationship', agency: 'PARTIAL', inControl: 'Grief processing helps', notInControl: 'Grief has its own timeline' } },
      { label: 'Life makes it hard', next: null, rootCause: { id: 'life_circumstances_dating', label: 'Life circumstances limiting dating', agency: 'PARTIAL', inControl: 'Some adjustments possible', notInControl: 'The constraints are real' } },
      { label: 'Not sure I want partnership', next: null, rootCause: { id: 'dont_want_partnership', label: "Don't actually want partnership", agency: 'N/A', inControl: "This is not a problem if it's genuine", notInControl: 'Societal pressure says otherwise' } },
      { label: 'Recovering from abusive relationship', next: null, rootCause: { id: 'recovering_from_abuse', label: 'Recovering from abuse (trust destroyed)', agency: 'PARTIAL', inControl: 'Trust rebuilds over time', notInControl: 'The damage was real' } },
      { label: 'Dating fatigue', next: null, rootCause: { id: 'dating_fatigue', label: 'Dating fatigue or burnout', agency: 'PARTIAL', inControl: 'Taking a break is valid', notInControl: 'Dating culture is exhausting' } }
    ]
  },

  'single_not_meeting': {
    id: 'single_not_meeting',
    question: "What's in the way?",
    options: [
      { label: 'Limited social environment', next: null, rootCause: { id: 'limited_social_env', label: 'Limited social environment', agency: 'HIGH', inControl: 'Expanding where you meet people', notInControl: null } },
      { label: 'Small town / limited pool', next: null, rootCause: { id: 'geographic_isolation_dating', label: 'Geographic isolation (small dating pool)', agency: 'PARTIAL', inControl: 'Online dating, eventual relocation', notInControl: 'Current location' } },
      { label: 'Social anxiety', next: null, rootCause: { id: 'social_anxiety_connection', label: 'Social anxiety limiting connection', agency: 'HIGH', inControl: 'Anxiety is treatable', notInControl: null } },
      { label: 'Body image or self-worth blocking', next: null, rootCause: { id: 'body_image_blocking_dating', label: 'Body image or self-worth blocking dating', agency: 'PARTIAL', inControl: 'Self-worth work helps', notInControl: null } }
    ]
  },

  'single_no_connection': {
    id: 'single_no_connection',
    question: "What's the pattern?",
    options: [
      { label: 'Cling then feel abandoned', next: null, rootCause: { id: 'anxious_attachment', label: 'Anxious attachment pattern', agency: 'PARTIAL', inControl: 'Attachment work takes time but helps', notInControl: 'The pattern is deep' } },
      { label: 'Walls go up when it gets close', next: null, rootCause: { id: 'avoidant_attachment_dating', label: 'Avoidant attachment pattern', agency: 'PARTIAL', inControl: 'Gradual vulnerability is practicable', notInControl: 'The pattern is deep' } },
      { label: 'Keep choosing the same type', next: null, rootCause: { id: 'repeating_partner_pattern', label: 'Repeating partner selection pattern', agency: 'HIGH', inControl: 'The pattern is identifiable and breakable', notInControl: null } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: FAMILY RELATIONSHIPS
  // ════════════════════════════════════════════════
  'family_which': {
    id: 'family_which',
    question: 'Which relationship?',
    options: [
      { label: 'Parents (as adult child)', next: 'family_parents', rootCause: null },
      { label: 'Siblings', next: 'family_siblings', rootCause: null },
      { label: 'Your own children', next: 'family_children', rootCause: null },
      { label: 'Extended family', next: 'family_extended', rootCause: null },
      { label: 'In-laws', next: null, rootCause: { id: 'inlaw_conflict', label: 'In-law conflict', agency: 'PARTIAL', inControl: "Boundaries; your partner's role is key", notInControl: "In-law's behavior" } },
      { label: 'Estranged family member', next: 'family_estranged', rootCause: null }
    ]
  },

  'family_parents': {
    id: 'family_parents',
    question: "What's the challenge?",
    options: [
      { label: 'Toxic or narcissistic parent', next: null, rootCause: { id: 'toxic_parent', label: 'Toxic or narcissistic parent', agency: 'PARTIAL', inControl: 'Boundaries, contact level', notInControl: 'The parent will likely not change; childhood impact is real' } },
      { label: 'Enmeshed family', next: null, rootCause: { id: 'enmeshed_family', label: 'Enmeshed family system', agency: 'PARTIAL', inControl: 'Individuation is possible', notInControl: 'Family will resist; deep patterns take time' } },
      { label: 'Childhood trauma', next: null, rootCause: { id: 'childhood_trauma_family', label: 'Childhood trauma from family', agency: 'PARTIAL', inControl: 'Processing the trauma', notInControl: "The past can't be undone" } },
      { label: 'Elder care burden', next: null, rootCause: { id: 'elder_care_burden', label: 'Elder care burden', agency: 'PARTIAL', inControl: 'Sharing load, seeking support', notInControl: 'The aging process' } },
      { label: 'Duty without genuine connection', next: null, rootCause: { id: 'duty_based_relationship', label: 'Duty-based relationship', agency: 'PARTIAL', inControl: 'Deciding what level of contact works for you', notInControl: "You can't create genuine connection unilaterally" } },
      { label: 'Cultural expectations', next: null, rootCause: { id: 'cultural_expectations_family', label: "Cultural expectations you can't meet", agency: 'PARTIAL', inControl: 'Finding your own path', notInControl: "Cultural pressure won't disappear" } }
    ]
  },

  'family_siblings': {
    id: 'family_siblings',
    question: "What's happening?",
    options: [
      { label: 'Rivalry or competition', next: null, rootCause: { id: 'sibling_rivalry', label: 'Sibling rivalry or competition', agency: 'PARTIAL', inControl: 'Your participation is in your control', notInControl: "Your sibling's behavior" } },
      { label: "Family member's addiction", next: null, rootCause: { id: 'family_addiction', label: "Family member's addiction affecting everyone", agency: 'PARTIAL', inControl: 'Your boundaries and wellbeing', notInControl: 'Their addiction' } },
      { label: 'Inheritance or money conflict', next: null, rootCause: { id: 'inheritance_conflict_fam', label: 'Inheritance or money-related family conflict', agency: 'PARTIAL', inControl: 'Your approach and boundaries', notInControl: "Others' expectations and behavior" } }
    ]
  },

  'family_children': {
    id: 'family_children',
    question: "What's the issue?",
    options: [
      { label: 'Parenting struggles', next: null, rootCause: { id: 'parenting_struggles', label: 'Parenting struggles', agency: 'PARTIAL', inControl: 'Skills, support, approach', notInControl: 'Children have their own temperament and autonomy' } },
      { label: 'Adult child conflict', next: null, rootCause: { id: 'adult_child_conflict', label: 'Adult child conflict', agency: 'PARTIAL', inControl: 'Your approach is in your control', notInControl: "Your adult child's choices" } },
      { label: 'Blended family complexity', next: null, rootCause: { id: 'blended_family', label: 'Blended family complexity', agency: 'PARTIAL', inControl: 'Your behavior and communication', notInControl: "Other household's dynamics" } }
    ]
  },

  'family_extended': {
    id: 'family_extended',
    question: "What's the issue?",
    options: [
      { label: 'Inheritance or money conflict', next: null, rootCause: { id: 'inheritance_conflict', label: 'Inheritance or money-related family conflict', agency: 'PARTIAL', inControl: 'Your approach and boundaries', notInControl: "Others' expectations and behavior" } },
      { label: 'Family secret', next: null, rootCause: { id: 'family_secret', label: 'Family secret or unspoken truth', agency: 'PARTIAL', inControl: 'Whether and how you address it', notInControl: "Others' reactions" } }
    ]
  },

  'family_estranged': {
    id: 'family_estranged',
    question: 'Was this your choice?',
    options: [
      { label: 'Yes, my choice', next: null, rootCause: { id: 'estrangement_your_choice', label: 'Family estrangement (your choice)', agency: 'HIGH', inControl: 'You chose this for a reason', notInControl: 'Grief and guilt are real' } },
      { label: 'No, they rejected me', next: null, rootCause: { id: 'family_rejection', label: 'Family rejection (not your choice)', agency: 'LOW', inControl: 'Processing and building chosen family', notInControl: 'Their decision' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: FRIENDSHIPS
  // ════════════════════════════════════════════════
  'friendship_issue': {
    id: 'friendship_issue',
    question: "What's the issue?",
    options: [
      { label: 'No close friends', next: 'friendship_none', rootCause: null },
      { label: 'One-sided friendships', next: null, rootCause: { id: 'over_functioning_friendships', label: 'Over-functioning in friendships (always the giver)', agency: 'HIGH', inControl: 'Changing the pattern', notInControl: null } },
      { label: 'Friendships feel shallow', next: null, rootCause: { id: 'vulnerability_avoidance', label: 'Vulnerability avoidance (keeping things surface)', agency: 'HIGH', inControl: 'Depth requires risk', notInControl: null } },
      { label: 'Lost friendships', next: 'friendship_lost', rootCause: null },
      { label: 'Hard to maintain', next: 'friendship_maintain', rootCause: null },
      { label: 'Friends from outgrown life stage', next: null, rootCause: { id: 'life_stage_divergence', label: 'Life stage divergence', agency: 'LOW', inControl: 'Finding new friends in current stage', notInControl: 'Some friendships have natural endings' } },
      { label: 'Content with few friends', next: null, rootCause: { id: 'content_few_friends', label: 'Content with few friends (introversion)', agency: 'N/A', inControl: "Not a problem if you're fulfilled", notInControl: 'Societal expectation of extroversion' } }
    ]
  },

  'friendship_none': {
    id: 'friendship_none',
    question: "What's in the way?",
    options: [
      { label: 'Social anxiety', next: null, rootCause: { id: 'social_anxiety_friends', label: 'Social anxiety preventing connection', agency: 'HIGH', inControl: 'Anxiety is treatable', notInControl: null } },
      { label: "Don't know how as adult", next: null, rootCause: { id: 'dont_know_how_friends', label: "Don't know how to make friends as adult", agency: 'HIGH', inControl: 'There are approaches; it just requires showing up consistently', notInControl: null } },
      { label: 'Social skills gap', next: null, rootCause: { id: 'social_skills_gap', label: 'Social skills gap', agency: 'HIGH', inControl: 'Skills are learnable', notInControl: null } },
      { label: 'Depression-driven withdrawal', next: null, rootCause: { id: 'depression_withdrawal', label: 'Depression-driven withdrawal', agency: 'PARTIAL', inControl: 'Treating depression; reaching out even when hard', notInControl: null } },
      { label: 'Trust issues after betrayal', next: null, rootCause: { id: 'trust_issues_friends', label: 'Trust issues after betrayal', agency: 'PARTIAL', inControl: 'Trust rebuilds slowly', notInControl: 'The betrayal happened' } }
    ]
  },

  'friendship_lost': {
    id: 'friendship_lost',
    question: 'What happened?',
    options: [
      { label: 'Faded over time', next: null, rootCause: { id: 'life_stage_divergence_lost', label: 'Life stage divergence', agency: 'LOW', inControl: 'Finding new friends in current stage', notInControl: 'Some friendships have natural endings' } },
      { label: 'Important friendship ended', next: null, rootCause: { id: 'friendship_grief', label: 'Friendship grief (important friendship ended)', agency: 'PARTIAL', inControl: 'Processing the loss', notInControl: 'The loss is real' } },
      { label: 'Left a context', next: null, rootCause: { id: 'friends_left_context', label: "Friends from context you've left", agency: 'PARTIAL', inControl: 'Finding new community', notInControl: 'The transition is real' } }
    ]
  },

  'friendship_maintain': {
    id: 'friendship_maintain',
    question: 'Why is it hard?',
    options: [
      { label: 'Time scarcity', next: null, rootCause: { id: 'time_scarcity_friends', label: 'Time scarcity (work, caregiving)', agency: 'PARTIAL', inControl: 'Some time may be reclaimable', notInControl: 'The demands are real' } },
      { label: 'Geographic isolation', next: null, rootCause: { id: 'geographic_isolation_friends', label: 'Geographic isolation or relocation', agency: 'PARTIAL', inControl: 'Rebuilding where you are; online connection', notInControl: 'Past friendships may fade' } },
      { label: 'ADHD', next: null, rootCause: { id: 'adhd_friendship_maintenance', label: 'ADHD making maintenance hard', agency: 'PARTIAL', inControl: 'Systems and reminders help', notInControl: 'ADHD makes this persistently harder' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: LONELINESS / ISOLATION
  // ════════════════════════════════════════════════
  'loneliness_pattern': {
    id: 'loneliness_pattern',
    question: "What's the pattern?",
    options: [
      { label: 'Objectively isolated', next: null, rootCause: { id: 'objective_isolation', label: 'Objective isolation', agency: 'PARTIAL', inControl: 'Building connections is possible', notInControl: 'Geographic, health, or circumstantial barriers may be real' } },
      { label: 'Surrounded but lonely', next: 'loneliness_surrounded', rootCause: null },
      { label: 'Lost someone central', next: null, rootCause: { id: 'grief_loneliness', label: 'Grief-related loneliness', agency: 'PARTIAL', inControl: 'Processing grief; new connections are possible', notInControl: 'The loss is permanent' } },
      { label: 'New life stage', next: 'loneliness_lifestage', rootCause: null },
      { label: 'Lonely in relationship', next: null, rootCause: { id: 'lonely_in_relationship', label: 'Lonely in relationship', agency: 'PARTIAL', inControl: 'Communicating the need; seeking connection elsewhere too', notInControl: "Your partner's capacity to meet you" } },
      { label: 'Content alone but pressured', next: null, rootCause: { id: 'content_alone', label: 'Content alone (not actually lonely)', agency: 'N/A', inControl: 'Not a problem', notInControl: 'Societal pressure to be social' } },
      { label: 'Caregiver isolation', next: null, rootCause: { id: 'caregiver_isolation', label: 'Caregiver isolation', agency: 'PARTIAL', inControl: 'Seeking support; maintaining some connection', notInControl: 'The caregiving demands' } },
      { label: 'Disability limiting social access', next: null, rootCause: { id: 'disability_social_limit', label: 'Disability or illness limiting social access', agency: 'PARTIAL', inControl: 'Adaptive approaches, online connection', notInControl: 'The limitation itself' } }
    ]
  },

  'loneliness_surrounded': {
    id: 'loneliness_surrounded',
    question: "What's missing?",
    options: [
      { label: 'No depth', next: null, rootCause: { id: 'emotional_isolation', label: 'Emotional isolation (people around but no depth)', agency: 'HIGH', inControl: 'Seeking or creating depth', notInControl: null } },
      { label: 'Performing instead of authentic', next: null, rootCause: { id: 'performing_not_authentic', label: 'Performing instead of being authentic', agency: 'HIGH', inControl: 'Practicing authenticity in safe contexts', notInControl: 'Finding those contexts' } },
      { label: 'Marginalized identity', next: null, rootCause: { id: 'marginalized_loneliness', label: 'Marginalized identity lacking local community', agency: 'PARTIAL', inControl: 'Online communities, targeted groups', notInControl: 'Geographic and social reality' } }
    ]
  },

  'loneliness_lifestage': {
    id: 'loneliness_lifestage',
    question: 'What changed?',
    options: [
      { label: 'New parent', next: null, rootCause: { id: 'new_parent_isolation', label: 'New parent isolation', agency: 'PARTIAL', inControl: 'Connecting with other parents', notInControl: 'The demands are real and temporary' } },
      { label: 'Retirement', next: null, rootCause: { id: 'retirement_isolation', label: 'Retirement isolation', agency: 'HIGH', inControl: 'Building post-work social life', notInControl: null } },
      { label: 'Empty nest', next: null, rootCause: { id: 'empty_nest_loneliness', label: 'Empty nest loneliness', agency: 'HIGH', inControl: 'Rebuilding identity and social life', notInControl: null } },
      { label: 'Relocation', next: null, rootCause: { id: 'relocation_loneliness', label: 'Relocation loneliness', agency: 'PARTIAL', inControl: 'Building new community takes time', notInControl: "It's genuinely slow" } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: BOUNDARIES AND RECIPROCITY
  // ════════════════════════════════════════════════
  'boundaries_issue': {
    id: 'boundaries_issue',
    question: "What's the issue?",
    options: [
      { label: "Can't say no", next: 'boundaries_cant_say_no', rootCause: null },
      { label: 'Always the helper', next: null, rootCause: { id: 'caretaker_identity', label: 'Caretaker identity (worth = being needed)', agency: 'HIGH', inControl: 'Identity can be rebuilt on different foundations', notInControl: null } },
      { label: 'Walls instead of boundaries', next: 'boundaries_walls', rootCause: null },
      { label: 'Unspoken expectations', next: null, rootCause: { id: 'unspoken_expectations', label: 'Unspoken expectations', agency: 'HIGH', inControl: 'Asking directly for what you need', notInControl: null } },
      { label: "Can't ask for help", next: 'boundaries_ask_help', rootCause: null },
      { label: 'Someone violates boundaries', next: 'boundaries_violations', rootCause: null }
    ]
  },

  'boundaries_cant_say_no': {
    id: 'boundaries_cant_say_no',
    question: "What's behind it?",
    options: [
      { label: 'People-pleasing', next: null, rootCause: { id: 'people_pleasing', label: 'People-pleasing pattern', agency: 'HIGH', inControl: 'Saying no is a learnable skill', notInControl: null } },
      { label: 'Fear of abandonment', next: null, rootCause: { id: 'fear_of_abandonment_compliance', label: 'Fear of abandonment driving over-compliance', agency: 'PARTIAL', inControl: 'Attachment work helps', notInControl: 'The fear is deep' } },
      { label: 'Codependency', next: null, rootCause: { id: 'codependency_boundary', label: 'Codependency', agency: 'PARTIAL', inControl: 'Your part is addressable', notInControl: null } }
    ]
  },

  'boundaries_walls': {
    id: 'boundaries_walls',
    question: "What's behind the walls?",
    options: [
      { label: 'Avoidant attachment', next: null, rootCause: { id: 'avoidant_attachment_walls', label: 'Avoidant attachment (walls masking as boundaries)', agency: 'PARTIAL', inControl: 'Gradual vulnerability is possible', notInControl: 'The pattern is protective for a reason' } },
      { label: 'Trust issues', next: null, rootCause: { id: 'trust_issues_closeness', label: 'Trust issues preventing closeness', agency: 'PARTIAL', inControl: 'Trust rebuilds slowly with safe people', notInControl: 'The past that broke trust' } }
    ]
  },

  'boundaries_ask_help': {
    id: 'boundaries_ask_help',
    question: 'What stops you?',
    options: [
      { label: 'Self-sufficiency as identity', next: null, rootCause: { id: 'self_sufficiency_identity', label: 'Self-sufficiency as identity', agency: 'HIGH', inControl: 'Needing people is human, not weakness', notInControl: null } },
      { label: 'Vulnerability shame', next: null, rootCause: { id: 'vulnerability_shame', label: 'Vulnerability shame', agency: 'PARTIAL', inControl: 'Addressable; often linked to early experience', notInControl: null } }
    ]
  },

  'boundaries_violations': {
    id: 'boundaries_violations',
    question: "What's happening?",
    options: [
      { label: 'They keep pushing', next: null, rootCause: { id: 'boundary_violations_person', label: 'Boundary violations by specific person', agency: 'PARTIAL', inControl: 'Your response is in your control', notInControl: 'Their behavior may not change' } },
      { label: 'Setting boundaries causes guilt', next: null, rootCause: { id: 'boundary_guilt', label: 'Boundary-setting causing guilt or conflict', agency: 'PARTIAL', inControl: 'The guilt often fades with practice', notInControl: 'Others may push back' } },
      { label: "Don't know what healthy looks like", next: null, rootCause: { id: 'dont_know_healthy_boundaries', label: "Don't know what healthy boundaries look like", agency: 'HIGH', inControl: 'Learnable', notInControl: null } },
      { label: 'Cultural expectation against boundaries', next: null, rootCause: { id: 'cultural_against_boundaries', label: 'Cultural expectation against boundary-setting', agency: 'PARTIAL', inControl: 'Finding your own line', notInControl: 'Cultural pressure is real' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: COMMUNITY / BELONGING
  // ════════════════════════════════════════════════
  'community_issue': {
    id: 'community_issue',
    question: "What's the issue?",
    options: [
      { label: 'No community at all', next: null, rootCause: { id: 'never_had_community', label: 'Never had community', agency: 'HIGH', inControl: 'Buildable through interest-based groups', notInControl: null } },
      { label: "Don't feel I belong", next: 'community_belong', rootCause: null },
      { label: 'Lost previous community', next: null, rootCause: { id: 'lost_community', label: 'Lost community', agency: 'PARTIAL', inControl: 'Rebuilding takes time', notInControl: 'The loss is real' } },
      { label: 'Too busy', next: null, rootCause: { id: 'time_scarcity_community', label: 'Time scarcity', agency: 'PARTIAL', inControl: 'Even minimal engagement counts', notInControl: 'Real demands' } },
      { label: "Don't know how to find community", next: null, rootCause: { id: 'dont_know_find_community', label: "Don't know how to find community", agency: 'HIGH', inControl: 'Follow interests; consistency is key', notInControl: null } },
      { label: 'Content without formal community', next: null, rootCause: { id: 'content_no_community', label: 'Content without formal community', agency: 'N/A', inControl: 'Not a problem if fulfilled', notInControl: null } }
    ]
  },

  'community_belong': {
    id: 'community_belong',
    question: "Why don't you feel you belong?",
    options: [
      { label: 'Values mismatch', next: null, rootCause: { id: 'values_mismatch_community', label: 'Values mismatch with available communities', agency: 'PARTIAL', inControl: 'May need to search wider or create something', notInControl: null } },
      { label: 'Marginalized identity', next: null, rootCause: { id: 'marginalized_community', label: 'Marginalized identity lacking local acceptance', agency: 'PARTIAL', inControl: 'Online and distant communities exist', notInControl: 'Geographic and social reality' } },
      { label: 'Digital replacing in-person', next: null, rootCause: { id: 'digital_hollow', label: 'Digital community replacing in-person (hollow)', agency: 'PARTIAL', inControl: 'Adding in-person connection', notInControl: 'Online connection has limits' } },
      { label: 'Lost to political division', next: null, rootCause: { id: 'community_political_division', label: 'Community lost to political or social division', agency: 'PARTIAL', inControl: 'Finding new aligned community', notInControl: 'The division may be real and painful' } }
    ]
  },

  // ════════════════════════════════════════════════
  //  BRANCH: CONFLICT WITH SPECIFIC PERSON
  // ════════════════════════════════════════════════
  'conflict_who': {
    id: 'conflict_who',
    question: 'Who is the conflict with?',
    options: [
      { label: 'Partner', next: 'conflict_partner', rootCause: null },
      { label: 'Family member', next: 'conflict_family', rootCause: null },
      { label: 'Friend', next: 'conflict_friend', rootCause: null },
      { label: 'Coworker or boss', next: 'conflict_work', rootCause: null },
      { label: 'Neighbor', next: null, rootCause: { id: 'neighbor_conflict', label: 'Neighbor or unavoidable proximity conflict', agency: 'PARTIAL', inControl: 'Your approach; legal options if needed', notInControl: 'You share space' } }
    ]
  },

  'conflict_partner': {
    id: 'conflict_partner',
    question: "What's the nature of the conflict?",
    options: [
      { label: 'Communication mismatch', next: null, rootCause: { id: 'communication_mismatch', label: 'Communication mismatch', agency: 'HIGH', inControl: 'Your communication style', notInControl: "The other person's" } },
      { label: 'Unaddressed grievance', next: null, rootCause: { id: 'unaddressed_grievance', label: 'Unaddressed grievance', agency: 'HIGH', inControl: 'Raising it is in your control', notInControl: 'Their response' } },
      { label: 'Values clash', next: null, rootCause: { id: 'values_clash_conflict', label: 'Values clash', agency: 'LOW', inControl: 'Your values; your boundaries', notInControl: 'Theirs' } }
    ]
  },

  'conflict_family': {
    id: 'conflict_family',
    question: "What's happening?",
    options: [
      { label: 'Narcissistic or toxic person', next: null, rootCause: { id: 'toxic_person_conflict', label: 'Narcissistic or toxic person', agency: 'PARTIAL', inControl: 'Your boundaries; your contact level', notInControl: 'Their behavior' } },
      { label: 'I contributed to it', next: null, rootCause: { id: 'you_contributed', label: 'You contributed to the conflict', agency: 'HIGH', inControl: 'Owning your part', notInControl: 'Whether they own theirs' } },
      { label: 'Misunderstanding', next: null, rootCause: { id: 'misunderstanding', label: 'Misunderstanding (neither party is wrong)', agency: 'HIGH', inControl: 'Clarifying', notInControl: null } }
    ]
  },

  'conflict_friend': {
    id: 'conflict_friend',
    question: "What's happening?",
    options: [
      { label: 'Toxic or one-sided', next: null, rootCause: { id: 'toxic_friend_conflict', label: 'Narcissistic or toxic person', agency: 'PARTIAL', inControl: 'Your boundaries; your contact level', notInControl: 'Their behavior' } },
      { label: 'I contributed', next: null, rootCause: { id: 'you_contributed_friend', label: 'You contributed to the conflict', agency: 'HIGH', inControl: 'Owning your part', notInControl: 'Whether they own theirs' } },
      { label: 'Misunderstanding', next: null, rootCause: { id: 'misunderstanding_friend', label: 'Misunderstanding', agency: 'HIGH', inControl: 'Clarifying', notInControl: null } }
    ]
  },

  'conflict_work': {
    id: 'conflict_work',
    question: "What's the situation?",
    options: [
      { label: 'Power imbalance (boss)', next: null, rootCause: { id: 'power_imbalance_work', label: 'Power imbalance (boss, authority figure)', agency: 'PARTIAL', inControl: 'How you navigate it; whether you stay', notInControl: 'The power structure' } },
      { label: 'Ongoing workplace conflict', next: null, rootCause: { id: 'ongoing_workplace_conflict', label: 'Ongoing workplace conflict', agency: 'PARTIAL', inControl: 'Your approach; whether you escalate or leave', notInControl: 'The work environment' } }
    ]
  }

};
