import React from 'react';
import Service from './Service';
import djImage from '../images/dj.jpg';
import photographyImage from '../images/photography.jpg';
import decorationImage from '../images/decoration.jpg';

const WeddingAndEvents = props => (
	<div>
		<div className="text-center header">Wedding & Events</div>
		<div className="d-flex flex-wrap justify-content-center">
			<Service image={djImage} alt="dj" caption="DJ"/>
			<Service image={photographyImage} alt="photography" caption="Photography"/>
			<Service image={decorationImage} alt="decoration" caption="Decorations"/>
		</div>
	</div>
);

export default WeddingAndEvents;