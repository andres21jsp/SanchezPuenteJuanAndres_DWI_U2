import React from 'react'

export default function AnchorFooter({ text, icono, enlace }) {
    return (
        <>
            <a className='nav-link d-inline fs-5 align-self-center' href={enlace}>
                <i className={`${icono} me-2 d-none d-md-inline`}></i>
                <i className={`${icono} mx-4 fs-1 d-md-none d-inline`}></i>
                <span className='d-md-inline d-none' >{text}</span>
            </a>
            <br className='d-md-inline d-none' />
        </>
    )
}
