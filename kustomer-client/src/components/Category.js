import React from 'react';

const Category = props => {
	const { icon, category1, category2, color } = props;
	const style = { color: color }
	return(
		<div className="category d-flex flex-column text-center justify-content-center align-items-center">
			<i className={`fas fa-${icon}`} style={style}></i>
			<div className="text-center">{category1}</div>
			<div className="text-center">{category2}</div>
		</div>
	)
}

export default Category;