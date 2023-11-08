import { useParams } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hook/useAxios';
import updateServiceAnimation from '../../assets/Lottie-Animation/update.json';
import Lottie from 'lottie-react';
import toast from 'react-hot-toast';
import auth from '../../Config/firebase.config';
import { Helmet } from 'react-helmet-async';

const UpdateService = () => {
	const axios = useAxios();
	const { id } = useParams();

	const { data: service } = useQuery({
		queryKey: ['service'],
		queryFn: async () => {
			const res = await axios.get(`/services/${id}`);
			return res;
		},
	});

	const { serviceName, serviceImage, price, serviceArea, serviceDescription } =
		service?.data || {};

	const handleServiceUpdate = async e => {
		e.preventDefault();
		const form = e.target;
		const updateServiceName = form.serviceName.value;
		const updateServiceImage = form.serviceImage.value;
		const updateServicePrice = form.servicePrice.value;
		const updateServiceArea = form.serviceArea.value;
		const updateServiceDescription = form.serviceDescription.value;

		const updateService = {
			updateServiceName,
			updateServiceImage,
			updateServicePrice,
			updateServiceArea,
			updateServiceDescription,
			updateServiceProviderEmail: auth?.currentUser?.email,
			updateServiceProviderName: auth?.currentUser?.displayName,
		};

		await axios
			.put(`/services/${id}`, updateService)
			.then(res => {
				if (res?.data?.modifiedCount) {
					toast.success('Service Updated');
				}
			})
			.catch(() => {
				toast.error('Something went wrong!😥');
			});
	};

	return (
		<div className="py-20">
			<Helmet>
				<title>Update Service</title>
			</Helmet>
			<Container>
				<div className="grid gap-3 grid-cols-1 md:grid-cols-2">
					{/* Add service form */}
					<div>
						<form
							onSubmit={handleServiceUpdate}
							className=" space-y-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4"
						>
							{/* Heading */}
							<div className="max-w-2xl mx-auto text-center lg:mb-14">
								<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
									Update Your Service
								</h2>
								<p className="mt-1 text-gray-600 dark:text-gray-400">
									Try to reach more people by offering reasonable cost.
								</p>
							</div>
							{/* Service Name */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Name
								</label>
								<input
									type="text"
									name="serviceName"
									className="py-3 px-4 block w-full border-gray-200 
									dark:bg-slate-900
									focus:border-sky-500
									rounded-lg text-sm  focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-gray-300 dark:focus:ring-sky-600
									 placeholder:tracking-wide
									 "
									placeholder="Enter your service name"
									defaultValue={serviceName}
								/>
							</div>
							{/* Service Image */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Image
								</label>
								<input
									type="text"
									name="serviceImage"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400  dark:focus:ring-sky-600
									placeholder:tracking-wide"
									placeholder="Image URL"
									defaultValue={serviceImage}
								/>
							</div>
							{/* Service Provider Name */}
							{/* <div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Provider Name
								</label>
								<input
									type="text"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 "
									defaultValue={auth?.currentUser?.displayName}
									disabled
								/>
							</div> */}
							{/* Service Provider Email */}
							{/* <div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Provider Email
								</label>
								<input
									type="text"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 "
									defaultValue={auth?.currentUser?.email}
									disabled
								/>
							</div> */}
							{/* Price */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Price
								</label>
								<input
									type="number"
									name="servicePrice"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 "
									placeholder="Service price"
									defaultValue={price}
								/>
							</div>
							{/* Service Area */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Area
								</label>
								<input
									type="text"
									name="serviceArea"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 "
									placeholder="Enter service area"
									defaultValue={serviceArea}
								/>
							</div>
							{/* Service Description */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Description
								</label>
								<textarea
									name="serviceDescription"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 "
									rows="3"
									placeholder="This is a textarea placeholder"
									defaultValue={serviceDescription}
								></textarea>
							</div>

							{/* Button */}
							<div className=" dark:border-gray-700">
								<button
									type="submit"
									className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 transition-all duration-200 tracking-wide"
								>
									Update Service
								</button>
							</div>
						</form>
					</div>
					{/* Animation */}
					<div className="w-full h-full flex justify-center items-center">
						<Lottie
							animationData={updateServiceAnimation}
							loop={true}
							autoplay={true}
						></Lottie>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default UpdateService;
