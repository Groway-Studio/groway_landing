import React from "react";
import Logo from '../assets/Brand-Groway-004.svg';
import Marco from '../assets/frame.svg';

import '../styles/layout/_header.scss'
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
						<h2 class="header__text-tittle">Creamos Productos Digitales</h2>
						<p class="header__text-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
						<button class="header__text-button">CONVERSEMOS</button>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
