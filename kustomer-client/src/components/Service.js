import React from 'react';

const Service = props => {
	const { image, alt, caption } = props;
	return(
		<div className="card service">
			<img className="card-img-top" src={image} alt={alt} />
			<div className="card-body">
				<p className="card-text">{caption}</p>
			</div>
		</div>
	);
}

export default Service;