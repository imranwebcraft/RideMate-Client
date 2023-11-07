import { NavLink, Outlet, useLocation } from 'react-router-dom';

const MySchedules = () => {
	const location = useLocation();
	return (
		<div className="py-10">
			{/* Heading */}
			<div className="max-w-2xl mx-auto text-center lg:mb-14">
				<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
					Schedule Management Center
				</h2>
				<p className="mt-1 text-gray-600 dark:text-gray-400">
					Manage Your Booked Services and Pending Bookings
				</p>
			</div>

			<div className=" max-w-[1220px] mx-auto">
				<div className="flex justify-center items-center gap-10">
					<NavLink
						to="/my-schedules"
						className={({ isActive }) =>
							isActive
								? 'text-sky-700 font-semibold bg-slate-800 px-2 rounded-md'
								: 'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover-text-gray-500 transition-all duration-200 ease-in-out rounded-md'
						}
					>
						My Booking
					</NavLink>
					<NavLink
						to="/my-schedules/my-pending-work"
						className={({ isActive }) =>
							isActive
								? 'text-sky-700 font-semibold bg-slate-800 px-2 rounded-md'
								: 'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover-text-gray-500 transition-all duration-200 ease-in-out rounded-md'
						}
					>
						My Pending Work
					</NavLink>
				</div>
				<div className=" ">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default MySchedules;
