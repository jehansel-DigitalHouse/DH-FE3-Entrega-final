import { useState } from "react";

const Form = () => {
	//Variables useState
	const [paciente, setPaciente] = useState({
		nombre: "",
		email: "",
	});
	const [mostrar, setMostrar] = useState(false);
	const [error, setError] = useState(false);

	//Validaciones
	const handleSubmit = (event) => {
		// Evita que el formulario use la funcionlidad nativa
		event.preventDefault();

		// Expresión regular para validar el email
		let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

		if (
			// Valida la longitud del nombre del paciente
			paciente.nombre.length > 5 &&
			paciente.nombre.includes(" ") &&
			// Valida que sea un email escrito correctamente
			regexEmail.test(paciente.email)
		) {
			setMostrar(true);
			setError(false);
		} else {
			setMostrar(false);
			setError(true);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="">
				{/* onsubmit */}
				<label>Name:</label>
				{/* onchange */}
				<input
					type="text"
					onChange={(event) =>
						setPaciente({
							...paciente,
							nombre: event.target.value,
						})
					}
				/>

				<label>Email:</label>
				<input
					type="email"
					onChange={(event) =>
						setPaciente({
							...paciente,
							email: event.target.value,
						})
					}
				/>

				<button>Send</button>
				{mostrar && (
					<h4 style={{ color: "green" }}>
						Thank you {paciente.nombre}, we'll contact you soon!
					</h4>
				)}
				{error && (
					<h4 style={{ color: "red" }}>
						Please validate your info again
					</h4>
				)}
			</form>
		</div>
	);
};

export default Form;
