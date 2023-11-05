import PropTypes from 'prop-types';
const Container = ({ children }) => {
	return (
		<div className="max-w-[1200px] w-full mx-auto sm:px-6 lg:px-8">
			{children}
		</div>
	);
};
Container.propTypes = {
	children: PropTypes.node,
};

export default Container;
