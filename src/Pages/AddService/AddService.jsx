import Lottie from 'lottie-react';
import Container from '../../Components/Container/Container';
import addService from '../../assets/Lottie-Animation/Addservice.json';
import auth from '../../Config/firebase.config';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useAxios from '../../Hook/useAxios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const AddService = () => {
	const axios = useAxios();

	const [serviceName, setServiceName] = useState('');
	const [serviceImage, setServiceImage] = useState('');
	const [price, setPrice] = useState(null);
	const [serviceArea, setServiceArea] = useState('');
	const [serviceDescription, setServiceDescription] = useState('');

	const { mutate } = useMutation({
		mutationKey: ['service'],
		mutationFn: async addServiceData => {
			const res = await axios.post('/add-service', addServiceData);
			console.log(res?.data);
			if (res?.data.insertedId) {
				toast.success('Service added to the database');
			}
			return res;
		},
		onSuccess: () => {
			document.getElementById('reset-form').reset();
		},
	});

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className="py-20">
			<Helmet>
				<title>Add Service</title>
			</Helmet>
			<Container>
				<div className="grid gap-3 grid-cols-1 md:grid-cols-2">
					{/* Add service form */}
					<div>
						<form
							id="reset-form"
							className=" space-y-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4"
						>
							{/* Heading */}
							<div className="max-w-2xl mx-auto text-center lg:mb-10">
								<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
									Add a New Service
								</h2>
								<p className="mt-1 text-gray-600 dark:text-gray-400">
									Help Us Grow Our Service Catalog
								</p>
							</div>
							{/* Service Name */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Name
								</label>
								<input
									onBlur={e => setServiceName(e.target.value)}
									type="text"
									className="py-3 px-4 block w-full border-gray-200 
									dark:bg-slate-900
									focus:border-sky-500
									rounded-lg text-sm  focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-gray-300 dark:focus:ring-sky-600
									 placeholder:tracking-wide
									 "
									placeholder="Enter your service name"
								/>
							</div>
							{/* Service Image */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Image
								</label>
								<input
									onBlur={e => setServiceImage(e.target.value)}
									type="text"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400  dark:focus:ring-sky-600
									placeholder:tracking-wide"
									placeholder="Image URL"
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
									onBlur={e => setPrice(e.target.value)}
									type="number"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 "
									placeholder="Service price"
								/>
							</div>
							{/* Service Area */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Area
								</label>
								<input
									onBlur={e => setServiceArea(e.target.value)}
									type="text"
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 "
									placeholder="Enter service area"
								/>
							</div>
							{/* Service Description */}
							<div>
								<label className="block text-sm font-medium mb-2 dark:text-white">
									Service Description
								</label>
								<textarea
									onBlur={e => setServiceDescription(e.target.value)}
									className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 "
									rows="3"
									placeholder="This is a textarea placeholder"
								></textarea>
							</div>

							{/* Button */}
							<div className=" dark:border-gray-700">
								<button
									onClick={() =>
										mutate({
											serviceName,
											serviceImage,
											price,
											serviceArea,
											serviceDescription,
											serviceProviderEmail: auth?.currentUser?.email,
											serviceProviderName: auth?.currentUser?.displayName,
											serviceProviderImage: auth?.currentUser?.photoURL,
										})
									}
									type="button"
									className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 transition-all duration-200 tracking-wide"
								>
									Add Service
								</button>
							</div>
						</form>
					</div>
					{/* Animation */}
					<div className="w-full h-full flex justify-center items-center">
						<Lottie
							animationData={addService}
							loop={true}
							autoplay={true}
						></Lottie>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default AddService;
