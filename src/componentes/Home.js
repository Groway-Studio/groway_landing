import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class Home extends React.Component {
	state = {
		num: 0,
	};

	render() {
		return (
			<div>
				<Header/>
				<Main/>
				<Footer/>
			</div>
		);
	}
}

export default Home;
