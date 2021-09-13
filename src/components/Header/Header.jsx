import React from "react";
import Logo from '../../assets/Brand-Groway-005.svg';
import Marco from '../../assets/frame2.svg';

import './_header.scss'
class Header extends React.Component {
	state = {
		num: 0,
	};

	render() {
		return (
			<div>
				<header id="Header" class="block_white header" style={{ backgroundImage:`url(${Marco})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
					<div class="col-1-of-2 header__logo">
						<img src={Logo} alt="Logo Groway" />
					</div>
					<div class="col-1-of-2 header__text">
						<div class="header__content">
							<h1 class="header__text-tittle">Creamos Productos Digitales</h1>
							<p class="header__text-p">Hacemos realidad tus mejores ideas.</p>
							<button class="btn-contact u-align-center">
								<a href="mailto:hello@groway.studio">Conversemos</a>
							</button>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
