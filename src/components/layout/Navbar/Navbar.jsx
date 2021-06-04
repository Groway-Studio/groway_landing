import React from "react";
import "./_navbar.scss";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <section class="navbar">
          <div className="navbar__content_wraper">
            <div className="navbar__content_wraper--title">
              <a href="#Header" className="navbar__content_wraper--title-1"> Home</a>
            </div>
            <div className="navbar__content_wraper--title">
              <a href="#Convierte_ideas" className="navbar__content_wraper--title-2"> Que hacemos</a>
            </div>
            <div className="navbar__content_wraper--title">
              <a href="#Trabajemos_juntos" className="navbar__content_wraper--title-3"> Trabajemos Juntos</a>
            </div>
            <div className="navbar__content_wraper--title">
              <a href="#tu_crecimiento" className="navbar__content_wraper--title-4">Acompañamos tu Crecimiento</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Navbar;
