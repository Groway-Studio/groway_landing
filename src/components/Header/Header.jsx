import React from "react";
import Logo from '../../assets/img/Brand-Groway-004.svg';
import Marco from '../../assets/img/frame.svg';

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
						<h1 class="header__text-tittle">Creamos Productos Digitales</h1>
						<p class="header__text-p">Lorem ipsum dolor sit amet, consetetur sadipsc sed diam nonumy eirmod tempor invidunt ut labore et </p>
						<button class="btn-contact">
							<a href="mailto:contact@test.com">Conversemos</a>
						</button>
						{/* <button class="btn--grey-dark">Conversemos</button>
						<button class="header__text-button">CONVERSEMOS</button>
						<button class="btn--green">Conversemos</button> */}
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
