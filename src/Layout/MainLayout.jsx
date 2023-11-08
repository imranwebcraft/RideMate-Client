import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
	return (
		<div className="font-sans scroll-smooth tracking-wide">
			<Navbar />
			<div className="min-h-[95vh]">
				<Outlet />
			</div>
			<Footer />
			<Toaster></Toaster>
		</div>
	);
};

export default MainLayout;
