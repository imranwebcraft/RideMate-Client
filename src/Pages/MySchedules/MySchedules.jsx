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
						className={
							location.pathname === '/my-schedules'
								? 'text-sky-700 font-semibold bg-gray-100 dark:bg-slate-800 px-2 py-2 rounded-md'
								: 'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover-text-gray-500 transition-all duration-200 ease-in-out px-2 py-2'
						}
					>
						My Booking
					</NavLink>
					<NavLink
						to="/my-schedules/my-pending-work"
						className={
							location.pathname.includes('/my-pending-work')
								? 'text-sky-700 font-semibold bg-gray-100 dark:bg-slate-800 px-2 py-2 rounded-md'
								: 'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover-text-gray-500 transition-all duration-200 ease-in-out px-2 py-2'
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
