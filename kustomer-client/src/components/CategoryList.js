import React from 'react';
import Category from './Category';

const CategoryList = () => {
	const pairs = [
		['home', 'Home', '& Garden', 'green'],
		['heartbeat', 'Health', '& Wellbeing', 'red'],
		['theater-masks', 'Beauty', 'Services', 'teal'],
		['handshake', 'Business', 'Services', 'dark-grey'],
		['calendar-alt', 'Wedding', '& Events', 'teal'],
		['ellipsis-h', 'Other', 'Services', 'inherit']
	];
	let categories = pairs.map((pair,i) => (
		<Category
			key={i}
			icon={pair[0]}
			category1={pair[1]}
			category2={pair[2]}
			color={pair[3]}
		/>
	));
	return(
		<div>
			<div className="text-center header">Find What You Need</div>
			<div className="d-flex flex-wrap justify-content-center">{categories}</div>
		</div>
	);
}

export default CategoryList;