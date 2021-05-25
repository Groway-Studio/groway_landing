import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./layout/Footer/Footer";

class Home extends React.Component {
	state = {
		num: 0,
	};

	render() {
		return (
			<div>
				<Header/>
				{/* <Main/>
				<Footer/> */}
			</div>
		);
	}
}

export default Home;
