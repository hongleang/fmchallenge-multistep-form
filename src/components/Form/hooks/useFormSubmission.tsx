import { useNavigate } from "react-router-dom";

import steps from "../../../utils/step-naviation";

type State = {
    name: string;
    to: string | null;
    back: string | null;
    nextStep: string | null;
}

export function useFormSubmission(path: string, onSave?: () => void) {
    const navigate = useNavigate();

    const state: State | undefined = steps.find(step => step.name === path);

    function handleSubmit() {
        if (!state) return;
        if (state.to !== null) {
            if (onSave) { onSave(); }
            navigate(state.to, { state: { name: state.nextStep } })
        }
    }

    return { handleSubmit }
}