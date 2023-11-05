import Banner from '../../Components/Header/Banner';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import TestimonialStats from '../../Components/TestimonialStats/TestimonialStats';
import Faq from '../FAQ/FAQ';
import FeatureOne from '../FeatureOne/FeatureOne';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<FeatureOne></FeatureOne>
			<TestimonialStats></TestimonialStats>
			<Faq></Faq>
			<NewsLetter></NewsLetter>
		</div>
	);
};

export default Home;
