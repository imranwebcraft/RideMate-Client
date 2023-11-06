import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hook/useAxios';
import Container from '../Container/Container';
import PopularServiceCard from '../PopularServiceCard/PopularServiceCard';
import { SyncLoader } from 'react-spinners';

const PopularService = () => {
	// Hook
	const axios = useAxios();

	const { data: services, isLoading } = useQuery({
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

				<div className="pt-16 flex justify-center items-center">
					<button className="py-3 px-4  flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
						Show All
					</button>
				</div>
			</Container>
		</div>
	);
};

export default PopularService;
