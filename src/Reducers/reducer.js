// Es una función que se ejecuta cuando el dispatcher lo dice
export const reducer = (state, action) => {
	switch (action.type) {
		case "GET_DENTIST_LIST":
			console.log("GET_DENTIST_LIST");
			return { ...state, dentists: action.payload };
		case "ADD_FAV":
			console.log("ADD_FAV");
			return { ...state, favs: [...state.favs, action.payload] };
		case "DELETE_FAV":
			console.log("DELETE_FAV");
			// El método filter crea un arreglo sin el id del char que recibió, es decir, lo borra
			const filterFavs = state.favs.filter(
				(fav) => fav.id !== action.payload.id
			);
			return { ...state, favs: filterFavs };
		case "TOGGLE_THEME":
			console.log("TOGGLE_THEME");
			// Cambia el tema de light a dark
			return {
				...state,
				theme: state.theme === "light" ? "dark" : "light",
			};
	}
};
