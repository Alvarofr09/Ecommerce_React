import { Link } from "react-router-dom";

import "./FormLogin.css";

export default function Form({ title, sub_title, children }) {
	return (
		<section className="container">
			<div className="heading">{title}</div>
			<h3 className="sub-heading">{sub_title}</h3>
			<form action="" className="form">
				{children}
			</form>
			<span className="agreement">
				<Link to="/privacidad">Politicas de privacidad</Link>
			</span>
		</section>
	);
}
