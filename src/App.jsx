import { Outlet } from "react-router-dom";

import Header from "./components/Genereales/Header";
import Navigation from "./components/Genereales/Navigation";
import Adjetivos from "./components/Genereales/Adjetivos";
import Footer from "./components/Genereales/Footer";

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
