import React from 'react'
import logoUtc from '../assets/LogoUtc.svg'
import AnchorFooter from './AnchorFooter'


export default function Footer() {
  return (
    <footer className='container-fluid p-5 mt-5'>
      <div className="row">
        <div className="col-md-4 col-12 align-self-center d-md-inline d-flex flex-column align-items-center">
          <h4 className='techFactory'>
            <span className='spanTech'>Tech</span>
            <span className='spanFactory'>Factory</span>
          </h4>
          <p className='text-light'>Desarrollo como proyecto escolar de la <br /><b>Universidad Tecnologica de Coahuila</b>. </p>

        </div>
        <div className="col-md-4 col-12 text-center align-self-center">
          <img className='logoUtc' src={logoUtc} alt="Logo de la UTC" />
        </div>
        <div className="col-md-4 col-12 d-flex d-md-inline justify-content-center text-light">
          <p className='fs-2 fw-medium d-md-block d-none me-4 m-0'>Enlaces UTC</p>
          <AnchorFooter text='Sitio Oficial' icono='bi bi-globe' enlace='https://utc.edu.mx/' />
          <AnchorFooter text='Facebook' icono='bi bi-facebook' enlace='https://www.facebook.com/UniversidadTecnologicadeCoahuila' />
          <AnchorFooter text='Instagram' icono='bi bi-instagram' enlace='https://www.instagram.com/utcoahuila/' />
        </div>
      </div>

    </footer>
  )
}
