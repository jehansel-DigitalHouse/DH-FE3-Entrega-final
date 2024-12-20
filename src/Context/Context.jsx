import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

// Local Storage
// Si la primera opción es null o undefined, opta por la segunda opcion
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
console.log("Valor de localStorage de Favs ->");
console.log(lsFavs);

// ============== useReducer inicio ==============
import { reducer } from "../Reducers/reducer";
// Estructura de datos inicial del estado
// Después de inicializar no se usa nunca más
const initialState = {
	dentists: [],
	favs: lsFavs,
	theme: "",
};
// ============== useReducer fin ==============

// Creo el contexto
const ContextGlobal = createContext();
// URL del API
const url = "https://jsonplaceholder.typicode.com/users";

const ContextProvider = ({ children }) => {
	//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

	// Los dos estados anteriores los voy a convertir en un useReducer
	const [state, dispatch] = useReducer(reducer, initialState);

	// Se ejecuta cada vez que se actualiza el estado de favs,
	// es decir, el contenido de FAVS se setea en localStorage
	useEffect(() => {
		console.log(
			"Se actualizó el estado de favs y se ejecuta el localStorage setItem, es decir, el contenido de FAVS se setea en localStorage"
		);
		localStorage.setItem("favs", JSON.stringify(state.favs));
	}, [state.favs]);

	// Se ejecuta una sola vez cuando se carga el componente
	useEffect(() => {
		axios(url).then((res) => {
			console.log(
				"Se ejecuta una sola vez cuando se carga el componente"
			);
			console.log(res.data);
			//setChars(res.data.results);
			// dispatch reemplaza a setChars
			// El dispatch contiene un objeto con dos elementos
			dispatch({ type: "GET_DENTIST_LIST", payload: res.data });
		});
	}, []);

	return (
		// Se comparten los estados a los componentes (children) por medio del atributo value
		<ContextGlobal.Provider value={{ state, dispatch }}>
			{/* Aquí se colocan los componentes a los cuales se les van a compartir los estados globales */}
			{children}
		</ContextGlobal.Provider>
	);
};

export default ContextProvider;

// Creo la función que
export const useContextGlobal = () => useContext(ContextGlobal);
