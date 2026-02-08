export const financialStart = 'financial_start';

export const financialTree = {

  // ============================================================
  //  LAYER 3 — Sub-dimension selector
  // ============================================================
  'financial_start': {
    id: 'financial_start',
    question: "Let's narrow down the financial issue. Which is the biggest problem?",
    options: [
      { label: 'Income (not enough coming in)', next: 'income_issue', rootCause: null },
      { label: 'Spending (money disappears)', next: 'spending_pattern', rootCause: null },
      { label: 'Debt (carrying too much)', next: 'debt_kind', rootCause: null },
      { label: 'No savings or safety net', next: 'savings_why', rootCause: null },
      { label: 'Financial anxiety or avoidance (the emotional side of money)', next: 'anxiety_pattern', rootCause: null },
      { label: 'Financial literacy gap (don\'t understand money)', next: 'literacy_gap', rootCause: null },
      { label: 'Financial entanglement with another person', next: 'entanglement_situation', rootCause: null }
    ]
  },

  // ============================================================
  //  BRANCH: Income Problems
  // ============================================================
  'income_issue': {
    id: 'income_issue',
    question: "What's the income issue?",
    options: [
      { label: 'Income doesn\'t cover basic needs', next: 'income_gap_driver', rootCause: null },
      { label: 'Income is unstable or unpredictable', next: null, rootCause: { id: 'rc_gig_volatility', label: 'Gig/freelance income volatility', agency: 'PARTIAL', inControl: 'Building buffer, diversifying income', notInControl: 'The structural instability of gig work' } },
      { label: 'Income could be higher but isn\'t', next: 'income_could_be_higher', rootCause: null },
      { label: 'Income is adequate but doesn\'t feel like enough', next: null, rootCause: { id: 'rc_lifestyle_inflation_income', label: 'Income adequate but lifestyle has inflated to match', agency: 'HIGH', inControl: 'This is a spending problem, not an income problem', notInControl: null } },
      { label: 'Lost an income source', next: 'income_lost', rootCause: null },
      { label: 'Retirement income insufficient', next: null, rootCause: { id: 'rc_retirement_income_gap', label: 'Retirement income gap', agency: 'PARTIAL', inControl: 'Some adjustments possible', notInControl: 'Past saving decisions can\'t be undone' } }
    ]
  },

  // --- Income doesn't cover basic needs ---
  'income_gap_driver': {
    id: 'income_gap_driver',
    question: "What's driving the gap between income and basic needs?",
    options: [
      { label: 'Wages are too low for cost of living', next: null, rootCause: { id: 'rc_structural_poverty', label: 'Structural poverty', agency: 'LOW', inControl: 'Accessing available resources', notInControl: 'Systemic economic factors' } },
      { label: 'Skills exceed my current role', next: null, rootCause: { id: 'rc_underemployment', label: 'Underemployment', agency: 'PARTIAL', inControl: 'Job searching, skill positioning', notInControl: 'Job market conditions' } },
      { label: 'Disability limits work', next: null, rootCause: { id: 'rc_disability_limiting_work', label: 'Disability limiting work capacity', agency: 'LOW', inControl: 'Accommodations, modified work', notInControl: 'The disability itself' } },
      { label: 'Caregiving limits hours', next: null, rootCause: { id: 'rc_caregiving_limiting_hours', label: 'Caregiving limiting work hours', agency: 'PARTIAL', inControl: 'Childcare or eldercare support may help', notInControl: 'The caregiving need and cost of solutions' } },
      { label: 'Discrimination or pay inequity', next: null, rootCause: { id: 'rc_discrimination_pay', label: 'Discrimination or pay inequity', agency: 'LOW', inControl: 'Negotiation, documentation', notInControl: 'Systemic bias is real' } },
      { label: 'Immigration status limits work', next: null, rootCause: { id: 'rc_immigration_work', label: 'Immigration status limiting legal work', agency: 'LOW', inControl: 'Available pathways, if any', notInControl: 'Immigration policy is systemic' } },
      { label: 'Criminal record limits employment', next: null, rootCause: { id: 'rc_criminal_record', label: 'Criminal record limiting employment', agency: 'LOW', inControl: 'Expungement if eligible; employers who hire', notInControl: 'The record and societal bias' } },
      { label: 'Education gap', next: null, rootCause: { id: 'rc_education_gap', label: 'Education gap limiting advancement', agency: 'PARTIAL', inControl: 'Education and training are possible', notInControl: 'Time, cost, and access barriers' } }
    ]
  },

  // --- Income could be higher ---
  'income_could_be_higher': {
    id: 'income_could_be_higher',
    question: "What\'s keeping your income from being higher?",
    options: [
      { label: 'Topped out in current path', next: null, rootCause: { id: 'rc_career_plateau', label: 'Career plateau', agency: 'PARTIAL', inControl: 'Pivoting, additional skills, lateral moves', notInControl: 'Market realities' } },
      { label: 'Geographic constraint', next: null, rootCause: { id: 'rc_geographic_constraint', label: 'Geographic income constraint', agency: 'PARTIAL', inControl: 'Remote work, eventual relocation', notInControl: 'Moving costs money' } },
      { label: 'Age discrimination', next: null, rootCause: { id: 'rc_age_discrimination', label: 'Age discrimination in hiring', agency: 'LOW', inControl: 'Targeting age-friendly employers', notInControl: 'Systemic ageism is real' } }
    ]
  },

  // --- Lost income source ---
  'income_lost': {
    id: 'income_lost',
    question: "What caused the income loss?",
    options: [
      { label: 'Job loss', next: null, rootCause: { id: 'rc_job_loss', label: 'Job loss (recent)', agency: 'PARTIAL', inControl: 'Job searching is in your control', notInControl: 'The market, timing, and luck are not' } },
      { label: 'Divorce', next: null, rootCause: { id: 'rc_divorce_income_loss', label: 'Divorce-related income loss', agency: 'PARTIAL', inControl: 'Rebuilding financial independence', notInControl: 'The loss itself and legal/custody constraints' } },
      { label: 'Disability onset', next: null, rootCause: { id: 'rc_disability_onset', label: 'Disability onset reducing earning', agency: 'LOW', inControl: 'Adaptation, benefits, modified work', notInControl: 'The disability' } }
    ]
  },

  // ============================================================
  //  BRANCH: Spending Problems
  // ============================================================
  'spending_pattern': {
    id: 'spending_pattern',
    question: "What's the spending pattern?",
    options: [
      { label: 'Spending exceeds income', next: null, rootCause: { id: 'rc_lifestyle_inflation', label: 'Lifestyle inflation', agency: 'HIGH', inControl: 'Awareness and adjustment', notInControl: null } },
      { label: 'Impulsive purchases', next: 'spending_impulse_driver', rootCause: null },
      { label: 'Don\'t know where money goes', next: null, rootCause: { id: 'rc_no_budget', label: 'No budget or tracking', agency: 'HIGH', inControl: 'Tracking is a learnable skill', notInControl: null } },
      { label: 'Spending when stressed, sad, or bored', next: null, rootCause: { id: 'rc_emotional_spending_direct', label: 'Emotional/stress spending', agency: 'HIGH', inControl: 'The spending and the stress source', notInControl: null } },
      { label: 'Essential costs too high', next: 'spending_essential_costs', rootCause: null },
      { label: 'Spending to keep up appearances', next: null, rootCause: { id: 'rc_comparison_spending_appearances', label: 'Comparison spending', agency: 'PARTIAL', inControl: 'The comparison is stoppable', notInControl: 'Social environment triggers it' } },
      { label: 'Generosity that\'s financially unsustainable', next: null, rootCause: { id: 'rc_generosity_beyond_means', label: 'Generosity beyond means', agency: 'HIGH', inControl: 'Boundaries around giving are settable', notInControl: 'Guilt and people-pleasing may resist' } },
      { label: 'Subscription and recurring cost creep', next: null, rootCause: { id: 'rc_subscription_creep', label: 'Subscription and recurring cost creep', agency: 'HIGH', inControl: 'Auditing and canceling', notInControl: null } },
      { label: 'Partner\'s spending you can\'t control', next: null, rootCause: { id: 'rc_partner_spending', label: 'Partner\'s spending you can\'t control', agency: 'PARTIAL', inControl: 'Communication, financial boundaries', notInControl: 'You can\'t control another person' } },
      { label: 'Addiction-related spending', next: null, rootCause: { id: 'rc_addiction_spending', label: 'Addiction-related spending', agency: 'PARTIAL', inControl: 'The addiction is addressable', notInControl: null } }
    ]
  },

  // --- Impulsive purchases follow-up ---
  'spending_impulse_driver': {
    id: 'spending_impulse_driver',
    question: "What drives the impulse to spend?",
    options: [
      { label: 'Stress or emotions', next: null, rootCause: { id: 'rc_emotional_spending', label: 'Emotional/stress spending', agency: 'HIGH', inControl: 'The spending and the stress source', notInControl: null } },
      { label: 'ADHD', next: null, rootCause: { id: 'rc_adhd_spending', label: 'ADHD impulse spending', agency: 'PARTIAL', inControl: 'Systems and structures help', notInControl: 'ADHD is persistent' } },
      { label: 'Keeping up with peers', next: null, rootCause: { id: 'rc_comparison_spending', label: 'Comparison spending', agency: 'HIGH', inControl: 'The comparison is stoppable', notInControl: 'Social environment triggers it' } },
      { label: 'Spending as identity', next: null, rootCause: { id: 'rc_spending_identity', label: 'Spending as identity expression', agency: 'PARTIAL', inControl: 'Identity can be decoupled from spending', notInControl: 'The identity piece runs deep' } },
      { label: 'Shopping is my only pleasure', next: null, rootCause: { id: 'rc_retail_therapy', label: 'Retail therapy as primary pleasure', agency: 'PARTIAL', inControl: 'Finding other pleasure sources', notInControl: 'If other sources are genuinely limited' } }
    ]
  },

  // --- Essential costs too high ---
  'spending_essential_costs': {
    id: 'spending_essential_costs',
    question: "Which essential cost is the main burden?",
    options: [
      { label: 'Housing', next: null, rootCause: { id: 'rc_high_fixed_costs', label: 'High fixed costs (housing, childcare, medical)', agency: 'LOW', inControl: 'Limited adjustment possible', notInControl: 'These markets are structural' } },
      { label: 'Medical', next: null, rootCause: { id: 'rc_medical_spending', label: 'Medical spending (chronic condition)', agency: 'LOW', inControl: 'Optimizing within the system', notInControl: 'Healthcare costs are structural' } },
      { label: 'Children', next: null, rootCause: { id: 'rc_children_costs', label: 'Children\'s costs exceeding plans', agency: 'PARTIAL', inControl: 'Some adjustments possible', notInControl: 'Children\'s needs are real' } }
    ]
  },

  // ============================================================
  //  BRANCH: Debt
  // ============================================================
  'debt_kind': {
    id: 'debt_kind',
    question: "What kind of debt is the primary burden?",
    options: [
      { label: 'Medical debt', next: null, rootCause: { id: 'rc_medical_debt', label: 'Medical debt', agency: 'LOW', inControl: 'Negotiation, payment plans', notInControl: 'Medical costs are systemic' } },
      { label: 'Student loan debt', next: null, rootCause: { id: 'rc_student_loans', label: 'Student loans', agency: 'LOW', inControl: 'Repayment programs, forgiveness pathways', notInControl: 'The education-income mismatch is structural' } },
      { label: 'Credit card debt (lifestyle spending)', next: null, rootCause: { id: 'rc_cc_lifestyle', label: 'Credit card debt from lifestyle spending', agency: 'HIGH', inControl: 'Stopping the spending; payoff strategy', notInControl: null } },
      { label: 'Credit card debt (supplementing insufficient income)', next: null, rootCause: { id: 'rc_cc_low_income', label: 'Credit card debt supplementing low income', agency: 'LOW', inControl: 'This is an income problem wearing a debt costume', notInControl: 'The income gap' } },
      { label: 'Mortgage or housing debt stress', next: null, rootCause: { id: 'rc_mortgage_stress', label: 'Mortgage stress', agency: 'PARTIAL', inControl: 'Refinancing, downsizing possible', notInControl: 'Housing market, equity position' } },
      { label: 'Payday loans or predatory lending', next: null, rootCause: { id: 'rc_payday_loans', label: 'Payday loan cycle', agency: 'LOW', inControl: 'Financial counseling may help', notInControl: 'Predatory lending is designed to trap' } },
      { label: 'Debt from someone else\'s actions', next: 'debt_someone_else', rootCause: null },
      { label: 'Business debt', next: null, rootCause: { id: 'rc_business_debt', label: 'Business debt from failed venture', agency: 'PARTIAL', inControl: 'Restructuring, bankruptcy if needed', notInControl: 'The failure can\'t be undone' } },
      { label: 'Tax debt', next: null, rootCause: { id: 'rc_tax_debt', label: 'Tax debt', agency: 'PARTIAL', inControl: 'Payment plans, professional help', notInControl: 'Penalties and interest compound' } },
      { label: 'Debt shame spiral (avoiding dealing with debt)', next: null, rootCause: { id: 'rc_debt_shame', label: 'Debt shame spiral', agency: 'HIGH', inControl: 'Facing the numbers is in your control', notInControl: 'The shame makes it hard' } }
    ]
  },

  // --- Debt from someone else ---
  'debt_someone_else': {
    id: 'debt_someone_else',
    question: "How did someone else\'s actions create this debt?",
    options: [
      { label: 'Partner\'s debt is now shared', next: null, rootCause: { id: 'rc_partner_debt', label: 'Partner\'s debt now shared', agency: 'PARTIAL', inControl: 'Communication, financial boundaries, legal advice', notInControl: 'You can\'t undo their past decisions' } },
      { label: 'Family obligations', next: null, rootCause: { id: 'rc_family_obligations', label: 'Family financial obligations', agency: 'PARTIAL', inControl: 'Boundaries are settable', notInControl: 'Cultural and family pressure is real' } },
      { label: 'Fraud or identity theft', next: null, rootCause: { id: 'rc_fraud_debt', label: 'Fraud or identity theft debt', agency: 'PARTIAL', inControl: 'Disputing, legal channels', notInControl: 'The violation already happened' } }
    ]
  },

  // ============================================================
  //  BRANCH: No Savings / Safety Net
  // ============================================================
  'savings_why': {
    id: 'savings_why',
    question: "Why is there no savings or safety net?",
    options: [
      { label: 'Income too low after essentials', next: null, rootCause: { id: 'rc_income_insufficient_savings', label: 'Income insufficient after essentials', agency: 'LOW', inControl: 'Very limited', notInControl: 'This is structural, not a character flaw' } },
      { label: 'Spending consumes everything', next: null, rootCause: { id: 'rc_lifestyle_preventing_savings', label: 'Lifestyle preventing savings', agency: 'HIGH', inControl: 'Spending adjustment enables saving', notInControl: null } },
      { label: 'Never automated or prioritized saving', next: null, rootCause: { id: 'rc_lack_automation', label: 'Lack of automation', agency: 'HIGH', inControl: 'Setting up automatic saving', notInControl: null } },
      { label: 'Avoiding thinking about the future', next: null, rootCause: { id: 'rc_financial_avoidance_savings', label: 'Financial avoidance', agency: 'HIGH', inControl: 'Looking is the first step', notInControl: 'Shame and fear make it hard' } },
      { label: 'Debt payments prevent saving', next: null, rootCause: { id: 'rc_debt_consuming_savings', label: 'Debt payments consuming saving capacity', agency: 'PARTIAL', inControl: 'Balancing debt payoff with small emergency fund', notInControl: 'The debt itself' } },
      { label: 'Emergency wiped out savings', next: null, rootCause: { id: 'rc_emergency_depleted', label: 'Emergency depleted savings', agency: 'PARTIAL', inControl: 'Rebuilding is possible', notInControl: 'The emergency can\'t be undone' } },
      { label: 'Cultural or family expectation to share all income', next: null, rootCause: { id: 'rc_cultural_share_income', label: 'Cultural obligation to share income', agency: 'PARTIAL', inControl: 'Boundaries may be possible', notInControl: 'Cultural and family expectations are real' } },
      { label: 'Wishful thinking ("I\'ll save when I earn more")', next: null, rootCause: { id: 'rc_wishful_thinking_saving', label: 'Wishful thinking ("I\'ll save when I earn more")', agency: 'HIGH', inControl: 'Percentage-based saving works at any income', notInControl: null } },
      { label: 'Inconsistent income makes saving feel impossible', next: null, rootCause: { id: 'rc_inconsistent_income_saving', label: 'Inconsistent income making saving feel impossible', agency: 'PARTIAL', inControl: 'Saving on good months, buffering', notInControl: 'Income volatility' } },
      { label: 'Saving feels pointless given scale of problems', next: null, rootCause: { id: 'rc_saving_feels_pointless', label: 'Saving feels pointless given scale of problems', agency: 'PARTIAL', inControl: 'Even small amounts change psychology', notInControl: 'The scale of the problem is real' } }
    ]
  },

  // ============================================================
  //  BRANCH: Financial Anxiety / Avoidance
  // ============================================================
  'anxiety_pattern': {
    id: 'anxiety_pattern',
    question: "What's the pattern with your financial anxiety or avoidance?",
    options: [
      { label: 'Constant money worry (even when objectively okay)', next: 'anxiety_constant_worry', rootCause: null },
      { label: 'Won\'t open mail, check accounts', next: 'anxiety_avoidance', rootCause: null },
      { label: 'Deep shame about financial situation', next: null, rootCause: { id: 'rc_money_worth_conflation', label: 'Money = worth conflation', agency: 'HIGH', inControl: 'Worth and net worth are separable', notInControl: null } },
      { label: 'Beliefs about money from childhood', next: 'anxiety_childhood_beliefs', rootCause: null },
      { label: 'Money fights with partner', next: 'anxiety_money_fights', rootCause: null },
      { label: 'Feeling financially trapped', next: null, rootCause: { id: 'rc_golden_handcuffs', label: 'Feeling trapped (golden handcuffs)', agency: 'PARTIAL', inControl: 'Examining whether the trap is as fixed as it feels', notInControl: 'Some constraints are real' } }
    ]
  },

  // --- Constant money worry ---
  'anxiety_constant_worry': {
    id: 'anxiety_constant_worry',
    question: "What's behind the constant worry about money?",
    options: [
      { label: 'Grew up poor', next: null, rootCause: { id: 'rc_childhood_poverty_trauma', label: 'Childhood poverty trauma (scarcity mindset persists)', agency: 'PARTIAL', inControl: 'The mindset is addressable', notInControl: 'The childhood experience can\'t be changed' } },
      { label: 'Objectively fine but still worry', next: null, rootCause: { id: 'rc_scarcity_mindset', label: 'Scarcity mindset despite actual adequacy', agency: 'PARTIAL', inControl: 'Reality-checking your financial position', notInControl: 'The childhood experience can shape persistent patterns' } },
      { label: 'Comparing to peers', next: null, rootCause: { id: 'rc_financial_comparison', label: 'Financial comparison to peers', agency: 'HIGH', inControl: 'The comparison is the problem', notInControl: null } },
      { label: 'Retirement fears', next: null, rootCause: { id: 'rc_retirement_anxiety', label: 'Retirement anxiety', agency: 'PARTIAL', inControl: 'Planning helps; some worry is realistic', notInControl: 'Can\'t undo past decisions' } }
    ]
  },

  // --- Won't open mail / check accounts ---
  'anxiety_avoidance': {
    id: 'anxiety_avoidance',
    question: "What keeps you from looking at your finances?",
    options: [
      { label: 'Shame', next: null, rootCause: { id: 'rc_avoidance_shame', label: 'Financial avoidance driven by shame', agency: 'PARTIAL', inControl: 'Gradual exposure to the numbers', notInControl: 'The shame needs attention too' } },
      { label: 'Overwhelm', next: null, rootCause: { id: 'rc_avoidance_overwhelm', label: 'Financial avoidance driven by overwhelm', agency: 'PARTIAL', inControl: 'Breaking it into one small step', notInControl: 'The overwhelm itself may have deeper roots' } }
    ]
  },

  // --- Childhood money beliefs ---
  'anxiety_childhood_beliefs': {
    id: 'anxiety_childhood_beliefs',
    question: "What beliefs about money did you absorb growing up?",
    options: [
      { label: 'Money is dirty or greedy', next: null, rootCause: { id: 'rc_anti_money_messaging', label: 'Anti-money messaging', agency: 'HIGH', inControl: 'Beliefs are examinable', notInControl: null } },
      { label: 'Family money patterns I\'m repeating', next: null, rootCause: { id: 'rc_inherited_money_patterns', label: 'Inherited family money patterns', agency: 'PARTIAL', inControl: 'Awareness helps; change is gradual', notInControl: 'Deeply ingrained' } },
      { label: 'Class transition discomfort', next: null, rootCause: { id: 'rc_class_transition', label: 'Class transition discomfort', agency: 'PARTIAL', inControl: 'Processing the identity shift', notInControl: 'The shift happened' } }
    ]
  },

  // --- Money fights with partner ---
  'anxiety_money_fights': {
    id: 'anxiety_money_fights',
    question: "Is the issue about values or control?",
    options: [
      { label: 'Different values or styles around money', next: null, rootCause: { id: 'rc_money_arguments', label: 'Money arguments with partner', agency: 'PARTIAL', inControl: 'Communication about money is learnable', notInControl: 'Your partner\'s money psychology' } },
      { label: 'Partner hiding spending', next: null, rootCause: { id: 'rc_financial_infidelity', label: 'Financial infidelity in relationship', agency: 'PARTIAL', inControl: 'Addressing it requires both people', notInControl: 'Your partner\'s behavior' } },
      { label: 'Partner controlling all the money', next: null, rootCause: { id: 'rc_financial_control_partner', label: 'Financial control by partner', agency: 'LOW', inControl: 'This may be financial abuse', notInControl: 'See crisis resources' } }
    ]
  },

  // ============================================================
  //  BRANCH: Financial Literacy Gap
  // ============================================================
  'literacy_gap': {
    id: 'literacy_gap',
    question: "What don't you understand or feel confident about with money?",
    options: [
      { label: 'Budgeting basics', next: null, rootCause: { id: 'rc_budgeting_gap', label: 'Budgeting skill gap', agency: 'HIGH', inControl: 'Simple frameworks exist', notInControl: null } },
      { label: 'Debt strategy (which to pay first, how)', next: null, rootCause: { id: 'rc_debt_strategy_confusion', label: 'Debt strategy confusion', agency: 'HIGH', inControl: 'Learnable; resources exist', notInControl: null } },
      { label: 'Investing and retirement', next: null, rootCause: { id: 'rc_investment_confusion', label: 'Investment/retirement confusion', agency: 'HIGH', inControl: 'Learnable; starting is the hardest part', notInControl: null } },
      { label: 'Taxes', next: null, rootCause: { id: 'rc_tax_confusion', label: 'Tax confusion or avoidance', agency: 'HIGH', inControl: 'Professional help is available', notInControl: 'Complexity of tax system' } },
      { label: 'Insurance, benefits, financial systems', next: null, rootCause: { id: 'rc_system_navigation_gap', label: 'Financial system navigation gap', agency: 'HIGH', inControl: 'Learnable, though the systems are intentionally complex', notInControl: 'The complexity is by design' } },
      { label: 'Never taught any of this', next: null, rootCause: { id: 'rc_never_taught', label: 'Never taught financial basics', agency: 'HIGH', inControl: 'Learnable at any age', notInControl: null } },
      { label: 'Shame about not knowing', next: null, rootCause: { id: 'rc_shame_not_knowing', label: 'Shame about not knowing', agency: 'HIGH', inControl: 'Not knowing is common; it wasn\'t taught', notInControl: null } },
      { label: 'Overwhelm at where to start', next: null, rootCause: { id: 'rc_overwhelm_start', label: 'Overwhelm at where to start', agency: 'HIGH', inControl: 'Start with one thing', notInControl: null } }
    ]
  },

  // ============================================================
  //  BRANCH: Financial Entanglement
  // ============================================================
  'entanglement_situation': {
    id: 'entanglement_situation',
    question: "What's the financial entanglement situation?",
    options: [
      { label: 'Financially dependent on partner', next: 'entanglement_dependence', rootCause: null },
      { label: 'Financially supporting a family member', next: null, rootCause: { id: 'rc_supporting_family', label: 'Supporting family member', agency: 'PARTIAL', inControl: 'Boundaries about how much', notInControl: 'Family expectations and genuine need' } },
      { label: 'Shared finances with someone irresponsible', next: null, rootCause: { id: 'rc_shared_irresponsible', label: 'Shared finances with irresponsible partner', agency: 'PARTIAL', inControl: 'Separating finances where possible', notInControl: 'Your partner\'s behavior' } },
      { label: 'Divorce or separation complicating finances', next: null, rootCause: { id: 'rc_divorce_complexity', label: 'Divorce financial complexity', agency: 'PARTIAL', inControl: 'Legal support, planning', notInControl: 'Legal system, other party\'s behavior' } },
      { label: 'Financially exploited by someone', next: null, rootCause: { id: 'rc_financial_exploitation', label: 'Financial exploitation', agency: 'LOW', inControl: 'Recognizing it is the first step', notInControl: 'The exploiter\'s behavior' } },
      { label: 'Co-signed or guarantor for someone else\'s debt', next: null, rootCause: { id: 'rc_cosigned_debt', label: 'Co-signed debt', agency: 'LOW', inControl: 'Legal options may exist', notInControl: 'You\'re legally liable' } },
      { label: 'Adult child financial dependence', next: null, rootCause: { id: 'rc_adult_child_dependence', label: 'Adult child financial dependence', agency: 'PARTIAL', inControl: 'Setting limits is possible', notInControl: 'The child\'s situation may be real' } },
      { label: 'Aging parent financial support', next: null, rootCause: { id: 'rc_aging_parent_support', label: 'Aging parent financial support', agency: 'PARTIAL', inControl: 'Sharing with siblings, setting limits', notInControl: 'The parent\'s need' } },
      { label: 'Inheritance conflict', next: null, rootCause: { id: 'rc_inheritance_conflict', label: 'Inheritance conflict', agency: 'PARTIAL', inControl: 'Legal counsel, boundaries', notInControl: 'Other family members\'s behavior' } }
    ]
  },

  // --- Financial dependence on partner ---
  'entanglement_dependence': {
    id: 'entanglement_dependence',
    question: "Is the financial dependence by circumstance or by control?",
    options: [
      { label: 'Circumstance (caregiving, health, etc.)', next: null, rootCause: { id: 'rc_dependence_circumstance', label: 'Financial dependence on partner (by circumstance)', agency: 'PARTIAL', inControl: 'Building financial independence where possible', notInControl: 'May be constrained by caregiving, health, or access' } },
      { label: 'Partner controls the money', next: null, rootCause: { id: 'rc_dependence_control', label: 'Financial dependence on partner (by control)', agency: 'LOW', inControl: 'This may be financial abuse', notInControl: 'The other person\'s behavior' } }
    ]
  }

};
