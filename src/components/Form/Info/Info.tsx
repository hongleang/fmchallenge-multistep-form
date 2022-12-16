import { FormErrors } from '../../../models/InfoForm/InfoState';
import { useForm } from './hooks/useForms';
import NavigationButtons from '../NavigationButtons/NavigationButtons'

import './Info.css';

export default function Info() {

    const { formData, handleSubmit, handleChange } = useForm();
    const { name, email, phone, formErrors } = formData;

    const errors: FormErrors = formErrors;

    const { nameError, emailError, phoneError } = errors

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Vannessa" value={name} onChange={handleChange} />
                    {nameError && <div className="text-danger">
                        {nameError}
                    </div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="vannessa@gmail.com" value={email} onChange={handleChange} />
                    {emailError && <div className="text-danger">
                        {emailError}
                    </div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone number</label>
                    <input type="text" className="form-control" id="phone" placeholder="eg + 3 457 465 414" value={phone} onChange={handleChange} />
                    {phoneError && <div className="text-danger">
                        {phoneError}
                    </div>}
                </div>
                <NavigationButtons />
            </form>

        </>
    )
}
