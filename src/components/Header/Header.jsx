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
			<div class="block_white blockMain" >
				<header id="Header" class="header">
					<div class="custom-shape-divider-bottom-1664522860">
							<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
									<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
							</svg>
					</div>
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
