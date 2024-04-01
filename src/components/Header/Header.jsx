import Logo from "../../assets/images/logo-sin-fondo.png";

import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div className="header">
				<div className="header_logo">
					<Link to="/">
						<img src={Logo} alt="logo" className="header_logo_img" />
					</Link>
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
					<Link to="/compra/carrito">
						<span className="material-icons header_icon"> shopping_cart </span>
						<span className="header_carrito_count">1</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
