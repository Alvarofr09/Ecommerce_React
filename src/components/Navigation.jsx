import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<nav className="nav">
			<ul className="nav__list --left">
				<li className="nav_list_item">
					<Link className="nav_list_item_link" to="/">
						Todos los productos
					</Link>
				</li>
				<li className="nav_list_item">
					<Link className="nav_list_item_link" to="/about">
						Sobre nosotros
					</Link>
				</li>

				<li className="nav_list_item">
					<Link className="nav_list_item_link" to="/contact">
						Contacto
					</Link>
				</li>
				<li className="nav_list_item">
					<Link className="nav_list_item_link" to="/">
						Hola
					</Link>
				</li>
			</ul>

			<ul className="nav__list --right">
				<li className="nav_list_item">
					<Link className="nav_list_item_link" to="/">
						Login
					</Link>
				</li>
				<li className="nav_list_item">
					<Link className="nav_list_item_link" to="/login">
						Logout
					</Link>
				</li>
			</ul>
		</nav>
	);
}
