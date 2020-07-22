import React from 'react';
import reviewImage from '../images/review.jpg';
// import { SwitchTransition, CSSTransition } from "react-transition-group";

class Reviews extends React.Component {
	constructor(props) {
		super(props);
		this.reviews = [
			{
				image: reviewImage,
				comment: 'Both photographers that covered my weddding did a damn good job. Would definitely recommend.',
				customer: 'Jenny'
			},
			{
				image: reviewImage,
				comment: 'My hair has never looked so beautiful.',
				customer: 'Jelly'
			},
			{
				image: reviewImage,
				comment: 'I really love this new soundproof basement. The installer did a fantastic job.',
				customer: 'Intestine murderer 3'
			}
		]
		this.state = {
			image: '',
			comment: '',
			customer: '',
			activeDiv: 0
		}
	}
	
	animateReview = () => {
		if(this.state.activeDiv === this.reviews.length - 1) {
			this.setState({
				...this.reviews[0],
				activeDiv: 0
			});
		} else {
			this.setState({
				...this.reviews[this.state.activeDiv + 1],
				activeDiv: this.state.activeDiv + 1
			});
		}
	}
	
	componentDidMount = () => {
		this.setState({ ...this.reviews[0] });
		setInterval(() => {
			this.animateReview();
		}, 3000)
	}
	
	render() {
		const { image, comment, customer, activeDiv } = this.state;
		const reviewTrackers = this.reviews.map((r, i) => (
			i === activeDiv ?
			(<div key={i} className="d-inline-block review-tracker active-tracker"></div>) :
			(<div key={i} className="d-inline-block review-tracker"></div>)
		))
		return(
			<div className="review-container d-flex justify-content-center">
				<div className="review d-flex flex-column align-items-center">
					<img src={image} alt="customer" />
					<p className="text-center">"{comment}"</p>
					<p className="text-center">{customer}</p>
					<div>{reviewTrackers}</div>
				</div>
			</div>
		);
	}
}

export default Reviews;