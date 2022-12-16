import { AddOnsRootState } from "../addOnsForm/addOnsState";
import { InfoRootState } from "../InfoForm/InfoState";
import { PlansState } from "../planSelectionForm/PlanState";

export type RootState = {
    plans: PlansState,
    info: InfoRootState,
    addOns: AddOnsRootState,
}