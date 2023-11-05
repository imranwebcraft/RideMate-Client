import { Link } from 'react-router-dom';
import logoImg from '../../assets/Images/rideMate.png';
import error from '../../assets/Lottie-Animation/error.json';
import fourAnimation from '../../assets/Lottie-Animation/404.json';
import Lottie from 'lottie-react';
const Error = () => {
	return (
		<html className="h-screen">
			<body className="flex h-full">
				<div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
					<header className="mb-auto flex justify-center z-50 w-full py-4">
						<nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
							<div className="flex items-center justify-between">
								<div className=" flex items-center justify-center">
									<img className="w-[100px] h-[50px]" src={logoImg} alt="" />
									<p className=" font-bold tracking-wider text-gray-900 dark:text-gray-200 text-xl">
										RideMate
									</p>
								</div>
							</div>
						</nav>
					</header>

					<div className="text-center px-4 sm:px-6 lg:px-8">
						<div className=" w-[400px] mx-auto">
							<Lottie animationData={error}></Lottie>
						</div>
						<div className=" w-[150px] mx-auto">
							<Lottie animationData={fourAnimation}></Lottie>
						</div>
						<h1 className="block text-2xl font-bold text-white"></h1>
						<p className="mt-3 text-gray-600 dark:text-gray-400">
							Oops, something went wrong.
						</p>
						<p className="text-gray-600 dark:text-gray-400">
							Sorry, we couldn&apos;t find your page.
						</p>
						<Link
							to={'/'}
							className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
						>
							<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-sky-500 hover:text-sky-600 focus:outline-none focus:ring-2 ring-offset-white focus:ring-sky-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900 hover:bg-gray-200 dark:hover:bg-slate-700 hover:cursor-pointer">
								<svg
									className="w-2.5 h-2.5"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<path
										d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
								Back To Home
							</a>
						</Link>
					</div>

					<footer className="mt-auto text-center py-5">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<p className="text-sm text-gray-500">
								Ride-Meat © All Rights Reserved. 2023.
							</p>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
};

export default Error;
