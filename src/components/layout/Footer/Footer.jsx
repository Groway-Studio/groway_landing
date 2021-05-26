import React from "react";
import Logo from '../../../assets/img/brand_groway_blanco.svg';

import "./_footer.scss";

class Footer extends React.Component {
  state = {
    num: 0,
  };

  render() {
    return (
      <div>
      <footer>
          <div className="footer">
            <div className="col-1-of-2 footer__logo">
              <div className="footer__logo-box">
                <img className="footer__logo-box--img" src={Logo} alt="Logo Groway" />
              </div>
            </div>
            <div className="col-1-of-2 footer__text">
              <div className="col-1-of-2 footer__text--box-1">
                <h3 className="footer__text--title">USA</h3>
                <p className="footer__text--subtitle">+1 786 7558193</p>
                <h3 className="footer__text--title">Colombia</h3>
                <p className="footer__text--subtitle">+57 15800311</p>
                <h3 className="footer__text--title">Argentina</h3>
                <p className="footer__text--subtitle">+54 11 52175854</p>
              </div>
              <div className="col-1-of-2 footer__text--box-2">
                <h3 className="footer__text--title">Peru</h3>
                <p className="footer__text--subtitle--Peru">
                  Av. El Derby 055
                  Edificio Cronos, Torre 1 - Piso 7
                  Santiago de Surco
                  Lima - Peru</p>
                <h3 className="footer__text--title">Escribenos a:</h3>
                <p className="footer__text--subtitle">
                  <a href="mailto:contact@test.com">hello@groway.studio</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
