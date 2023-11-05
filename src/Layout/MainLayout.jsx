import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
	return (
		<div className="font-sans">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
