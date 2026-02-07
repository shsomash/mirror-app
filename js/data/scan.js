// Layer 1: Dimension Scan

export const dimensionScan = [
  {
    id: 'physical',
    label: 'Physical Well-Being',
    text: "Thinking about your body \u2014 sleep, energy, pain, movement \u2014 how are things?",
    strengths: [
      'Sleeping well',
      'Good energy most days',
      'Moving/exercising regularly',
      'Relatively pain-free or pain is well-managed',
      'Getting medical care when needed',
      'Comfortable in my body'
    ]
  },
  {
    id: 'emotional',
    label: 'Emotional Well-Being',
    text: "How about your inner world \u2014 mood, anxiety, stress, mental clarity?",
    strengths: [
      'Mood is generally stable',
      'Anxiety is manageable or minimal',
      'Can think clearly and focus',
      'Feel okay about myself most of the time',
      'Have healthy ways of handling stress',
      'Feel my emotions without being overwhelmed by them'
    ]
  },
  {
    id: 'financial',
    label: 'Financial Well-Being',
    text: "What about your financial situation?",
    strengths: [
      'Income covers my needs',
      'Spending is under control',
      'Have some savings or emergency cushion',
      'Debt is manageable or absent',
      "Don't worry about money much",
      'Understand where my money goes'
    ]
  },
  {
    id: 'connections',
    label: 'Connections',
    text: "How are your relationships \u2014 partner, family, friends, sense of belonging?",
    strengths: [
      'Have at least one deeply supportive relationship',
      'Partnership is healthy (if applicable)',
      "Family relationships are mostly positive or I've set healthy boundaries",
      'Have genuine friendships',
      'Feel connected, not isolated',
      'Can be myself around the people closest to me'
    ]
  },
  {
    id: 'identity',
    label: 'Identity & Meaning',
    text: "And your sense of self \u2014 do you generally know who you are and what matters to you?",
    strengths: [
      'Know who I am and feel authentic',
      'Have a sense of direction',
      'Living according to my values',
      'Growing and learning',
      'Life feels meaningful',
      'How I see myself roughly matches how others see me'
    ]
  }
];

export const scanOptions = [
  { label: 'Going well', value: 'strength' },
  { label: "Okay \u2014 not great, not terrible", value: 'neutral' },
  { label: 'Struggling', value: 'concern' }
];
