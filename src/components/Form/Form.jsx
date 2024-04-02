import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import "../FormLoging/FormLogin.css";

export default function FormPropsTextFields({ title, sub_title, children }) {
	return (
		<section className="container">
			<div className="heading">{title}</div>
			<h3 className="sub-heading">{sub_title}</h3>
			<Box
				component="form"
				// sx={{
				// 	"& .MuiTextField-root": { m: 1, width: "25ch" },
				// }}
				noValidate
				autoComplete="on"
			>
				{children}
			</Box>
		</section>
	);
}
