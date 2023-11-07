import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Container from '../../Components/Container/Container';
import useAxios from '../../Hook/useAxios';
import auth from '../../Config/firebase.config';
import ServiceRow from './ServiceRow';
import toast from 'react-hot-toast';

const MyServices = () => {
	const axios = useAxios();

	// Context theke asbe
	const queryClient = useQueryClient();

	const { data: services } = useQuery({
		queryKey: ['userService'],
		queryFn: async () => {
			const res = await axios.get(
				`/services?serviceProviderEmail=${auth?.currentUser?.email}`
			);
			return res;
		},
	});

	const { mutate } = useMutation({
		mutationKey: ['serviceRow'],
		mutationFn: async id => {
			const res = await axios.delete(`/services/${id}`);
			return res;
		},
		onSuccess: () => {
			toast.success('Service delete successfull');
			queryClient.invalidateQueries({ queryKey: ['userService'] });
		},
	});

	console.log(services?.data);

	return (
		<div className=" py-10">
			<Container>
				{/* Heading */}
				<div className="max-w-2xl mx-auto text-center lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
						Service Management Center
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Update, Delete, and Review Your Services
					</p>
				</div>
				{/* Show user addeded services */}
				<section className="container px-4 mx-auto">
					<div className="flex flex-col mt-6">
						<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
								<div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
										<thead className="bg-gray-50 dark:bg-gray-800">
											<tr>
												<th
													scope="col"
													className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
												>
													<div className="flex items-center gap-x-3">
														<span>Service</span>
													</div>
												</th>
												<th
													scope="col"
													className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
												>
													<button className="flex items-center gap-x-2">
														<span>Price</span>
													</button>
												</th>
												<th
													scope="col"
													className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
												>
													<button className="flex items-center gap-x-2">
														<span>Service Area</span>
													</button>
												</th>
												<th
													scope="col"
													className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
												>
													Description
												</th>
												<th
													scope="col"
													className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
												>
													Action
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
											{/* Row */}

											{services?.data?.map(service => (
												<ServiceRow
													key={service._id}
													service={service}
													mutate={mutate}
												></ServiceRow>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default MyServices;
