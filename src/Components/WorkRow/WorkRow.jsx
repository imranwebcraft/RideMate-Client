import PropTypes from 'prop-types';
import { useState } from 'react';
const WorkRow = ({ work, mutate }) => {
	// eslint-disable-next-line no-unused-vars
	const [selectedStatus, setSelectedStatus] = useState('Pending');

	const {
		_id,
		serviceName,
		serviceImage,
		price,
		date,
		instruction,
		userEmail,
		status,
	} = work || {};

	const handleStatusChange = event => {
		const newStatus = event.target.value;

		const updatedData = {
			id: _id,
			status: newStatus,
		};

		mutate(updatedData);

		setSelectedStatus(newStatus);
	};
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
			<td className="px-5 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-start px-3 py-1 rounded-full gap-x-2 bg-gray-100 dark:bg-gray-800">
					<h2 className="text-sm font-normal text-sky-500">{userEmail}</h2>
				</div>
			</td>
			<td className="px-5 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-start px-3 py-1 rounded-full gap-x-2 bg-gray-100 dark:bg-gray-800">
					<h2 className="text-sm font-normal text-sky-500">{price} TK</h2>
				</div>
			</td>

			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
				{instruction?.length === 0 && (
					<p className=" text-red-300">Not Given</p>
				)}
				{instruction.length > 50
					? instruction.slice(0, 45) + '...'
					: instruction}
			</td>
			<td className="px-5 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-start px-3 py-1 rounded-full gap-x-2 ">
					<h2 className="text-sm font-normal dark:text-gray-200">{date}</h2>
				</div>
			</td>
			<td className="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div>
					<select
						name="type"
						onChange={handleStatusChange}
						className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
						value={status}
					>
						<option value="Pending">Pending</option>
						<option value="In Progress">In Progress</option>
						<option value="Confirm">Confirm</option>
					</select>
				</div>
			</td>
		</tr>
	);
};

WorkRow.propTypes = {
	work: PropTypes.object,
	mutate: PropTypes.func,
};

export default WorkRow;
