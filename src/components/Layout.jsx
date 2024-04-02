import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Adjetivos from "./Adjetivos/Adjetivos";
import Footer from "./Footer/Footer";

export default function Layout() {
	return (
		<>
			<Header />
			<Navigation />
			{/* <PrimarySearchAppBar /> */}
			<Outlet />
			<Adjetivos />
			<Footer />
		</>
	);
}
