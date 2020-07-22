import React from 'react';
import Service from './Service';
import cleaningImage from '../images/cleaning.jpg';
import gardeningImage from '../images/gardening.jpg';
import handymanImage from '../images/handyman.jpg';

const HomeAndGarden = props => (
	<div>
		<div className="text-center header">Home & Garden</div>
		<div className="d-flex flex-wrap justify-content-center">
			<Service image={gardeningImage} alt="gardening" caption="Gardening"/>
			<Service image={cleaningImage} alt="cleaning" caption="House Cleaning"/>
			<Service image={handymanImage} alt="handy worker" caption="Handy Worker"/>
		</div>
	</div>
);

export default HomeAndGarden;