import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hook/useAxios';
import Container from '../Container/Container';
import PopularServiceCard from '../PopularServiceCard/PopularServiceCard';
import { SyncLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const PopularService = () => {
	// Hook
	const axios = useAxios();

	const {
		data: services,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['services'],
		queryFn: async () => {
			const res = axios.get('/services');
			return res;
		},
	});

	const maxServiceCard = 4;

	return (
		<div className=" py-20">
			<Container>
				{/* Heading */}
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
						Popular Services
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Discover Our Most-Requested Services
					</p>
				</div>

				{isLoading ? (
					<div className=" bg-white dark:bg-slate-900 h-full w-full flex justify-center items-center">
						<SyncLoader color="#0284C7" />
					</div>
				) : (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
						{services?.data?.slice(0, maxServiceCard).map(service => (
							<PopularServiceCard
								key={service._id}
								service={service}
							></PopularServiceCard>
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
								Server Busy. Check Back later.
							</p>
						</div>
					</div>
				) : (
					<Link
						to={'/services'}
						className="pt-16 flex justify-center items-center"
					>
						<button className="py-3 px-4 duration-200 flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
							Show All
						</button>
					</Link>
				)}
			</Container>
		</div>
	);
};

export default PopularService;
