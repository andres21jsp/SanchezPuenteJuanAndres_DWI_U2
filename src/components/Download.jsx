import React from 'react';
import '../Download.css';

export default function Download() {
  // Array de objetos con diferentes textos para cada tarjeta
  const cards = [
    {
      prompt: "PRIMER PASO",
      title: (
        <>
          Primero presiona <br />
          el botón de descarga <br />
           que está <br /> abajo 
        </>
      )
    },
    {
      prompt: "SEGUNDO PASO",
      title: (
        <>
          El link te <br />
          Te va a <br />
          enviar <br />
          a un link <br />
          de google <br />
          drive
        </>
      )
    },
    {
      prompt: "TERCER PASO",
      title: (
        <>
          Si estas navegando<br />
          en tu celular ejecuta <br />
          el ANDROID, si no el PC <br />
        </>
      )
    },
    {
      prompt: "CUARTO PASO",
      title: (
        <>
          Disfruta la<br />
          experiencia <br />
          que te <br />
          ofrece la <br />
          capacitación <br />
          visual
        </>
      )
    }
  ];

   // Enlace de Google Drive
   const driveLink = "https://drive.google.com/drive/folders/1r3513_Z3kDHI-GIl-yFW9ZcgyC4wSJXs";

  return (
    <section id="download">
      <div className="canvas">
        {cards.map((card, index) => (
          <div className={`container-tarjeta`} key={index}>
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div id="card">
              <div className="card-content">
                <div className="card-glare"></div>
                <div className="cyber-lines">
                  <span></span><span></span><span></span><span></span>
                </div>
                <p id="prompt" className="highlight">{card.prompt}</p>
                <div className="title">{card.title}</div>
                <div className="glowing-elements">
                  <div className="glow-1"></div>
                  <div className="glow-2"></div>
                  <div className="glow-3"></div>
                </div>
                <div className="card-particles">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="corner-elements">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div className="scan-line"></div>
              </div>
            </div>
          </div>
        ))}
      </div><br/>
      <div id="button-container">
        <a href={driveLink} target="_blank" rel="noopener noreferrer">
          <button type="button" class="btn">
            <strong>DESCARGAR</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </a>
      </div>
    </section>
  );
}