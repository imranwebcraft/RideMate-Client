import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Container from '../../Components/Container/Container';
import useAxios from '../../Hook/useAxios';
import auth from '../../Config/firebase.config';
import ServiceRow from './ServiceRow';
import toast from 'react-hot-toast';
import { SyncLoader } from 'react-spinners';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import noData from '../../assets/Lottie-Animation/NoData.json';
import Lottie from 'lottie-react';

const MyServices = () => {
	const axios = useAxios();

	// Context theke asbe
	const queryClient = useQueryClient();

	const { data: services, isLoading } = useQuery({
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

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className="py-10 px-3">
			<Helmet>
				<title>Service Management Center</title>
			</Helmet>

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
				{isLoading && (
					<div className=" bg-white dark:bg-slate-900 h-full w-full flex justify-center items-center">
						<SyncLoader color="#0284C7" />
					</div>
				)}
				{/* Show user addeded services */}
				<section className="container px-4 mx-auto">
					<div className="flex flex-col mt-6">
						<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
								{services?.data.length > 0 ? (
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
								) : (
									<div className="flex flex-col justify-center items-center w-[400px] h-full lg:w-[500px] lg:h-[500px] mx-auto">
										<Lottie animationData={noData}></Lottie>
										<h1 className=" text-gray-900 dark:text-gray-300 text-center text-lg font-medium">
											You haven&apos;t added any services yet. Please add
											services to view them here.
										</h1>
										<Link className=" mt-5" to={'/add-service'}>
											<span className=" text-sky-600 font-medium underline decoration-2 underline-offset-2 hover:underline-offset-4 transition-all duration-200">
												Add Service
											</span>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default MyServices;
