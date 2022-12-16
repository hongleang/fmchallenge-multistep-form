import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from './FormSideBar/Sidebar'

import './Form.css';

export default function Form() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/form') {
            navigate("/form/step-1");
        }
    }, [location, navigate])

    return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="form-container">
                <div className="form-wrapper row gx-5 justify-content-around rounded-3 bg-white p-sm-3 shadow ">
                    <Sidebar />
                    <div className="main-content col-sm-8 row justify-content-md-center">
                        <Outlet />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
