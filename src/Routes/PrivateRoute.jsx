import { ScaleLoader } from 'react-spinners';
import useAuth from '../Hook/useAuth';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return (
			<div className=" bg-white dark:bg-slate-900 h-screen flex justify-center items-center">
				<ScaleLoader color="#0284C7" />
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
