export type PlanTypeState = 'monthly' | 'yearly';

export type PlansState = {
    selectedPlan: string,
    planType: PlanTypeState
}

export type PlansRootState = {
    plans: PlansState
}

