import Container from '../Container/Container';

const NewsLetter = () => {
	return (
		<div className="dark:bg-slate-900">
			<Container>
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
					<div className="grid md:grid-cols-2 gap-8">
						<div className="max-w-md">
							<h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
								Subscribe
							</h2>
							<p className="mt-3 text-gray-600 dark:text-gray-400">
								Subscribe to exciting announcment and discount.
							</p>
						</div>

						<form>
							<div className="w-full sm:max-w-lg md:ml-auto">
								<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
									<div className="w-full">
										<label className="sr-only">Search</label>
										<input
											type="text"
											id="hero-input"
											name="hero-input"
											className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-sky-500 focus:ring-sky-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-300"
											placeholder="Enter your email"
										/>
									</div>
									<a
										className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-sky-600 hover:bg-sky-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
										href="#"
									>
										Subscribe
									</a>
								</div>
								<p className="text-center md:text-left mt-3 text-sm text-gray-400">
									No spam, unsubscribe at any time
								</p>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NewsLetter;
