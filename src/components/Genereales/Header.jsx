import Logo from "../../assets/images/logo-sin-fondo.png";

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div className="header">
				<div className="header_logo">
					<img
						src={Logo}
						alt="logo"
						className="header_logo_img"
						style={{ width: "20%" }}
					/>
				</div>

				<div className="search_wrap">
					<h2>Aqui va el buscar</h2>
				</div>

				<div className="header_carrito">
					<Link to="/carrito">
						<span className="material-icons header_icon"> shopping_cart </span>
						<span className="header_carrito_count">1</span>
					</Link>
				</div>
			</div>
			<hr />
		</header>
	);
}
