import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../assets/Images/rideMate.png';
import Container from '../Container/Container';
const Navbar = () => {
	return (
		<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
			<Container>
				<nav
					className="relative sm:flex sm:items-center sm:justify-between px-5"
					aria-label="Global"
				>
					<div className="flex items-center justify-between">
						<div className=" flex items-center justify-center">
							<img className="w-[100px] h-[50px]" src={logoImg} alt="" />
							<p className=" font-bold tracking-wider text-gray-900 dark:text-gray-200 text-xl">
								RideMate
							</p>
						</div>
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
											My-services
										</NavLink>
										<NavLink
											to="/add-service"
											className={({ isActive }) =>
												isActive
													? 'text-sky-700 font-medium'
													: 'font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 transition-all duration-200 ease-in-out'
											}
										>
											Add-service
										</NavLink>
										<NavLink
											to="/my-schedules"
											className={({ isActive }) =>
												isActive
													? 'text-sky-700 font-medium'
													: 'font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 transition-all duration-200 ease-in-out'
											}
										>
											My-schedules
										</NavLink>
									</div>
								</div>
							</div>

							<Link to={'/login'}>
								<button
									type="button"
									className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-gray-500 font-medium text-gray-500 dark:text-gray-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 transition-all duration-300 text-sm dark:focus:ring-offset-gray-800 m-2 md:mx-2"
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
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
};

export default Navbar;
