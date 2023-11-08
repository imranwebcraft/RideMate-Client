import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxios from '../../Hook/useAxios';
import Container from '../../Components/Container/Container';
import auth from '../../Config/firebase.config';
import mapImg from '../../assets/Images/map.png';
import bloob from '../../assets/SVG/blog.svg';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
	const axios = useAxios();

	// Get id from dynamic route
	const { id } = useParams();

	const [date, setDate] = useState();
	const [instruction, setInstruction] = useState();

	// Tanstack
	const { data: service } = useQuery({
		queryKey: ['service'],
		queryFn: async () => {
			const res = await axios.get(`/services/${id}`);
			return res;
		},
	});

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

	const singleService = service?.data;

	const {
		// _id,
		serviceName,
		serviceImage,
		serviceDescription,
		serviceProviderName,
		serviceProviderImage,
		serviceProviderEmail,
		price,
		serviceArea,
	} = singleService || {};

	console.log(singleService);

	return (
		<div>
			<Helmet>
				<title>{serviceName}</title>
			</Helmet>
			<div>
				<img
					className=" w-full h-full lg:w-[700px] lg:h-[700px] absolute lg:right-0"
					src={bloob}
				/>
			</div>
			<Container>
				{/* Heading */}
				<div className="max-w-2xl mx-auto text-center pt-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
						Service Portfolio
					</h2>
					<p className="mt-1 text-gray-600 dark:text-gray-400">
						A Closer Look at Our Service Menu
					</p>
				</div>

				{/* Steps */}
				<div>
					<div>
						<div className="overflow-hidden rounded-full bg-gray-200">
							<div className="h-2 w-1/2 rounded-full bg-sky-500"></div>
						</div>

						<ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
							<li className="flex items-center justify-start text-sky-600 sm:gap-1.5">
								<span className="hidden sm:inline"> Details </span>

								<svg
									className="h-6 w-6 sm:h-5 sm:w-5"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
									/>
								</svg>
							</li>

							<li className="flex items-center justify-center text-sky-600 sm:gap-1.5">
								<span className="hidden sm:inline"> Address </span>

								<svg
									className="h-6 w-6 sm:h-5 sm:w-5"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</li>

							<li className="flex items-center justify-end text-sky-600 sm:gap-1.5">
								<span className="hidden sm:inline"> Book </span>

								<svg
									fill="#0284C7"
									version="1.1"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									width="24px"
									height="24px"
									viewBox="-90.29 -90.29 1083.44 1083.44"
									xmlSpace="preserve"
									stroke="#0284C7"
									strokeWidth="0.009028600000000001"
									transform="matrix(1, 0, 0, 1, 0, 0)"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										<g>
											<g>
												<path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path>
												<path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path>
											</g>
										</g>
									</g>
								</svg>
							</li>
						</ol>
					</div>
				</div>

				{/* Show details of service */}

				<div className=" pt-10">
					<div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
						{/* Service Details */}
						<div className="p-2 mx-auto rounded-md dark:text-gray-100">
							<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
								<img
									src={serviceImage}
									className="w-full h-60 sm:h-96 dark:bg-gray-500"
								/>
								<div className="p-5 pb-10 m-4 mx-auto -mt-16 space-y-3 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100 shadow-md dark:bg-slate-800">
									<div className="space-y-2 flex justify-center items-center">
										<a className="inline-block text-2xl font-semibold sm:text-3xl">
											{serviceName}
										</a>
									</div>
									<div className="dark:text-gray-100 flex justify-center items-center">
										<p>{serviceDescription}</p>
									</div>
									<div className="p-4 flex items-center justify-center gap-2">
										<figure>
											<img
												className="h-[30px] w-[30px] bg-cover rounded-full"
												src={serviceProviderImage}
												alt="serviceProviderImage"
											/>
										</figure>
										<p className="font-semibold text-gray-800 dark:text-gray-200">
											{serviceProviderName}
										</p>
									</div>
									<p className="font-bold w-full text-center text-gray-800 dark:text-gray-200">
										Cost: {price}
									</p>
									{/* Modal */}

									<div>
										<div className="text-center">
											<button
												type="button"
												className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sky-500 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 transition-all text-sm dark:focus:ring-offset-gray-800"
												data-hs-overlay="#hs-modal-upgrade-to-pro"
											>
												Book Now
											</button>
										</div>

										<div
											id="hs-modal-upgrade-to-pro"
											className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto shadow-xl"
										>
											<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
												<div className="bg-white border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-400 dark:shadow-gray-800">
													<div className="p-4 sm:p-7">
														<div className="text-center">
															<img
																src={serviceImage}
																className="w-full h-60 sm:h-60 dark:bg-gray-500"
															/>
														</div>
														<div className="mt-8 sm:mt-10 divide-y divide-gray-200 dark:divide-gray-700">
															<form className=" space-y-4">
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
																		defaultValue={auth.currentUser.email}
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

																<div>
																	<label>Special Instruction:</label>

																	<textarea
																		onBlur={e => setInstruction(e.target.value)}
																		className="w-full border-gray-200 rounded-md text-sm focus:border-sky-500 focus:ring-sky-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
																		rows="4"
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
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Service Povider Details */}
						<div>
							{/* Heading */}
							<div className="max-w-2xl mx-auto text-center lg:mb-14 space-y-3">
								<h2 className="text-xl font-bold md:text-2xl md:leading-tight text-gray-900 dark:text-white">
									Hi I am {serviceProviderName}
								</h2>
								<div className=" flex justify-center items-center py-3 ">
									<img
										src={serviceProviderImage}
										className="sm:h-96 w-[200px] lg:h-[250px] rounded-md  dark:bg-gray-500"
									/>
								</div>
								<div className=" max-w-lg mx-auto">
									<p className="text-gray-800 dark:text-gray-300">
										Welcome to{' '}
										<span className="text-lg text-sky-500">
											&quot;{serviceName}&quot;
										</span>{' '}
										Currently you are viewing my service. My comprehensive
										service is dedicated to meeting your needs and providing
										exceptional value. We take pride in offering a wide range of
										features and benefits that are designed to make your life
										easier and more enjoyable.
									</p>
								</div>
								<h2 className="text-xl font-bold md:text-2xl md:leading-tight text-gray-900 dark:text-white">
									Service Area
								</h2>

								<h1 className=" text-xl font-semibold text-gray-800 dark:text-gray-300">
									{serviceArea}
								</h1>

								<div className="  bg-sky-100">
									<img
										src={mapImg}
										alt="service are map"
										className=" h-[250px] w-[100%]"
									/>
								</div>
								{/* Reviews */}
								<div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
									<div className="flex flex-col w-full">
										<h2 className="text-xl font-bold md:text-2xl md:leading-tight text-gray-900 dark:text-white">
											Customer reviews
										</h2>
										<div className="flex flex-wrap items-center justify-center mt-2 mb-1 space-x-2">
											<div className="flex">
												<button
													type="button"
													title="Rate 1 stars"
													aria-label="Rate 1 stars"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="w-6 h-6  text-yellow-500"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
													</svg>
												</button>
												<button
													type="button"
													title="Rate 2 stars"
													aria-label="Rate 2 stars"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="w-6 h-6 text-yellow-500"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
													</svg>
												</button>
												<button
													type="button"
													title="Rate 3 stars"
													aria-label="Rate 3 stars"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="w-6 h-6 text-yellow-500"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
													</svg>
												</button>
												<button
													type="button"
													title="Rate 4 stars"
													aria-label="Rate 4 stars"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="w-6 h-6 dark:text-gray-600"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
													</svg>
												</button>
												<button
													type="button"
													title="Rate 5 stars"
													aria-label="Rate 5 stars"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														className="w-6 h-6 dark:text-gray-600"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
													</svg>
												</button>
											</div>
											<span className="dark:text-gray-400 ">3 out of 5</span>
										</div>
										<p className="text dark:text-gray-400">
											820 global ratings
										</p>
										<div className="flex flex-col mt-4">
											<div className="flex items-center space-x-1">
												<span className="flex-shrink-0 w-12 text-sm font-semibold">
													5 star
												</span>
												<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
													<div className="bg-orange-300 h-4 w-5/6"></div>
												</div>
												<span className="flex-shrink-0 w-12 text-sm text-right font-semibold">
													83%
												</span>
											</div>
											<div className="flex items-center space-x-1">
												<span className="flex-shrink-0 w-12 text-sm font-semibold">
													4 star
												</span>
												<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
													<div className="bg-orange-300 h-4 w-4/6"></div>
												</div>
												<span className="flex-shrink-0 w-12 text-sm text-right font-semibold">
													67%
												</span>
											</div>
											<div className="flex items-center space-x-1">
												<span className="flex-shrink-0 w-12 text-sm font-semibold">
													3 star
												</span>
												<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
													<div className="bg-orange-300 h-4 w-3/6"></div>
												</div>
												<span className="flex-shrink-0 w-12 text-sm text-right font-semibold">
													50%
												</span>
											</div>
											<div className="flex items-center space-x-1">
												<span className="flex-shrink-0 w-12 text-sm font-semibold">
													2 star
												</span>
												<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
													<div className="bg-orange-300 h-4 w-2/6"></div>
												</div>
												<span className="flex-shrink-0 w-12 text-sm text-right font-semibold">
													33%
												</span>
											</div>
											<div className="flex items-center space-x-1">
												<span className="flex-shrink-0 w-12 text-sm font-semibold">
													1 star
												</span>
												<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
													<div className="bg-orange-300 h-4 w-1/6"></div>
												</div>
												<span className="flex-shrink-0 w-12 text-sm text-right font-semibold">
													17%
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ServiceDetails;
