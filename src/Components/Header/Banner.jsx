import { Typewriter } from 'react-simple-typewriter';
import { FaCarTunnel } from 'react-icons/fa6';

import bloob from '../../assets/SVG/Bloob.svg';

const Banner = () => {
	return (
		<div className="relative">
			<div>
				<img
					className=" w-full h-full lg:w-[700px] lg:h-[700px] absolute lg:right-0"
					src={bloob}
				/>
			</div>

			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-5 md:py-16 lg:py-48 pb-10">
				<div className="flex justify-center">
					<a
						className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
						href="#"
					>
						Connect your ride partner
						<span className="flex items-center gap-x-1">
							<span className="border-l border-gray-200 text-sky-600 pl-2 dark:text-sky-500">
								Explore
							</span>
							<svg
								className="w-2.5 h-2.5 text-sky-600"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</span>
					</a>
				</div>

				<div className="mt-5 text-center mx-auto">
					<h1 className="block font-bold text-gray-800 text-4xl md:text-4xl lg:text-5xl dark:text-gray-200">
						Connecting Ride . Sharing Adventures .
						{/* Carpooling Community: Drive. Share. Thrive */}
					</h1>
				</div>

				<div className="mt-5 text-center mx-auto">
					<h1 className="block font-semibold text-gray-800 text-3xl md:text-5xl lg:text-6xl dark:text-gray-200">
						<span className=" m-5">Save</span>
						<span className=" mr-2 bg-clip-text bg-gradient-to-tl from-sky-500  to-green-500 text-transparent">
							<Typewriter
								words={['Money.', 'Environment.']}
								loop={true}
								cursor
								cursorStyle="_"
								typeSpeed={80}
								deleteSpeed={90}
								delaySpeed={1000}
							/>
						</span>
					</h1>
				</div>

				<div className="mt-5 max-w-3xl text-center mx-auto">
					<p className="text-lg text-gray-600 dark:text-gray-400">
						&quot;Connecting journeys, sharing adventures. Join us and be part
						of a transformative travel experience. Share more than a ride—share
						the joy of the journey!&quot;
					</p>
				</div>

				<div className="grid gap-3 w-full sm:inline-flex sm:justify-center px-6 pt-6">
					<a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-500 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800 hover:cursor-pointer">
						<FaCarTunnel className=" text-base"></FaCarTunnel>
						Find a ride service
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
