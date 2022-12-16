import React from 'react'

import './FormContentLayout.css';

type Props = {
    children?: React.ReactNode;
    header: string;
    subheader?: string;
}

export default function FormsContentLayout({ children, header='', subheader ='' }: Props) {
    return (
        <div className="content-layout position-relative col-12 col-md-10 px-0">
            <h3 className='text-marine-blue'>{header}</h3>
            <p className="text-muted mb-5">
                {subheader}
            </p>
            {children}
            
        </div>
    )
}
