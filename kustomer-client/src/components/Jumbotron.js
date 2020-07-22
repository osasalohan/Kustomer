import React from 'react';

class Jumbotron extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
	}
	
	handleClick = (e) => {
		e.preventDefault();
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	render() {
		return(
			<div className="jumbotron jumbotron-fluid d-flex justify-content-center align-items-center">
				<div className="container d-flex flex-column">
					<h4>KUSTOMER</h4>
					<h1>Find the perfect professional for you</h1>
					<div className="input-group">
						<input
							className="form-control mr-3"
							type="text"
							name="search"
							value={this.state.search}
							placeholder="Search for a service"
							onChange={this.handleChange}
						/>
						<button
							type="button"
							className="btn btn-primary"
							onClick={this.handleClick}
						>
							Search
						</button>
					</div>
					<p>Photographer, Painter, Plumber, etc</p>
				</div>
			</div>
		);
	}
}

export default Jumbotron;