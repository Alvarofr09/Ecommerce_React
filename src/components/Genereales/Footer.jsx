import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo-sin-fondo.png";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-izq">
				<div className="logo">
					<img src={Logo} alt="Logo empresa" style={{ width: "60%" }} />
				</div>

				<div className="lista">
					<ul>
						<li>
							<Link to="/">Centro de ayuda</Link>
						</li>
						<li>
							<Link to="/">Servicio al consumidor</Link>
						</li>
						<li>
							<Link to="/">Escribenos</Link>
						</li>
						<li>
							<Link to="/">Servicio Telefónico</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/privacidad">Politica de privacidad</Link>
						</li>
						<li>
							<Link to="/">Condiciones de compra</Link>
						</li>
						<li>
							<Link to="/">Opiniones de clientes</Link>
						</li>
						<li>
							<Link to="/">Avisos de privacidad y cookies</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-der">
				<div>
					<h5>Únete a nuestra newsletter y recibe ofertas</h5>
					<p>Aqui va la newsletter</p>
				</div>

				<hr />

				<div className="footer_social-icons">
					<h3>Siguenos en redes</h3>
					<div className="footer_iconos">
						<Link href="/" className="footer_icons">
							<img src={Facebook} alt="" />
						</Link>
						<Link href="/" className="footer_icons">
							<img src={Instagram} alt="" />
						</Link>
						<Link href="/" className="footer_icons">
							<img src={Twitter} alt="" />
						</Link>
						<Link href="/" className="footer_icons">
							<img src={Youtube} alt="" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
