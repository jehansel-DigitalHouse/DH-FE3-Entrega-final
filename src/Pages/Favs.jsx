import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
	// Coloco los estados que necesito y se declararon en context
	const {
		state: { favs },
	} = useContextGlobal();

	return (
		<>
			<h1>Dentists Favs</h1>
			<div className="card-grid">
				{/* este componente debe consumir los destacados del localStorage */}
				{/* Deberan renderizar una Card por cada uno de ellos */}
				{favs.map((dentist) => (
					// Le paso el objeto dentist a Card
					<Card key={dentist.id} dentist={dentist} />
				))}
			</div>
		</>
	);
};

export default Favs;
