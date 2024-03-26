import Logo from "../../assets/images/logo-sin-fondo.png";

import "../../styles/components/header.css";

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div className="header">
				<div className="header_logo">
					<img src={Logo} alt="logo" className="header_logo_img" />
				</div>

				<div className="search">
					<input
						type="text"
						className="search__input"
						placeholder="Escribe tu búsqueda"
					/>
					<button className="search__button">
						<span class="material-icons search__icon">search</span>
					</button>
				</div>

				<div className="header_carrito">
					<Link to="/carrito">
						<span className="material-icons header_icon"> shopping_cart </span>
						<span className="header_carrito_count">1</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
