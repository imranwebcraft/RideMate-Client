import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceRow = ({ service, mutate }) => {
	const {
		_id,
		serviceName,
		serviceImage,
		price,
		serviceArea,
		serviceDescription,
	} = service || {};

	console.log(_id);

	return (
		<tr>
			<td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
				<div className="inline-flex items-center gap-x-3">
					<div className="flex items-center gap-x-2">
						<img
							className="object-cover rounded-md w-32 h-32"
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
					<h2 className="text-sm font-normal text-sky-500">{price} TK</h2>
				</div>
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
				{serviceArea}
			</td>
			<td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
				{serviceDescription.length > 50
					? serviceDescription.slice(0, 45) + '...'
					: serviceDescription}
			</td>

			<td className="px-4 py-4 text-sm whitespace-nowrap">
				<div className="flex items-center gap-x-6">
					<button
						onClick={() => mutate(_id)}
						className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</button>
					<Link
						to={`update-services/${_id}`}
						className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
							/>
						</svg>
					</Link>
				</div>
			</td>
		</tr>
	);
};
ServiceRow.propTypes = {
	service: PropTypes.object,
	mutate: PropTypes.func,
};

export default ServiceRow;
