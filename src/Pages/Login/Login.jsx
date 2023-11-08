import Lottie from 'lottie-react';
import Container from '../../Components/Container/Container';
import loginAnimation from '../../assets/Lottie-Animation/4.json';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
const Login = () => {
	// Auth hook
	const { logIn, googleSignIn } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	console.log(location);

	// Login event handler
	const hadnleLogin = async e => {
		e.preventDefault();
		const form = e.target;
		// Input field value

		const email = form.email.value;
		const password = form.password.value;
		const checkbox = form.checkbox.checked;
		//Validation
		if (!checkbox) {
			return toast.error('Please accept terms and condition');
		}
		// /Toast
		const toastId = toast.loading('Logging you in..');
		try {
			await logIn(email, password);
			form.reset();
			navigate(location.state ? location.state : '/');
			toast.success('Login successful!', { id: toastId });
		} catch (error) {
			console.log(error);
			toast.error('Invalid login credentials🙁', { id: toastId });
		}
	};

	const handleGoogleSignIn = async () => {
		// /Toast
		const toastId = toast.loading('Select an account to procced');

		try {
			await googleSignIn();
			navigate(location.state ? location.state : '/');
			toast.success('Google sign in successful!', { id: toastId });
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong😥', { id: toastId });
		}
	};

	return (
		<Container>
			<Helmet>
				<title>Ride Mate | Login</title>
			</Helmet>
			<body className="w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center py-10 md:py-16 lg:py-32">
				<main className=" w-full max-w-md mx-auto p-6">
					<div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
						<div className="p-4 sm:p-7">
							<div className="text-center">
								<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
									Log in
								</h1>
								<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
									Do&apos;t have an account?
									<Link
										to={'/register'}
										className="text-sky-600 decoration-2 hover:underline font-medium"
										href="../examples/html/signin.html"
									>
										Regiseter
									</Link>
								</p>
							</div>

							<div className="mt-5">
								<button
									onClick={handleGoogleSignIn}
									type="button"
									className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-sky-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
								>
									<svg
										className="w-4 h-auto"
										width="46"
										height="47"
										viewBox="0 0 46 47"
										fill="none"
									>
										<path
											d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
											fill="#4285F4"
										/>
										<path
											d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
											fill="#34A853"
										/>
										<path
											d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
											fill="#FBBC05"
										/>
										<path
											d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
											fill="#EB4335"
										/>
									</svg>
									Sign up with Google
								</button>

								<div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
									Or
								</div>

								<form onSubmit={hadnleLogin}>
									<div className="grid gap-y-4">
										<div>
											<label className="block text-sm mb-2 dark:text-white">
												Email address
											</label>
											<div className="relative">
												<input
													type="email"
													name="email"
													className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
													required
													placeholder="Enter your email"
												/>
											</div>
										</div>

										<div>
											<label className="block text-sm mb-2 dark:text-white">
												Password
											</label>
											<div className="relative">
												<input
													type="password"
													name="password"
													className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
													required
													placeholder="Enter your password"
												/>
											</div>
										</div>

										<div className="flex items-center">
											<div className="flex">
												<input
													type="checkbox"
													name="checkbox"
													className="shrink-0 mt-0.5 border-gray-200 rounded text-sky-600 focus:ring-sky-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-sky-500 dark:checked:border-sky-500 dark:focus:ring-offset-gray-800"
													id="hs-checkbox-group-1"
												/>
											</div>
											<div className="ml-3">
												<label
													htmlFor="remember-me"
													className="text-sm dark:text-white"
												>
													I accept the{' '}
													<a
														className="text-sky-600 decoration-2 hover:underline font-medium"
														href="#"
													>
														Terms and Conditions
													</a>
												</label>
											</div>
										</div>

										<button
											type="submit"
											className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
										>
											Sign up
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</main>
				<div className=" hidden lg:block">
					<Lottie
						animationData={loginAnimation}
						loop={true}
						autoplay={true}
					></Lottie>
				</div>
			</body>
		</Container>
	);
};

export default Login;
