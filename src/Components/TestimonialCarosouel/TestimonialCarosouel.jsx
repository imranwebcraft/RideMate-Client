import Slider from 'react-slick';

// import { FcPrevious } from 'react-icons/fc';
// import { FcNext } from 'react-icons/fc';

import './TestimonialCarosouel.css';

const TestimonialCarosouel = () => {
	const settings = {
		className: 'center',
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnHover: true,
		centerMode: true,
		infinite: true,
		centerPadding: '10px',
		slidesToShow: 3,
		speed: 500,
		dots: true,
		arrows: false,
		// nextArrow: <FcNext></FcNext>,
		// prevArrow: <FcPrevious></FcPrevious>,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div>
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className=" max-w-xl mx-auto text-center space-y-2 py-20">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
						Happy Commuters, Happy Testimonials
					</h1>
					<p className=" dark:text-gray-400">
						See what our customers have to say about their ride-sharing
						experiences.
					</p>
				</div>
				<Slider {...settings}>
					{/* One */}
					<div className="flex h-auto">
						<div className="flex flex-col max-w-sm rounded-lg mx-4 my-6 shadow-md">
							<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-slate-800">
								<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-8 h-8 text-indigo-400"
									>
										<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
										<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
									</svg>
									Carpooling has transformed my daily routine. The convenience
									and cost-saving aspects of this service are incredible.
									I&apos;ve met wonderful people along the way.
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="absolute right-0 w-8 h-8 text-indigo-400"
									>
										<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
										<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
									</svg>
								</p>
							</div>
							<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-500 dark:text-gray-900">
								<img
									src="https://source.unsplash.com/50x50/?portrait?1"
									alt=""
									className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
								/>
								<p className="text-xl font-semibold leading-relaxed text-gray-100">
									Alomgir Hossain
								</p>
								<p className="text-sm uppercase text-gray-100">Teacher, NSU</p>
							</div>
						</div>
					</div>
					{/* Two */}
					<div className="flex h-auto">
						<div className="flex flex-col max-w-sm rounded-lg mx-4 my-6 shadow-md">
							<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-slate-800">
								<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-8 h-8 text-indigo-400"
									>
										<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
										<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
									</svg>
									My experience with carpooling has been nothing short of
									amazing. I used to spend hours stuck in traffic alone, but now
									I enjoy the company of fellow commuters and reduce my travel
									expenses.
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="absolute right-0 w-8 h-8 text-indigo-400"
									>
										<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
										<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
									</svg>
								</p>
							</div>
							<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-500 dark:text-gray-900">
								<img
									src="https://source.unsplash.com/50x50/?portrait?1"
									alt=""
									className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
								/>
								<p className="text-xl font-semibold text-gray-100">
									Fatema Khatun
								</p>
								<p className="text-sm uppercase text-gray-100">
									Student, Dhaka Univercity
								</p>
							</div>
						</div>
					</div>
					{/* Three */}
					<div className="flex h-auto">
						<div className="flex flex-col max-w-sm rounded-lg mx-4 my-6 shadow-md">
							<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-slate-800">
								<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-8 h-8 text-indigo-400"
									>
										<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
										<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
									</svg>
									Ride-sharing has been a delightful experience. It&apos;s not
									just about getting to my destination; it&apos;s about the
									journey itself. I&apos;ve had the pleasure of meeting diverse
									people, and we often take turns sharing interesting stories
									and experiences.
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="absolute right-0 w-8 h-8 text-indigo-400"
									>
										<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
										<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
									</svg>
								</p>
							</div>
							<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-500 dark:text-gray-900">
								<img
									src="https://source.unsplash.com/50x50/?portrait?1"
									alt=""
									className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
								/>
								<p className="text-xl font-semibold text-gray-100">
									Billal Mia
								</p>
								<p className="text-sm uppercase text-gray-100">
									Local Market Saler
								</p>
							</div>
						</div>
					</div>
					{/* Four */}
					<div className="flex h-auto">
						<div className="flex flex-col max-w-sm rounded-lg mx-4 my-6 shadow-md">
							<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-slate-800">
								<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-8 h-8 text-indigo-400"
									>
										<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
										<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
									</svg>
									Being a student means budgeting every penny. Carpooling has
									been a lifesaver in that regard. It&apos;s not only
									economical, but I&apos;ve also made new friends who share my
									enthusiasm for learning.
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="absolute right-0 w-8 h-8 text-indigo-400"
									>
										<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
										<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
									</svg>
								</p>
							</div>
							<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-500 dark:text-gray-900">
								<img
									src="https://source.unsplash.com/50x50/?portrait?1"
									alt=""
									className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
								/>
								<p className="text-xl font-semibold  text-gray-100">
									Alvi Nisan
								</p>
								<p className="text-sm uppercase text-gray-100">Bussinessman</p>
							</div>
						</div>
					</div>
					{/* Five */}
					<div className="flex h-auto">
						<div className="flex flex-col max-w-sm rounded-lg mx-4 my-6 shadow-md">
							<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-slate-800">
								<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-8 h-8 text-indigo-400"
									>
										<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
										<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
									</svg>
									My daily commute used to be a hassle until I discovered this
									carpooling platform. Now, it&apos;s a smooth and
									cost-effective journey. I&apos;ve met fantastic people who
									have become friends, and we navigate traffic together.
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="absolute right-0 w-8 h-8 text-indigo-400"
									>
										<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
										<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
									</svg>
								</p>
							</div>
							<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-500 dark:text-gray-900">
								<img
									src="https://source.unsplash.com/50x50/?portrait?1"
									alt=""
									className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
								/>
								<p className="text-xl font-semibold  text-gray-100">
									Sheikh Rahman
								</p>
								<p className="text-sm uppercase text-gray-100">Bussinessman</p>
							</div>
						</div>
					</div>
					<div className="flex h-auto">
						<div className="flex flex-col max-w-sm rounded-lg mx-4 my-6 shadow-md">
							<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-slate-800">
								<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="w-8 h-8 text-indigo-400"
									>
										<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
										<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
									</svg>
									Carpooling is a brilliant way to share rides and costs. My
									journey to work has become more enjoyable and economical,
									thanks to this service. It&apos;s not just about saving money;
									it&apos;s about contributing to a greener planet.
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
										fill="currentColor"
										className="absolute right-0 w-8 h-8 text-indigo-400"
									>
										<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
										<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
									</svg>
								</p>
							</div>
							<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-sky-500 dark:text-gray-900">
								<img
									src="https://source.unsplash.com/50x50/?portrait?1"
									alt=""
									className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
								/>
								<p className="text-xl font-semibold  text-gray-100">
									Sohrab Hossain
								</p>
								<p className="text-sm uppercase text-gray-100">Teacher, AKHS</p>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default TestimonialCarosouel;
