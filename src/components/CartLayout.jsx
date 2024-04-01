import { Outlet } from "react-router-dom";
import Header from "./CartHeader/Header";
import Adjetivos from "./Adjetivos/Adjetivos";
import Footer from "./Footer/Footer";

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Adjetivos />
			<Footer />
		</>
	);
}
