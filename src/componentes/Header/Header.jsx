import React from "react";
class Header extends React.Component {
	state = {
		num: 0,
	};

	render() {
		return (
			<div>
				<header id="Header" class="block_white">
				<div class="col-1-of-2">
					Aqui hay algo
				</div>
				<div class="col-1-of-2">
					Aqui hay algo 2
				</div>
				</header>
			</div>
		);
	}
}

export default Header;
