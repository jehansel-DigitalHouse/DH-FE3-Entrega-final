// React
import { Outlet } from "react-router-dom";

// Componentes
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
	return (
		<div className="body">
			{/* Renderiza tanto el(los) componente(s) (Navbar y Footer) como la ruta (Oulet) */}
			<Navbar />
			<div className="outlet">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
