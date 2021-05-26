import React from "react";
import Logo from '../../../assets/img/Brand-Groway-004.svg';

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
                <img src={Logo} alt="Logo Groway" />
              </div>
            </div>
            <div className="col-1-of-2 footer__text">
              <div className="footer__text--box-1">
                Texto 1
              </div>
              <div className="footer__text--box-2">
                Texto 2
              </div>
              <div className="footer__text--box-3">
                Texto 3
              </div>
              <div className="footer__text--box-4">
                Texto 4
              </div>
              <div className="footer__text--box-5">
                Texto 5
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
