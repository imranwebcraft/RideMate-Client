import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../assets/Images/rideMate.png';
import Container from '../Container/Container';
import { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import toast from 'react-hot-toast';
const Navbar = () => {
	// Auth
	const { user, logOut } = useAuth();

	// Dark mode control
	const [theme, setTheme] = useState('light');
	const html = document.documentElement;

	const toggoleTheme = () => {
		if (theme === 'light') {
			html.classList.remove('light');
			html.classList.add('dark');
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			html.classList.remove('dark');
			html.classList.add('light');
			setTheme('light');
			localStorage.setItem('theme', 'light');
		}
	};

	useEffect(() => {
		const currentTheme = localStorage.getItem('theme');
		html.classList.add(currentTheme);
		setTheme(currentTheme);
	}, [html.classList]);

	// LogOut event handler
	const handleLogOut = async () => {
		try {
			await logOut();
			toast.success('Log out successfull');
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	return (
		<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 sticky top-0">
			<Container>
				<nav
					className="relative sm:flex sm:items-center sm:justify-between px-5"
					aria-label="Global"
				>
					<div className="flex items-center justify-between">
						<Link to={'/'} className=" flex items-center justify-center">
							<img className="w-[100px] h-[50px]" src={logoImg} alt="" />
							<p className=" font-bold tracking-wider text-gray-900 dark:text-gray-200 text-xl">
								RideMate
							</p>
						</Link>

						{/* Small device Dark mode toggole */}

						<div className=" flex gap-5 items-center">
							<button
								onClick={toggoleTheme}
								className="flex group md:hidden flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer"
							>
								{theme === 'light' ? (
									<svg
										className="w-4 h-4"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
									</svg>
								) : (
									<svg
										className="w-4 h-4"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
									</svg>
								)}
							</button>
							{/* Small device menu icon */}
							<div className="sm:hidden">
								<button
									type="button"
									className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-sky-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
									data-hs-collapse="#navbar-collapse-with-animation"
									aria-controls="navbar-collapse-with-animation"
									aria-label="Toggle navigation"
								>
									<svg
										className="hs-collapse-open:hidden w-4 h-4"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
										/>
									</svg>
									<svg
										className="hs-collapse-open:block hidden w-4 h-4"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div
						id="navbar-collapse-with-animation"
						className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
					>
						<div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? 'text-sky-700 font-semibold'
										: 'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 transition-all duration-200 ease-in-out'
								}
							>
								Home
							</NavLink>
							<NavLink
								to="/services"
								className={({ isActive }) =>
									isActive
										? 'text-sky-700 font-medium'
										: 'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 transition-all duration-200 ease-in-out'
								}
							>
								Services
							</NavLink>
							<NavLink
								to="/blog"
								className={({ isActive }) =>
									isActive
										? 'text-sky-700 font-medium'
										: 'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 transition-all duration-200 ease-in-out'
								}
							>
								Blog
							</NavLink>

							{/* Dashboard */}

							{user ? (
								<div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
									<button
										type="button"
										className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
									>
										Dashboard
										<svg
											className="ml-2 w-2.5 h-2.5 text-gray-600"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											></path>
										</svg>
									</button>
									<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5  flex-col">
										<div className=" flex flex-col gap-5 p-2">
											<NavLink
												to="/my-services"
												className={({ isActive }) =>
													isActive
														? 'text-sky-700 font-medium'
														: 'font-medium text-gray-500 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-500 transition-all duration-200 ease-in-out'
												}
											>
												Manage-Services
											</NavLink>
											<NavLink
												to="/add-service"
												className={({ isActive }) =>
													isActive
														? 'text-sky-700 font-medium'
														: 'font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 transition-all duration-200 ease-in-out'
												}
											>
												Add-Service
											</NavLink>
											<NavLink
												to="/my-schedules"
												className={({ isActive }) =>
													isActive
														? 'text-sky-700 font-medium'
														: 'font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 transition-all duration-200 ease-in-out'
												}
											>
												My-Schedules
											</NavLink>
										</div>
									</div>
								</div>
							) : undefined}

							{/* Conditonal navbar */}

							{user ? (
								<div className=" flex items-center gap-2">
									{user?.photoURL ? (
										<div className="relative inline-block">
											<img
												className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
												src={user?.photoURL}
												alt="Image Description"
											/>
											<span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
										</div>
									) : (
										<div className="relative inline-block">
											<img
												className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
												src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
												alt="Image Description"
											/>
											<span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-400"></span>
										</div>
									)}
									<button
										onClick={handleLogOut}
										type="button"
										className="ml-1 pb-2 md:mb-0 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md  font-medium text-gray-100 hover:text-gray-50 bg-sky-500 hover:bg-sky-600  focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 text-sm dark:focus:ring-offset-gray-800 dark:hover:text-gray-100"
									>
										<svg
											className="w-4 h-4"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
										</svg>
										Log Out
									</button>
								</div>
							) : (
								<Link to={'/login'}>
									<button
										type="button"
										className="ml-1 pb-2 md:mb-0 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md  font-medium text-gray-100 hover:text-gray-50 bg-sky-500 hover:bg-sky-600  focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 text-sm dark:focus:ring-offset-gray-800 dark:hover:text-gray-100"
									>
										<svg
											className="w-4 h-4"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
										</svg>
										Login
									</button>
								</Link>
							)}

							{/* Dark mode toggole */}

							<button
								onClick={toggoleTheme}
								className=" hidden  group lg:inline-flex flex-shrink-0 justify-center items-center h-9 w-9 font-medium rounded-full text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer"
							>
								{theme === 'light' ? (
									<svg
										className="w-4 h-4"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
									</svg>
								) : (
									<svg
										className="w-4 h-4"
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
									</svg>
								)}
							</button>
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
};

export default Navbar;
