import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
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

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Login />} />
					<Route path="productos" element={<Productos />}>
						<Route path=":id" element={<DetallesProducto />} />
					</Route>
					<Route path="carrito" element={<Carrito />} />
					<Route path="envio" element={<Envio />} />
					<Route path="pago" element={<FormaDePago />} />
					<Route path="about" element={<Nosotros />} />
					<Route path="contact" element={<Contacto />} />
					<Route path="privacidad" element={<Privacidad />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
