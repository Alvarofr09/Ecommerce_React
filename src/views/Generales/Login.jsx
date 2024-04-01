import FormLogin from "../../components/FormLoging/FormLogin";
import Input from "../../components/Input/Input";

export default function Login() {
	return (
		<main className="index_container">
			<FormLogin title={"Iniciar sesión"} sub_title={"Accede con tus datos"}>
				<Input
					placeholder="E-mail"
					id="correoInicio"
					name="correoInicio"
					type="email"
					className="input"
					required=""
				/>
				<Input
					placeholder="Password"
					id="contrasenaInicio"
					name="contrasenaInicio"
					type="password"
					className="input"
					required=""
				/>
				<Input value="Iniciar sesión" type="submit" className="login-button" />
			</FormLogin>
			<FormLogin title={"Registrate"} sub_title={"Crea una cuenta"}>
				<Input
					placeholder="Nombre"
					type="text"
					name="nombreRegistro"
					id="nombreRegistro"
					className="input nombreRegistro"
					required=""
				/>
				<Input
					placeholder="Apellidos"
					type="text"
					name="apellidoRegistro"
					id="apellidoRegistro"
					className="input apellidoRegistro"
					required=""
				/>
				<Input
					placeholder="E-mail"
					id="correoRegistro"
					name="correoRegistro"
					type="email"
					className="input"
					required=""
				/>
				<Input
					placeholder="Password"
					id="contrasenaRegistro"
					name="contrasenaRegistro"
					type="password"
					className="input"
					required=""
				/>
				<Input
					value="Crear tu cuenta ahora"
					type="submit"
					className="signin-button"
				/>
			</FormLogin>
		</main>
	);
}
