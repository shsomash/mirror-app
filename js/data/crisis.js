// Layer 0: Crisis Safety Screening

export const crisisQuestions = [
  {
    id: 'self-harm',
    text: 'Before we begin, I want to ask an important question:\n\nAre you currently having thoughts of harming yourself or ending your life?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: "I'd rather not answer", value: 'rather_not' }
    ]
  },
  {
    id: 'abuse',
    text: 'One more important question:\n\nAre you currently experiencing physical violence, sexual abuse, or serious emotional abuse?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
      { label: "I'm not sure", value: 'not_sure' }
    ]
  }
];
