import React from 'react'

import './FormContentLayout.css';

type Props = {
    children?: React.ReactNode;
    header: string;
    subheader?: string;
}

export default function FormsContentLayout({ children, header='', subheader ='' }: Props) {
    return (
        <div className="content-layout position-relative col-12 col-md-10 px-sm-0">
            <h2 className='text-marine-blue fw-normal'>{header}</h2>
            <p className="text-muted mb-5">
                {subheader}
            </p>
            {children}
        </div>
    )
}
