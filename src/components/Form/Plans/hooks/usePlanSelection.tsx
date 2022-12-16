import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlanTypeState, PlansRootState } from "../../../../models/planSelectionForm/PlanState";
import { updatePlans, updatePlanType } from "../../../../store/features/forms/plansSelectionReducer";


export function usePlanSelection() {
    const state = useSelector((state: PlansRootState) => state.plans);
    const { planType: type, selectedPlan } = state;

    const dispatch = useDispatch();

    const [planType, setPlanType] = useState<PlanTypeState>(type);
    const [planSelection, setPlanSelection] = useState<String>(selectedPlan)

    function handleSelection(selection: string) {
        setPlanSelection(selection)
    }

    function isPlanSelected(selection: string) {
        return planSelection === selection;
    }

    function handlePlanChange(e: any) {
        e.target.checked ? setPlanType('yearly') : setPlanType('monthly');
    }

    function saveChange() {
        dispatch(updatePlans(planSelection));
        dispatch(updatePlanType(planType))
    }

    const activeClass = (selection: string) => isPlanSelected(selection) ? 'active-selection' : '';

    const noPlanSelected = planSelection === '';

    return { handlePlanChange, handleSelection, activeClass, planType, saveChange, noPlanSelected };

}