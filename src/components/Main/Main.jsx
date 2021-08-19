import React from "react";
import "./_main.scss"

import Ciclo from '../../assets/img/ciclo.svg';
import TrabajemosJuntos from '../../assets/img/growthcurve-bro.svg';
import Crecimiento from '../../assets/img/workingremotely-bro.svg';
class Main extends React.Component {

  render() {
    return (
      <div>
        <section id="Convierte_ideas" className="block_grey">
          <div className="convierte_ideas">
            <div className="col-1-of-2 convierte_ideas__text">
              <h1 className="convierte_ideas__text--title">Convierte <span className="u-text--rose">ideas</span> en <span className="u-text--yellow">Productos</span> con <span className="u-text--rose">Potencial</span></h1>
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
            <div className="col-1-of-2 trabajemos_juntos__img">
              <img src={TrabajemosJuntos} alt="Trabajemos juntos" />
            </div>
            <div className="col-1-of-2 trabajemos_juntos__text">
              <h1 className="trabajemos_juntos__text--title"><span className="u-text--rose">Trabajemos</span> <span className="u-text--yellow">Juntos</span></h1>
              <p className="trabajemos_juntos__text--subtitle">Una buena idea es el punto de partida en el camino para lograr un producto exitoso y este
                debe ser llevada al mercado lo mas rapido posible para validar nuestras hipótesis e iniciar 
                el proceso de ajuste y mejora continua para acercarnos cada vez mas al producto que nuestros 
                usuarios amaran.</p>
            </div>
          </div>
        </section>
        <section id="tu_crecimiento" className="block_grey">
        <div className="trabajemos_juntos">
            <div className="col-1-of-2 trabajemos_juntos__text">
              <h1 className="trabajemos_juntos__text--title"><span className="u-text--rose">Acompañamos</span> tu <span className="u-text--yellow">Crecimiento</span></h1>
              <p className="trabajemos_juntos__text--subtitle">Una buena idea es el punto de partida en el camino para lograr un producto exitoso y este
                debe ser llevada al mercado lo mas rapido posible para validar nuestras hipótesis e iniciar 
                el proceso de ajuste y mejora continua para acercarnos cada vez mas al producto que nuestros 
                usuarios amaran.</p>
            </div>
            <div className="col-1-of-2 trabajemos_juntos__img">
              <img src={Crecimiento} alt="Crecimiento" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
