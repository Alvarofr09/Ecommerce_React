import "../../styles/components/adjetivos.css";

export default function Adjetivos() {
	return (
		<section className="adjetivos">
			<div className="adjetivos-objetos">
				<span className="material-icons adjetivos-objetos_icon"> shield </span>
				<div>
					<h5 className="adjetivos-objetos_title">Pago Seguro</h5>
					<h6>100% Garantizado</h6>
				</div>
			</div>
			<div className="adjetivos-objetos">
				<span className="material-icons adjetivos-objetos_icon">
					local_shipping
				</span>
				<div>
					<h5 className="adjetivos-objetos_title">Envío Gratis</h5>
					<h6>En pedidos de +100€</h6>
				</div>
			</div>
			<div className="adjetivos-objetos">
				<span className="material-icons adjetivos-objetos_icon">
					verified_user
				</span>
				<div>
					<h5 className="adjetivos-objetos_title">2 años de garantía</h5>
					<h6>En todos los gadgets</h6>
				</div>
			</div>
			<div className="adjetivos-objetos">
				<span className="material-icons adjetivos-objetos_icon">
					{" "}
					inventory{" "}
				</span>
				<div>
					<h5 className="adjetivos-objetos_title">Ofertas únicas</h5>
					<h6>Precios de mayorista</h6>
				</div>
			</div>
		</section>
	);
}
