import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
	return (
		<div className="font-sans scroll-smooth tracking-wide">
			<Navbar />
			<div className="min-h-[95vh]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
