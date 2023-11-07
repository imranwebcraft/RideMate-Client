import PropTypes from 'prop-types';
const BookingRow = ({ booking }) => {
	console.log(Object.keys(booking).join(','));

	const {
		serviceName,
		serviceImage,
		serviceProviderEmail,
		price,
		date,
		instruction,
		status,
	} = booking || {};

	return (
		<tr>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center gap-x-3">
					<div className="flex items-center gap-x-2">
						<img
							className="object-cover w-20 h-20 rounded-md"
							src={serviceImage}
						/>
						<div>
							<h2 className="font-medium text-gray-800 dark:text-white">
								{serviceName}
							</h2>
						</div>
					</div>
				</div>
			</td>
			<td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-start px-3 py-1 rounded-full gap-x-2 bg-gray-100 dark:bg-gray-800">
					<h2 className="text-sm font-normal text-sky-500">
						{serviceProviderEmail}
					</h2>
				</div>
			</td>
			<td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-start px-3 py-1 rounded-full gap-x-2 bg-gray-100 dark:bg-gray-800">
					<h2 className="text-sm font-normal text-sky-500">{price} TK</h2>
				</div>
			</td>

			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
				{instruction?.length === 0 && (
					<p className=" text-red-300">
						You provide no specific instruction for your booking
					</p>
				)}
				{instruction.length > 50
					? instruction.slice(0, 45) + '...'
					: instruction}
			</td>
			<td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-start px-3 py-1 rounded-full gap-x-2 ">
					<h2 className="text-sm font-normal dark:text-gray-200">{date}</h2>
				</div>
			</td>
			<td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-start px-3 py-1 rounded-full gap-x-2 bg-gray-200 dark:bg-gray-800 ">
					<h2 className="text-sm font-normal dark:text-gray-200">{status}</h2>
				</div>
			</td>
		</tr>
	);
};

BookingRow.propTypes = {
	booking: PropTypes.object,
};
export default BookingRow;
