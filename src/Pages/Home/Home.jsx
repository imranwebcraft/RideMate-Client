import Banner from '../../Components/Header/Banner';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import TestimonialStats from '../../Components/TestimonialStats/TestimonialStats';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Faq from '../../Components/FAQ/FAQ';
import FeatureOne from '../../Components/FeatureOne/FeatureOne';
import Company from '../../Components/Company/Company';
import TestimonialCarosouel from '../../Components/TestimonialCarosouel/TestimonialCarosouel';
import PopularService from '../../Components/PopularService/PopularService';
import { Helmet } from 'react-helmet-async';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Ride Mate | Home</title>
			</Helmet>
			<Banner></Banner>
			<Company></Company>
			<PopularService></PopularService>
			<FeatureOne></FeatureOne>
			<TestimonialStats></TestimonialStats>
			<TestimonialCarosouel></TestimonialCarosouel>
			<Faq></Faq>
			<ContactUs></ContactUs>
			<NewsLetter></NewsLetter>
		</div>
	);
};

export default Home;
