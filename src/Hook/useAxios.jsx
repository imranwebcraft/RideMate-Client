import axios from 'axios';
import useAuth from './useAuth';

const instance = axios.create({
	baseURL: 'http://localhost:5000/api/v1',
	withCredentials: true,
});

const useAxios = () => {
	const { logOut } = useAuth;

	instance.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			console.log('error from axios interceptor', error);
			if (error.response?.status === 401) {
				// console.log('Logut the user');
				logOut()
					.then(() => {
						console.log('User logout successful');
					})
					.catch(error => console.log(error));
			}
		}
	);

	return instance;
};

export default useAxios;
