import { useQuery } from '@tanstack/react-query';
import Container from '../../Components/Container/Container';
import useAxios from '../../Hook/useAxios';
import { useEffect, useState } from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { SyncLoader } from 'react-spinners';
import './service.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Services = () => {
	// const queryClient = useQueryClient();
	const [searchValue, setSearchValue] = useState('');
	// Hook
	const axios = useAxios();
	// Sate to manage show all button
	const [showAll, setShowAll] = useState(6);

	const handleSearch2 = e => {
		e.preventDefault();
		const form = e.target;
		const serachText = form.serviceName.value;
		setSearchValue(serachText);
	};

	// Search datd dynamically when user search by service name
	const {
		data: services,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['services', showAll, searchValue],
		queryFn: async () => {
			const res = axios.get(`/services?serviceName=${searchValue}`);
			return res;
		},
	});

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className="py-10 service-bg">
			<Helmet>
				<title>Ride Mate | Services</title>
			</Helmet>
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
				<form onSubmit={handleSearch2} className="mb-10 lg:mb-20">
					<div className="flex">
						<button
							className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200   dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
							type="button"
						>
							Search By Sevice Name
						</button>

						<div className="relative w-full">
							<input
								type="text"
								// onChange={e => setSearchValue(e.target.value)}
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

				{error ? (
					<div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
						<div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
							<svg
								className="w-10 h-10 text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="22" x2="2" y1="12" y2="12" />
								<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
								<line x1="6" x2="6.01" y1="16" y2="16" />
								<line x1="10" x2="10.01" y1="16" y2="16" />
							</svg>
							<p className="mt-5 text-gray-800 dark:text-gray-300">
								No data to show. Check Back later.
							</p>
						</div>
					</div>
				) : undefined}

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
