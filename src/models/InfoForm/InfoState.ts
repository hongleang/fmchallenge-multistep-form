export type FormData = {
    name: string;
    email: string;
    phone: string;
    formErrors: FormErrors
}

export type FormErrors = {
    nameError: string;
    phoneError: string;
    emailError: string;
}

export type InfoRootState = {
    info: {
        name: string;
        phone: string;
        email: string;
        formErrors: FormErrors
    };
}

export type UpdateState = {
    name?: string;
    phone?: string;
    email?: string;
    formErrors: FormErrors
}