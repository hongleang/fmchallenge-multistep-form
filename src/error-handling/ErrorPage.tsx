import React from 'react'
import { useRouteError } from "react-router-dom";

type ErrorElement = {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error: ErrorElement | unknown = useRouteError();
    console.log(error);

    return (
        <div id='error-page'>
            <h2>Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* <p>
                <i>{ error ? error.statusText || error.message : ''}</i>
            </p> */}
        </div>
    )
}
