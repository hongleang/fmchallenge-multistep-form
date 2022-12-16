import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { update } from "../../../../store/features/forms/infoReducer";

import { FormData, InfoRootState } from "../../../../models/InfoForm/InfoState";

import steps from "../../../../utils/step-naviation";



export function useForm() {
    const info = useSelector((state: InfoRootState) => state.info);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<FormData>(info);

    const navigate = useNavigate();

    function generateFormError({ name, email, phone }: { name: string, email: string, phone: string }) {
        let errors = {};
        const obj = { name, email, phone };
        Object.entries(obj).forEach(([key, val]) => {
            if (val === '') {
                errors = {
                    ...errors,
                    [key]: 'This field is not valid'
                }
            }
        });
        return errors;
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormData({ ...formData, formErrors: {} });
        const { name, email, phone } = formData;
        const formErrors = generateFormError({ name, email, phone })

        setFormData({ ...formData, formErrors });
        if (Object.keys(formErrors).length === 0) {            
            dispatch(update(formData));
            handleNavigation()
        }
    }

    function handleNavigation() {
        const state: { name: string, to: string, back: string | null, nextStep: string | null } | undefined = steps.find(step => step.name === 'step-1');
        if (!state) return;

        if (state.to) {
            navigate(state.to, { state: { name: state.nextStep } }); // navigate to next step with location info
        }
        return;
    }


    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value
        });
    }

    return { formData, handleSubmit, handleChange }
}   