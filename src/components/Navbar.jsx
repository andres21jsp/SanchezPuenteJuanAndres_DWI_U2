import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handlescroll = () => {

            setScrolled(window.scrollY > 100)
        }


        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);
    return (
        <nav className={`navbar navbar-expand-md fixed-top navbar-light ${scrolled ? 'nav-abajo' : ''}`} data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link mx-5
                           " href="#Sobrenosotros">Sobre Nosotros</a>
                        <a className="nav-link mx-5
                           " href="#">Que es TechFactory</a>
                        <a className='nav-link mx-5' href='#download'>Descargar</a>
                        <a className="nav-link mx-5" href="#">Instrucciones de uso</a>
                    </div>
                </div>
            </div>
        </nav>


    )
}
