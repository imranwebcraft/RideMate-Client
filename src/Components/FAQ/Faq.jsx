import Container from '../Container/Container';
import bloob from '../../assets/SVG/bloobleft.svg';

const Faq = () => {
	return (
		<div className="">
			<div className=" hidden lg:block">
				<img
					className=" w-full h-full lg:w-[700px] lg:h-[700px] absolute lg:left-0"
					src={bloob}
				/>
			</div>
			<Container>
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					{/* Heading */}
					<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
						<h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
							Frequently Asked Questions
						</h2>
						<p className="mt-1 text-gray-600 dark:text-gray-400">
							Find answers to your most common questions about our offerings.
						</p>
					</div>

					<div className="max-w-2xl mx-auto">
						<div className="hs-accordion-group">
							<div
								className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active"
								id="hs-basic-with-title-and-arrow-stretched-heading-one"
							>
								<button
									className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
									aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
								>
									How do I find a ride or a carpool near me?
									<svg
										className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
									<svg
										className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</button>
								<div
									id="hs-basic-with-title-and-arrow-stretched-collapse-one"
									className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
									aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
								>
									<p className="text-gray-800 dark:text-gray-200">
										Finding a ride or carpool is easy with our platform. Simply
										enter your starting point and destination, and our system
										will match you with nearby drivers or riders going in the
										same direction. You can then choose the most convenient
										option based on your preferences and schedule.
									</p>
								</div>
							</div>

							<div
								className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
								id="hs-basic-with-title-and-arrow-stretched-heading-two"
							>
								<button
									className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
									aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
								>
									Is it safe to share rides with strangers?
									<svg
										className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
									<svg
										className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</button>
								<div
									id="hs-basic-with-title-and-arrow-stretched-collapse-two"
									className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
									aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
								>
									<p className="text-gray-800 dark:text-gray-200">
										Safety is our top priority. All users undergo thorough
										background checks, and we provide user ratings and reviews
										to help you make an informed decision. Additionally, you can
										share your trip details with a trusted contact, ensuring
										peace of mind during your journey.
									</p>
								</div>
							</div>

							<div
								className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
								id="hs-basic-with-title-and-arrow-stretched-heading-three"
							>
								<button
									className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
									aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
								>
									How is the cost of a ride or carpool calculated?
									<svg
										className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
									<svg
										className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</button>
								<div
									id="hs-basic-with-title-and-arrow-stretched-collapse-three"
									className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
									aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
								>
									<p className="text-gray-800 dark:text-gray-200">
										Ride costs are calculated based on factors like distance,
										time, and the number of passengers. The app will provide you
										with an estimated fare before you confirm your ride.
										It&apos;s transparent, so you know what to expect, and there
										are no hidden charges.
									</p>
								</div>
							</div>

							<div
								className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
								id="hs-basic-with-title-and-arrow-stretched-heading-four"
							>
								<button
									className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
									aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
								>
									What if I need to change my pickup location or drop-off point?
									<svg
										className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
									<svg
										className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</button>
								<div
									id="hs-basic-with-title-and-arrow-stretched-collapse-four"
									className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
									aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
								>
									<p className="text-gray-800 dark:text-gray-200">
										We understand that plans can change. You can easily update
										your pickup or drop-off location through the app. Just make
										sure to communicate with your driver or fellow carpoolers to
										coordinate the changes smoothly.
									</p>
								</div>
							</div>

							<div
								className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
								id="hs-basic-with-title-and-arrow-stretched-heading-five"
							>
								<button
									className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
									aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
								>
									Do I need to have my own car to participate in carpooling?
									<svg
										className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
									<svg
										className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</button>
								<div
									id="hs-basic-with-title-and-arrow-stretched-collapse-five"
									className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
									aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
								>
									<p className="text-gray-800 dark:text-gray-200">
										No, you don&apos;t need to have your own car. Carpooling is
										about sharing rides, so you can join a carpool as a
										passenger. Drivers offer available seats in their vehicles,
										and you can choose to ride with them for a convenient and
										cost-effective journey.
									</p>
								</div>
							</div>

							<div
								className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]"
								id="hs-basic-with-title-and-arrow-stretched-heading-six"
							>
								<button
									className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
									aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
								>
									What happens in case of unexpected delays or cancellations?
									<svg
										className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
									<svg
										className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</button>
								<div
									id="hs-basic-with-title-and-arrow-stretched-collapse-six"
									className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
									aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
								>
									<p className="text-gray-800 dark:text-gray-200">
										We understand that unforeseen circumstances can occur. In
										case of delays or cancellations, it&apos;s important to
										communicate with your fellow carpoolers or driver. Many
										users appreciate understanding and flexibility, and you can
										reschedule or find an alternative ride when needed.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Faq;
