import React from 'react';
import Service from './Service';
import makeupImage from '../images/makeup.jpg';
import salonImage from '../images/salon.jpg';
import beautySalonImage from '../images/beautySalon.jpg';

const BeautyServices = props => (
	<div>
		<div className="text-center header">Beauty Services</div>
		<div className="d-flex flex-wrap justify-content-center">
			<Service image={makeupImage} alt="makeup" caption="Make Up"/>
			<Service image={salonImage} alt="salon" caption="Salon At Home"/>
			<Service image={beautySalonImage} alt="beauty salon" caption="Beauty Salon"/>
		</div>
	</div>
);

export default BeautyServices;