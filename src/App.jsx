import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import CartLayout from "./components/CartLayout.jsx";
import Login from "./views/Generales/Login.jsx";
import Productos from "./views/Productos/Productos.jsx";
import DetallesProducto from "./views/Productos/DetallesProducto.jsx";
import Carrito from "./views/Pago/Carrito.jsx";
import Envio from "./views/Pago/Envio.jsx";
import FormaDePago from "./views/Pago/FormaDePago.jsx";
import NotFound from "./views/Generales/NotFound.jsx";
import Nosotros from "./views/Generales/Nosotros.jsx";
import Contacto from "./views/Generales/Contacto.jsx";
import Privacidad from "./views/Generales/Privacidad.jsx";

import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Login />} />
						<Route path="productos" element={<Productos />}>
							<Route path=":id" element={<DetallesProducto />} />
						</Route>

						<Route path="about" element={<Nosotros />} />
						<Route path="contact" element={<Contacto />} />
						<Route path="privacidad" element={<Privacidad />} />
					</Route>
					<Route path="/compra" element={<CartLayout />}>
						<Route path="carrito" element={<Carrito />} />
						<Route path="envio" element={<Envio />} />
						<Route path="pago" element={<FormaDePago />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
