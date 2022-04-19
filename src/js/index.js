//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home.js";

//render your react application
ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	document.querySelector("#app")
);
