import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { update } from "../../../../store/features/forms/infoReducer";

import { FormData, FormErrors, InfoRootState } from "../../../../models/InfoForm/InfoState";

import steps from "../../../../utils/step-naviation";



export function useForm() {
    const info = useSelector((state: InfoRootState) => state.info);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<FormData>(info);

    const navigate = useNavigate();

    function getErrorMessage(str: string) {
        return str.length > 0 ? "" : "This field is not valid."
    }

    function generateFormError({ name, email, phone }: { name: string, email: string, phone: string }): FormErrors {
        let errors: FormErrors = {
            nameError: getErrorMessage(name),
            emailError: getErrorMessage(email),
            phoneError: getErrorMessage(phone)
        };
        return errors;
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const { name, email, phone } = formData;
        const formErrors: FormErrors = generateFormError({ name, email, phone })
        setFormData({ ...formData, formErrors })
        const valid = (Object.keys(formErrors) as Array<keyof typeof formErrors>).every(key => {
            return formErrors[key] === "";
        });

        if (!valid) return;
        
        dispatch(update({
            ...formData, formErrors: {
                nameError: "",
                emailError: "",
                phoneError: ""
            }
        }));
        handleNavigation()
    }
    console.log({ info });


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