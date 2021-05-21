import React from "react";

class Footer extends React.Component {
  state = {
    num: 0,
  };

  render() {
    return (
      <div>
        <footer class="footer">
          <div class="row">
            <div class="col-1-of-2">
              <div class="footer__navigation">
                Aqui  el Footer
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
