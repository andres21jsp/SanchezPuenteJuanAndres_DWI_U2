import React,{useEffect, useRef} from 'react'
import icono from "../assets/IconoTransparentTF.svg"


export default function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          },
          { threshold: 0.5 }
        );
    
        if (headerRef.current) {
          observer.observe(headerRef.current);
        }
    
        return () => {
          if (headerRef.current) {
            observer.unobserve(headerRef.current);
          }
        };
      }, []);
    return (
        <header className='header vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div ref={headerRef} className='text-center'>
                <img src={icono} alt="Icono de TechFatory" className='logo' />
                <h1 className='text-gradiant d-md-block d-none'>TechFactory</h1>
            </div>
        </header>
    )
}
