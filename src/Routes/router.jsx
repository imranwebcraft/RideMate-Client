import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Blog from '../Pages/Blog/Blog';
import MyServices from '../Pages/MyServices/MyServices';
import MySchedules from '../Pages/MySchedules/MySchedules';
import AddService from '../Pages/AddService/AddService';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Error from '../Pages/404/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'services',
				element: <Services />,
			},
			{
				path: 'blog',
				element: <Blog />,
			},
			{
				path: 'my-services',
				element: <MyServices />,
			},
			{
				path: 'add-service',
				element: <AddService />,
			},
			{
				path: 'my-schedules',
				element: <MySchedules />,
			},

			// Auth
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
]);

export default router;
