import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const {
		state: { dentists },
	} = useContextGlobal();

	return (
		<main className="code">
			<h1>Home</h1>
			<div className="card-grid">
				{/* Aqui deberias renderizar las cards */}
				{dentists.map((dentist) => (
					// Le paso el objeto dentist a Card
					<Card key={dentist.id} dentist={dentist} />
				))}
			</div>
		</main>
	);
};

export default Home;
