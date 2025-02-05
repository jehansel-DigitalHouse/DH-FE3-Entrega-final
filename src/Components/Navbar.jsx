import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
	const {
		dispatch,
		state: { theme },
	} = useContextGlobal();

	const changeThemeMode = () => {
		// Aqui iria la logica para agregar la Card en el localStorage
		console.log("Navbar -> changeThemeMode -> ");
		console.log(theme);

		// dispatch({
		// 	type: "ADD_FAV",
		// 	payload: theme === "light" ? "dark" : "light",
		// });
	};

	return (
		<nav className="">
			{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
			<Link to="/">Home</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/favs">Favs</Link>

			{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
			<button onClick={changeThemeMode}>Change theme</button>
		</nav>
	);
};

export default Navbar;
