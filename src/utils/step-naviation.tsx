const steps = [
    { name: 'step-1', to: '/form/step-2', back: null, nextStep: 'step-2', previousStep: null },
    { name: 'step-2', to: '/form/step-3', back: '/form/step-1', nextStep: 'step-3', previousStep: 'step-1' },
    { name: 'step-3', to: '/form/step-4', back: '/form/step-2', nextStep: 'step-4', previousStep: 'step-2' },
    { name: 'step-4', to: '/form/thank-you', back: '/form/step-3', nextStep: 'thank-you', previousStep: 'step-3', finalStep: true },
]


export default steps;