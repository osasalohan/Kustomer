import React from 'react';

class SecondaryJumbotron extends React.Component {
	handleClick = (e) => {
		e.preventDefault();
	}
	
	render() {
		return(
			<div>
				<div className="sec-jumbotron jumbotron d-flex justify-content-center align-items-center">
					<div className="d-flex flex-column align-items-center">
						<h2 className="text-center">Find the perfect Professional for you today</h2>
						<h5 className="text-center">We got all your needs covered</h5>
						<button
									type="button"
									className="btn btn-lg btn-primary text-center"
									onClick={this.handleClick}
								>
									Get Started
								</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SecondaryJumbotron;