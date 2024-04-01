import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Adjetivos from "./components/Adjetivos/Adjetivos";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Navigation />
			<Outlet />
			<Adjetivos />
			<Footer />
		</>
	);
}

export default App;
