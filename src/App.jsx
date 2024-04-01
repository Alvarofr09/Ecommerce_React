import { Outlet } from "react-router-dom";

import Header from "./components/Generales/Header";
import Navigation from "./components/Generales/Navigation";
import Adjetivos from "./components/Generales/Adjetivos";
import Footer from "./components/Generales/Footer";

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
