import toast from 'react-hot-toast';
import Container from '../../Components/Container/Container';
import useAxios from '../../Hook/useAxios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import auth from '../../Config/firebase.config';
import { useState } from 'react';

const BookService = () => {
	const { id } = useParams();
	const axios = useAxios();

	const [date, setDate] = useState();
	const [instruction, setInstruction] = useState();

	const { data: service } = useQuery({
		queryKey: ['service'],
		queryFn: async () => {
			const res = await axios.get(`/services/${id}`);
			return res;
		},
	});

	const { serviceName, serviceImage, serviceProviderEmail, price } =
		service?.data || {};

	const { mutate } = useMutation({
		mutationKey: ['service'],
		mutationFn: async bookingData => {
			const res = await axios.post('/user/create-booking', bookingData);
			console.log(res?.data);
			if (res?.data.insertedId) {
				toast.success('Booking confirmed');
			}
			return res;
		},
	});

	return (
		<div className=" py-10">
			<Container>
				{/* Heading */}
				<div className="max-w-2xl mx-auto text-center lg:mb-10">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
						Unlock Seamless Service Experiences
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						Book and Elevate Your Service Journey
					</p>
				</div>
				<div className="bg-white border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700  dark:shadow-gray-800 shadow-lg">
					<div className="p-4 sm:p-7">
						<div>
							<img
								src={serviceImage}
								className="sm:h-60 w-full h-full rounded-md dark:bg-gray-500"
							/>
						</div>
						<div className="mt-8 sm:mt-10 divide-y divide-gray-200 dark:divide-gray-700">
							<form className=" space-y-5">
								<div className=" flex items-center justify-center">
									<label className=" flex-[1] block font-medium dark:text-white">
										Service Name:
									</label>
									<input
										type="text"
										className=" flex-[2] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 disabled:opacity-50 disabled:pointer-events-none"
										defaultValue={serviceName}
										disabled
									/>
								</div>
								<div className=" flex items-center justify-center">
									<label className=" flex-[1] block font-medium dark:text-white">
										Provider Email:
									</label>
									<input
										type="email"
										className=" flex-[2] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 disabled:opacity-50 disabled:pointer-events-none"
										defaultValue={serviceProviderEmail}
										disabled
									/>
								</div>
								<div className=" flex items-center justify-center">
									<label className=" flex-[1] block font-medium dark:text-white">
										User Email:
									</label>
									<input
										type="text"
										className=" flex-[2] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 disabled:opacity-50 disabled:pointer-events-none"
										defaultValue={auth?.currentUser?.email}
										disabled
									/>
								</div>
								<div className=" flex items-center justify-center">
									<label className=" flex-[1] block font-medium dark:text-white">
										Date:
									</label>
									<input
										onBlur={e => setDate(e.target.value)}
										type="date"
										className=" flex-[2] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									/>
								</div>
								<div className=" flex items-center justify-center">
									<label className=" flex-[1] block font-medium dark:text-white">
										Price:
									</label>
									<input
										type="text"
										className=" flex-[2] py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 disabled:opacity-50 disabled:pointer-events-none"
										defaultValue={price}
										disabled
									/>
								</div>

								<div className=" space-y-2">
									<label className=" text-gray-900 font-medium dark:text-white">
										Special Instruction:
									</label>

									<textarea
										onBlur={e => setInstruction(e.target.value)}
										className="w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
										rows="10"
										placeholder="Enter any additional order notes..."
									></textarea>
								</div>
							</form>
						</div>
					</div>
					<div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t dark:border-gray-700">
						<button
							onClick={() =>
								mutate({
									serviceName,
									serviceImage,
									serviceProviderEmail,
									price,
									date,
									instruction,
									userEmail: auth?.currentUser?.email,
									status: 'pending',
								})
							}
							type="button"
							className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
						>
							Purchase This Service
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default BookService;
