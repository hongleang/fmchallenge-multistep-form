import { FormErrors } from '../../../models/InfoForm/InfoState';
import { useForm } from './hooks/useForms';
import NavigationButtons from '../NavigationButtons/NavigationButtons'

import './Info.css';

export default function Info() {

    const { formData, handleSubmit, handleChange } = useForm();
    const { name, email, phone, formErrors } = formData;

    const errors: FormErrors = formErrors;

    const { nameError, emailError, phoneError } = errors

    const errorInputClass = (errorMessage: string) => errorMessage.length > 0 ? "invalid" : ""


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <label htmlFor="name" className="form-label text-marine-blue fw-bold">Name</label>
                        {nameError && nameError.length > 0 && <span className="text-danger me-4">
                            {nameError}
                        </span>}
                    </div>
                    <input type="text" className={"form-control " + errorInputClass(nameError)} id="name" placeholder="Vannessa" value={name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <label htmlFor="email" className="form-label text-marine-blue fw-bold">Email address</label>
                        {emailError && emailError.length > 0 && <span className="text-danger me-4">
                            {emailError}
                        </span>}
                    </div>
                    <input type="email" className={"form-control " + errorInputClass(emailError)} id="email" placeholder="vannessa@gmail.com" value={email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <label htmlFor="phone" className="form-label text-marine-blue fw-bold">Phone number</label>
                        {phoneError && phoneError.length > 0 && <span className="text-danger me-4">
                            {phoneError}
                        </span>}
                    </div>
                    <input type="text" className={"form-control " + errorInputClass(phoneError)} id="phone" placeholder="eg + 3 457 465 414" value={phone} onChange={handleChange} />
                </div>
                <NavigationButtons />
            </form>

        </>
    )
}
