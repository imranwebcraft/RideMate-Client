import Container from '../Container/Container';
import brand1 from '../../assets/Images/blader-removebg-preview.png';
import brand2 from '../../assets/Images/via.png';
import brand3 from '../../assets/Images/didi.png';
import brand4 from '../../assets/Images/gojek.png';
import brand5 from '../../assets/Images/grab-removebg-preview.png';
import brand7 from '../../assets/Images/uber3.png';
import brand8 from '../../assets/Images/lyft.png';

import './company.css';
import CountUp from 'react-countup';

const Company = () => {
	return (
		<div className="relative company-bg">
			<Container>
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					<div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
						<h2 className="text-sm font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
							Trusted by Our Riders and Carpooling Community
						</h2>
					</div>

					<div className="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
						<a className="flex-shrink-0 transition hover:-translate-y-1">
							<img className="w-[50px] h-[50px]" src={brand1} alt="" />
						</a>
						<a className="flex-shrink-0 transition hover:-translate-y-1">
							<img className="w-[100px] h-[50px]" src={brand2} alt="" />
						</a>
						<a className="flex-shrink-0 transition hover:-translate-y-1">
							<img className="w-[50px] h-[50px]" src={brand3} alt="" />
						</a>
						<a className="flex-shrink-0 transition hover:-translate-y-1">
							<img className="w-[100px] h-[50px]" src={brand8} alt="" />
						</a>
						<a className="flex-shrink-0 transition hover:-translate-y-1">
							<img className="w-[50px] h-[50px]" src={brand4} alt="" />
						</a>
						<a className="flex-shrink-0 transition hover:-translate-y-1">
							<img className="w-[100px] h-[50px]" src={brand5} alt="" />
						</a>

						<a className="flex-shrink-0 transition hover:-translate-y-1">
							<img className="w-[50px] h-[50px]" src={brand7} alt="" />
						</a>
					</div>

					<div className="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
						<div className="col-span-6 text-center">
							<h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
								<CountUp end={250} suffix="+" duration={3.5}></CountUp>
							</h4>
							<h4 className="text-sm text-gray-600 dark:text-gray-400">
								Available Routes
							</h4>
						</div>

						<div className="col-span-6 text-center">
							<h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
								<CountUp end={180} suffix="+" duration={3.5}></CountUp>
							</h4>
							<h4 className="text-sm text-gray-600 dark:text-gray-400">
								Active Users & Carpoolers
							</h4>
						</div>

						<div className="col-start-4 col-span-6 text-center">
							<h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
								<CountUp end={10} suffix="+" duration={3.5}></CountUp>
							</h4>
							<h4 className="text-sm text-gray-600 dark:text-gray-400">
								Specialized Carpooling Features
							</h4>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Company;
