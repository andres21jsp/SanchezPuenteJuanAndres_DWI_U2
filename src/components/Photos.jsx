import React from 'react'
import photo1 from "./../assets/photo1.png"
import photo2 from "./../assets/photo2.png"
import photo3 from "./../assets/photo3.png"
import photo4 from "./../assets/photo4.png"
import photo5 from "./../assets/photo5.png"
import photo6 from "./../assets/photo6.png"
import photo7 from "./../assets/photo7.png"
import video from "./../assets/video.mp4"

export default function Photos() {
    return (
        <section id='photos'>
            <h1></h1><><div className='container d-flex'>
                <div className="parent">
                    <div className="photos1">
                        <div className="photoscard-container">
                            <div className="photoscard">
                                <div className="img-content">
                                    <img src={photo1} />
                                </div>
                                <div className="content">
                                    <p className="heading">App Interactiva</p>
                                    <p>
                                    Sumérgete en un entorno industrial donde tu misión es recoger todas las piezas necesarias para abrir la puerta y avanzar en la App.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="photos2">
                        <div className="photoscard-container">
                            <div className="photoscard">
                                <div className="img-content">
                                    <img src={photo2} />
                                </div>
                                <div className="content">
                                    <p className="heading">Estilo Visual</p>
                                    <p>
                                    Gráficos de calidad y detalles bien logrados, ideales para los amantes del entorno industrial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="photos3">
                        <div className="photoscard-container">
                            <div className="photoscard">
                                <div className="img-content">
                                    <img src={photo3} />
                                </div>
                                <div className="content">
                                    <p className="heading">Ambiente Interactivo</p>
                                    <p>
                                    Experiencia un entorno virtual similar a un taller industrial. 
                                    </p>
                                    <p>donde los usuarios pueden practicar sin riesgos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="photos4">
                        <div className="photoscard-container">
                            <div className="photoscard">
                                <div className="img-content">
                                    <img src={photo4} />
                                </div>
                                <div className="content">
                                    <p className="heading">Capacitación Visual</p>
                                    <p>
                                    Imágenes 3D realistas para facilitar la comprensión de las piezas y su funcionamiento
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="photos5">
                        <div className="photoscard-container">
                            <div className="photoscard">
                                <div className="img-content">
                                    <img src={photo5} />
                                </div>
                                <div className="content">
                                    <p className="heading">Llamado a la Acción</p>
                                    <p>
                                    ¡Descubre la revolución en la capacitación industrial! Prueba nuestra aplicación y lleva el conocimiento de tu equipo al siguiente nivel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="photos6">
                        <div className="photoscard-container">
                            <div className="photoscard">
                                <div className="img-content">
                                    <img src={photo6} />
                                </div>
                                <div className="content">
                                    <p className="heading">Interfaz Sencilla</p>
                                    <p>
                                    Mejora la capacitación de tus empleados en el manejo y conocimiento de piezas industriales con nuestra innovadora aplicación.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="photos7">
                        <div className="photoscard-container">
                            <div className="photoscard">
                                <div className="img-content">
                                    <img src={photo7} />
                                </div>
                                <div className="content">
                                    <p className="heading">Ideal Para:</p>
                                    <p>
                                    Empresas manufactureras, talleres mecánicos, y organizaciones que busquen optimizar sus procesos de capacitación en el sector industrial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-container p-0">
                    <video width="100%" height="auto" loop autoPlay muted>
                        <source src={video}/>
                    </video>
                </div></>
        </section>
    )
}


