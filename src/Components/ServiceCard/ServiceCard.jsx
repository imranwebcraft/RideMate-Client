import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
	const {
		_id,
		serviceName,
		serviceImage,
		serviceDescription,
		serviceProviderName,
		serviceProviderImage,
		price,
	} = service || {};

	return (
		<div>
			<div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
				<img
					className="w-full h-60 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
					src={serviceImage}
					alt="service Image"
				/>

				<div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg hover:scale-[1.05] transition-all duration-200 md:w-64 dark:bg-gray-800">
					<h3 className="py-2 font-bold tracking-wide text-center text-gray-800 dark:text-gray-200">
						{serviceName}
					</h3>
					<p className="text-center text-gray-800 dark:text-gray-400">
						{serviceDescription.length > 100
							? serviceDescription.slice(0, 80) + '...'
							: serviceDescription}
					</p>

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

					<div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
						<span className="font-bold text-gray-800 dark:text-gray-200">
							{price} TK
						</span>
						<Link
							to={`/services/${_id}`}
							className="px-2 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-sky-600 dark:hover:bg-sky-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
						>
							See Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.object,
};

export default ServiceCard;
