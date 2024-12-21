//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
	// Estado para guardar el valor del API
	const [dentist, setDentist] = useState({});

	// Recibo el ID de la ruta dinámica
	const params = useParams();
	console.log(params);

	// Hago un nuevo llamado a la API con el ID
	const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

	useEffect(() => {
		axios(url).then((res) => {
			console.log(res.data);
			setDentist(res.data);
		});
	}, []);

	// Renderizo la información detallada
	return (
		<div>
			<h1>Detail Dentist {params.id}</h1>
			<div className="card-grid">
				<div className="card card-detail">
					{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
					{/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
					<h2>{dentist.name}</h2>
					<img
						src="../../public/images/doctor.jpg"
						alt={dentist.name}
					/>
					<h4>Email: {dentist.email}</h4>
					<h4>Phone: {dentist.phone}</h4>
					<h4>Website: {dentist.website}</h4>
				</div>
			</div>
		</div>
	);
};

export default Detail;
