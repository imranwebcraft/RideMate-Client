import Banner from '../../Components/Header/Banner';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import TestimonialStats from '../../Components/TestimonialStats/TestimonialStats';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Faq from '../../Components/FAQ/FAQ';
import FeatureOne from '../../Components/FeatureOne/FeatureOne';
import Company from '../../Components/Company/Company';
import TestimonialCarosouel from '../../Components/TestimonialCarosouel/TestimonialCarosouel';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Company></Company>
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
