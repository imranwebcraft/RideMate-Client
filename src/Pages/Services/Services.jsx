import { useQuery } from '@tanstack/react-query';
import Container from '../../Components/Container/Container';
import useAxios from '../../Hook/useAxios';
import { useState } from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { SyncLoader } from 'react-spinners';

const Services = () => {
	// Hook
	const axios = useAxios();
	// Sate to manage show all button
	const [showAll, setShowAll] = useState(6);

	const { data: services, isLoading } = useQuery({
		queryKey: ['services', showAll],
		queryFn: async () => {
			const res = axios.get('/services');
			return res;
		},
	});

	return (
		<div className="py-10">
			<Container>
				{/* Heading */}
				<div className="max-w-2xl mx-auto text-center lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
						All Avaiable Services
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Discover a Variety of Services
					</p>
				</div>

				{/* Seacrch Field */}
				<form className="mb-10 lg:mb-20">
					<div className="flex">
						<label
							htmlFor="search-dropdown"
							className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Your Email
						</label>
						<button
							id="dropdown-button"
							data-dropdown-toggle="dropdown"
							className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200   dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
							type="button"
						>
							Search By Sevice Name
						</button>

						<div className="relative w-full">
							<input
								type="text"
								name="serviceName"
								className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-sky-500"
								placeholder="Search here.."
								required
							/>
							<button
								type="submit"
								className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-sky-600 rounded-r-lg border border-sky-500 hover:bg-sky-800 focus:ring-2 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
							>
								<svg
									className="w-4 h-4"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
								<span className="sr-only">Search</span>
							</button>
						</div>
					</div>
				</form>

				{isLoading ? (
					<div className=" bg-white dark:bg-slate-900 h-full w-full flex justify-center items-center">
						<SyncLoader color="#0284C7" />
					</div>
				) : (
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
						{services?.data?.slice(0, showAll).map(service => (
							<ServiceCard key={service._id} service={service}></ServiceCard>
						))}
					</div>
				)}

				{services?.length === showAll || (
					<div
						onClick={() => setShowAll(services?.length)}
						to={'/services'}
						className="pt-16 flex justify-center items-center"
					>
						<button className="py-3 px-4 duration-200 flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
							Show All
						</button>
					</div>
				)}
			</Container>
		</div>
	);
};

export default Services;
