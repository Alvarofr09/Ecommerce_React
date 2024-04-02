import FormLogin from "../../components/FormLoging/FormLogin";

import FormPropsTextFields from "../../components/Form/Form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Input from "../../components/Input/Input";

export default function Login() {
	return (
		<main className="index_container">
			<FormPropsTextFields
				title={"Iniciar sesión"}
				sub_title={"Accede con tus datos"}
			>
				<TextField
					margin="normal"
					className="input"
					fullWidth
					required
					color="primary"
					id="login-email"
					label="Correo electronico"
					type="email"
					helperText="Texto que se puede poner"
				/>
				<TextField
					margin="normal"
					fullWidth
					required
					color="primary"
					id="login-password"
					label="Password"
					type="password"
					autoComplete="current-password"
				/>
				<Button fullWidth variant="contained" color="primary" margin="normal">
					Iniciar Sesion
				</Button>
			</FormPropsTextFields>
			<FormPropsTextFields
				title={"Registrate"}
				sub_title={"Crea una nueva cuenta"}
			>
				<TextField
					xs={{ width: "50%" }}
					margin="normal"
					className="input"
					fullWidth
					required
					color="primary"
					id="register-name"
					label="Nombre"
					type="text"
					helperText="Texto que se puede poner"
				/>
				<TextField
					xs={{ m: 1, width: "25ch" }}
					margin="normal"
					className="input"
					fullWidth
					required
					color="primary"
					id="register-surname"
					label="Apellidos"
					type="text"
					helperText="Texto que se puede poner"
				/>
				<TextField
					margin="normal"
					className="input"
					fullWidth
					required
					color="primary"
					id="register-email"
					label="Correo electronico"
					type="email"
					helperText="Texto que se puede poner"
				/>
				<TextField
					margin="normal"
					fullWidth
					required
					color="primary"
					id="register-input"
					label="Password"
					type="password"
					autoComplete="current-password"
				/>
				<Button fullWidth variant="contained" color="primary" margin="normal">
					Crear cuenta
				</Button>
			</FormPropsTextFields>
		</main>
	);
}
