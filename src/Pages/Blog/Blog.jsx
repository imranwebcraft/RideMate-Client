import Container from '../../Components/Container/Container';
import blog1 from '../../assets/Images/blog1.avif';
import authr from '../../assets/Images/imran.jpg';
import bloob from '../../assets/SVG/blog.svg';
const Blog = () => {
	return (
		<div>
			<div>
				<img
					className=" w-full h-full lg:w-[700px] lg:h-[700px] absolute lg:right-0"
					src={bloob}
				/>
			</div>
			<Container>
				{/* Header */}
				<div className=" text-center space-y-2 pt-10">
					<h1 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900 dark:text-white">
						Read our latest news
					</h1>
					<p className=" dark:text-gray-400">
						We&apos;ve helped some great companies brand, design and get to
						market.
					</p>
				</div>
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					<div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
						<a className="group rounded-xl overflow-hidden">
							<div className="sm:flex">
								<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
									<img
										className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
										src={blog1}
										alt="Image Description"
									/>
								</div>

								<div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
									<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
										The Green Revolution
									</h3>
									<p className="mt-3 text-gray-600 dark:text-gray-400">
										Explore how carpooling is playing a crucial role in reducing
										greenhouse gas emissions.
									</p>
									<p className="mt-4 inline-flex items-center gap-x-1.5 text-sky-600 decoration-2 hover:underline font-medium">
										Read more
										<svg
											className="w-2.5 h-2.5"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
										>
											<path
												d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											/>
										</svg>
									</p>
								</div>
							</div>
						</a>

						<a className="group rounded-xl overflow-hidden">
							<div className="sm:flex">
								<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
									<img
										className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
										src="https://images.unsplash.com/photo-1600671672613-65bf96a518f9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt="Image Description"
									/>
								</div>

								<div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
									<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
										Unlocking the Benefits of Ride-Sharing
									</h3>
									<p className="mt-3 text-gray-600 dark:text-gray-400">
										Learn about the convenience and accessibility of
										ride-sharing services.
									</p>
									<p className="mt-4 inline-flex items-center gap-x-1.5 text-sky-600 decoration-2 hover:underline font-medium">
										Read more
										<svg
											className="w-2.5 h-2.5"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
										>
											<path
												d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											/>
										</svg>
									</p>
								</div>
							</div>
						</a>

						<a className="group rounded-xl overflow-hidden">
							<div className="sm:flex">
								<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
									<img
										className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
										src="https://images.unsplash.com/photo-1675315976521-a4fa9c913139?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt="Image Description"
									/>
								</div>

								<div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
									<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
										Carpool Communities
									</h3>
									<p className="mt-3 text-gray-600 dark:text-gray-400">
										Discover how carpool communities are fostering connections
										and friendships among commuters while sharing rides.
									</p>
									<p className="mt-4 inline-flex items-center gap-x-1.5 text-sky-600 decoration-2 hover:underline font-medium">
										Read more
										<svg
											className="w-2.5 h-2.5"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
										>
											<path
												d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											/>
										</svg>
									</p>
								</div>
							</div>
						</a>

						<a className="group rounded-xl overflow-hidden">
							<div className="sm:flex">
								<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
									<img
										className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
										src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
										alt="Image Description"
									/>
								</div>

								<div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
									<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
										People program models
									</h3>
									<p className="mt-3 text-gray-600 dark:text-gray-400">
										Six approaches to bringing your People strategy to life
									</p>
									<p className="mt-4 inline-flex items-center gap-x-1.5 text-sky-600 decoration-2 hover:underline font-medium">
										Read more
										<svg
											className="w-2.5 h-2.5"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
										>
											<path
												d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											/>
										</svg>
									</p>
								</div>
							</div>
						</a>
					</div>
				</div>

				<div>
					<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
						<div className="grid sm:grid-cols-1  gap-6 mb-10 lg:mb-14">
							<div className="grid lg:grid-cols-2 gap-6">
								<a className="group relative block" href="#">
									<div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
										<img
											className="w-full h-full absolute top-0 left-0 object-cover"
											src="https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmlkZXxlbnwwfHwwfHx8MA%3D%3D"
											alt="Image Description"
										/>
									</div>

									<div className="absolute top-0 inset-x-0 z-10">
										<div className="p-4 flex flex-col h-full sm:p-6">
											<div className="flex items-center">
												<div className="flex-shrink-0">
													<img
														className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
														src={authr}
														alt="Image Description"
													/>
												</div>
												<div className="ml-2.5 sm:ml-4">
													<h4 className="font-semibold text-white">
														Imran Hossain
													</h4>
													<p className="text-xs text-white/[.8]">
														Sep 09, 2023
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className="absolute bottom-0 inset-x-0 z-10">
										<div className="flex flex-col h-full p-4 sm:p-6">
											<h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
												The Future of Carpooling
											</h3>
											<p className="mt-2 text-white/[.8]">
												Stay ahead of the curve by learning about the latest
												innovations and trends
											</p>
										</div>
									</div>
								</a>

								<a className="group relative block" href="#">
									<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
										<img
											className="w-full h-full absolute top-0 left-0 object-cover"
											src="https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmlkZXxlbnwwfHwwfHx8MA%3D%3D"
											alt="Image Description"
										/>
									</div>

									<div className="absolute top-0 inset-x-0 z-10">
										<div className="p-4 flex flex-col h-full sm:p-6">
											<div className="flex items-center">
												<div className="flex-shrink-0">
													<img
														className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
														src={authr}
														alt="Image Description"
													/>
												</div>
												<div className="ml-2.5 sm:ml-4">
													<h4 className="font-semibold text-white">
														Imran Hossain
													</h4>
													<p className="text-xs text-white/[.8]">
														Septembor 30, 2023
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className="absolute bottom-0 inset-x-0 z-10">
										<div className="flex flex-col h-full p-4 sm:p-6">
											<h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
												Carpooling Etiquette
											</h3>
											<p className="mt-2 text-white/[.8]">
												Brush up on carpooling etiquette to ensure a harmonious
												and enjoyable experience for everyone sharing the ride.
											</p>
										</div>
									</div>
								</a>
							</div>
						</div>

						<div className="text-center">
							<div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
								<div className="py-3 px-4 flex items-center gap-x-2">
									<p className="text-gray-600 dark:text-gray-400">
										Want to read more?
									</p>
									<a
										className="inline-flex items-center gap-x-1.5 text-sky-600 decoration-2 hover:underline font-medium"
										href="../docs/index.html"
									>
										Go here
										<svg
											className="w-2.5 h-2.5"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
										>
											<path
												d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Blog;
