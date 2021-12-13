import "./_main.scss"
import React from 'react';
import ReactDOM from 'react-dom';

import Ciclo from '../../assets/img/ciclo.svg';
import TrabajemosJuntos from '../../assets/img/workingremotely-bro.svg';
import Crecimiento from '../../assets/img/growthcurve-bro.svg';
import WiboLogo from '../../assets/img/logo_small.png';
import FidelLogo from '../../assets/img/FidelLogo.png';
import SilabuzLogo from '../../assets/img/silabuz1.png';
import TranviaLogo from '../../assets/img/tranviaLogo.svg';
import LogoCCL from '../../assets/img/logoCclAsociado.svg';
import LogoASEP from '../../assets/img/logo-asep.gif';
import LogoTWA from '../../assets/img/twa.svg';
import EPAPYME from '../../assets/img/EPA_Pyme.png';

class Main extends React.Component {

  render() {
    return (
      <div>
        <section id="Convierte_ideas" className="block_grey">
          <div className="convierte_ideas u-space-pading--medium">
            <div className="col-1-of-2 convierte_ideas__text">
              <h1 className="convierte_ideas__text--title">Convierte <span className="u-text--rose">ideas</span><br/> en <span className="u-text--yellow">Productos</span><br/>con <span className="u-text--rose">Potencial</span></h1>
              <p className="convierte_ideas__text--subtitle">Una buena idea es el punto de partida en el camino para lograr un producto exitoso y este
                debe ser llevada al mercado lo mas rapido posible para validar nuestras hipótesis e iniciar 
                el proceso de ajuste y mejora continua para acercarnos cada vez mas al producto que nuestros 
                usuarios amaran.</p>
            </div>
            <div className="col-1-of-2 convierte_ideas__img">
              <img src={Ciclo} alt="Convierte tus ideas grafico" />
            </div>
          </div>
        </section>
        <section id="Trabajemos_juntos" className="block_white">
          <div className="trabajemos_juntos">
            <div className="col-1-of-2 trabajemos_juntos__img u-space-pading--medium">
              <img src={TrabajemosJuntos} alt="Trabajemos juntos" />
            </div>
            <div className="col-1-of-2 trabajemos_juntos__text">
              <h1 className="trabajemos_juntos__text--title"><span className="u-text--rose">Trabajemos</span> <span className="u-text--yellow">Juntos</span></h1>
              <p className="trabajemos_juntos__text--subtitle">Especialistas con experiencia en empresas lideres de la región, startups y unicornios te acompañaran durante todo el proceso de creación y desarrollo.</p>
            </div>
          </div>
        </section>
        <section id="tu_crecimiento" className="block_grey">
          <div className="trabajemos_juntos">
            <div className="col-1-of-2 trabajemos_juntos__text u-margin-bottom-small">
              <div>
                <h1 className="trabajemos_juntos__text--title"><span className="u-text--rose">Acompañamos</span> tu <span className="u-text--yellow">Crecimiento</span></h1>
                <p className="trabajemos_juntos__text--subtitle">Una buena idea es el punto de partida en el camino para lograr un producto exitoso y este
                  debe ser llevada al mercado lo mas rapido posible para validar nuestras hipótesis e iniciar 
                  el proceso de ajuste y mejora continua para acercarnos cada vez mas al producto que nuestros 
                  usuarios amaran.</p>
              </div>
            </div>
            <div className="col-1-of-2 trabajemos_juntos__img u-space-pading--medium">
              <img src={Crecimiento} alt="Crecimiento" />
            </div>
          </div>
        </section>
        <section id="clientes" class="block_white">
          <div className="clientes">
            <div className="col-1-of-2">
              <h2>Confian en nosotros</h2>
              <br/>
              <div className="clientes--box">
                <a href="https://www.soywibo.com/"  target="_blank">
                  <img src={WiboLogo} />
                  <p>Plataforma para órdenes digitales que permite crear experiencias de compra inteligentes, modernas y seguras en ecosistemas y negocios de todo tipo.</p>
                </a>
                <a href="https://fidel.pe"  target="_blank">
                  <img src={FidelLogo} />
                  <p>Gana dinero con tus compras, compra en los emprendimientos afiliados y gana Cashback, es decir, gana dinero</p>
                </a>
                <a href="https://silabuz.com"  target="_blank">
                  <img src={SilabuzLogo} />
                  <p>Cursos de programación en línea para niños y jóvenes entre 10 y 18 años.</p>
                </a>
                <a href="#"  target="_blank">
                  <img src={TranviaLogo} />
                  <p>Plataforma de reserva y atencion de citas medicas para clinicas y doctores independientes.</p>
                </a>
              </div> 
              <br/><br/><br/><br/> 
              <h2>Alianzas Estrategicas</h2>
              <br/>
              <div className="clientes--box">
                <img  src={LogoCCL} alt="Logo CCL" />
                <img src={LogoASEP} alt="Logo ASEP" />
              </div>
   
              <br/><br/><br/><br/>
           
              <h2>Reconocimientos</h2>
              <br/>
              <div className="clientes--box">

                <a href="#" target="_blank">
                  <img  src={LogoTWA} class="awards" alt="Logo TWA" />

                <a href="https://thewakeupgroup.org" target="_blank">
                  <img  src={EPAPYME} class="awards" alt="Logo EPAPYME" />

                </a>
              </div>
            </div>
          </div>
        </section>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
}

export default Main;
