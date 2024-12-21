import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/Context";

const Card = ({ dentist }) => {
	// console.log(dentist.id);
	// console.log(dentist.name);
	// console.log(dentist.username);

	const {
		dispatch,
		state: { favs },
	} = useContextGlobal();

	const addFav = () => {
		// Aqui iria la logica para agregar la Card en el localStorage
		console.log("Card -> addFav -> ");
		console.log(dentist);

		dispatch({ type: "ADD_FAV", payload: dentist });
	};

	return (
		<div className="card">
			{/* Se le agrega una redirección dinámica to={`/detail/${char.id}`} */}
			{/* Link nos lleva a la ruta del detalle con el id de la card a la que se le dio click */}
			<Link to={`/dentist/${dentist.id}`}>
				{/* En cada card deberan mostrar en name - username y el id */}
				{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
				{
					<img
						src="../../public/images/doctor.jpg"
						alt={dentist.name}
					/>
				}
				<h3>{dentist.name}</h3>
				<h4>{dentist.username}</h4>
			</Link>

			{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
			<button onClick={addFav} className="favButton">
				Add fav 👍
			</button>
		</div>
	);
};

export default Card;
