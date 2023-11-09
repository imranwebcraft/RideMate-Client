import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hook/useAxios';
import auth from '../../Config/firebase.config';
import { SyncLoader } from 'react-spinners';
import BookingRow from '../../Components/BookingRow/BookingRow';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import noData from '../../assets/Lottie-Animation/NoData.json';

const MyBooking = () => {
	const axios = useAxios();

	const { data: bookings, isLoading } = useQuery({
		queryKey: ['bookings'],
		queryFn: async () => {
			const res = axios.get(
				`/user/bookings?userEmail=${auth?.currentUser?.email}`
			);
			return res;
		},
	});

	return (
		<div>
			{isLoading && (
				<div className=" bg-white dark:bg-slate-900 h-full w-full flex justify-center items-center">
					<SyncLoader color="#0284C7" />
				</div>
			)}
			{/* Show user addeded services */}
			<section className="container mx-auto">
				<div className="flex flex-col mt-6">
					<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							{bookings?.data.length > 0 ? (
								<div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
										<thead className="bg-gray-50 dark:bg-gray-800">
											<tr>
												<th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 flex justify-center items-center">
													<div className="flex items-center gap-x-3">
														<span>Service</span>
													</div>
												</th>
												<th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
													<div className="flex items-center justify-center gap-x-3">
														<span>Service Provider Info</span>
													</div>
												</th>
												<th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
													<button className="flex justify-center items-center gap-x-2">
														<span>Price</span>
													</button>
												</th>
												<th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
													<button className="flex items-center gap-x-2">
														<span>Instruction</span>
													</button>
												</th>
												<th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
													<div className="flex justify-center items-center">
														Date
													</div>
												</th>
												<th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
													<div className="flex justify-center items-center">
														Status
													</div>
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
											{/* Row */}

											{bookings?.data?.map(booking => (
												<BookingRow
													key={booking._id}
													booking={booking}
												></BookingRow>
											))}
										</tbody>
									</table>
								</div>
							) : (
								<div className="flex flex-col justify-center items-center w-[300px] h-full lg:w-[500px] lg:h-[500px] mx-auto">
									<Lottie animationData={noData}></Lottie>
									<h1 className="text-gray-900 dark:text-gray-300 text-center text-base lg:text-lg font-medium">
										You haven&apos;t booked any services yet. Start exploring
										and booking services to view them here.
									</h1>

									<Link className=" mt-5" to={'/services'}>
										<span className=" text-sky-600 font-medium underline decoration-2 underline-offset-2 hover:underline-offset-4 transition-all duration-200">
											View Services
										</span>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MyBooking;
<p>Booking</p>;
