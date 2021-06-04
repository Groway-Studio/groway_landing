import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";

class Home extends React.Component {
	state = {
		num: 0,
	};

	render() {
		return (
			<div>
				<Navbar/>
				<Header/>
				<Main/>
				<Footer/>
			</div>
		);
	}
}

export default Home;
