import { Outlet } from "react-router-dom";

import Header from "./components/Genereales/Header";
import Navigation from "./components/Genereales/Navigation";
import Footer from "./components/Genereales/Footer";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
