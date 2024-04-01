import Adjetivo from "./Adjetivo";

import "./Adjetivos.css";

export default function Adjetivos() {
	return (
		<section className="adjetivos">
			<Adjetivo icon="shield" title="Pago Seguro" text="100% Garantizado" />
			<Adjetivo
				icon="local_shipping"
				title="Envío gratis"
				text="En pedidos de +100€"
			/>
			<Adjetivo
				icon="verified_user"
				title="2 años de garantía"
				text="En todos los productos"
			/>
			<Adjetivo
				icon="inventory"
				title="Ofertas únicas"
				text="Precios de mayorista"
			/>
		</section>
	);
}
