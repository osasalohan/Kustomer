import React from 'react';
import { withRouter } from 'react-router-dom';


class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			phoneNumber: '',
			category: '',
			occupation: '',
			professional: false
		}
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		const { customerAuth, professionalAuth, history } = this.props;
		const { professional } = this.state;
		(professional ? professionalAuth('signup', this.state) : customerAuth('signup', this.state))
		.then(() => {
			history.push('/');
		})
		.catch(() => {
			return;
		});
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	toggleUserType = (e) => {
		e.preventDefault();
		e.target.id === 'professional' ?
		this.setState({ professional: true }) :
		this.setState({ professional: false })
	}
	
	render() {
		const { errors, removeError, history } = this.props;
		const { email, password, firstName, lastName, phoneNumber, category, occupation, professional } = this.state;
		
		history.listen(() => {
			removeError();
		});
		
		return (
			<div className="row justify-content-md-center text-center">
				<div className="col-md-6">
					<button
						type="button"
						id="customer"
						onClick={this.toggleUserType}
						className={`btn ${professional ? 'btn-light' : 'btn-primary'}`}>
							Register as a Customer
					</button>
					<button
						type="button"
						id="professional"
						onClick={this.toggleUserType}
						className={`btn ${professional ? 'btn-primary' : 'btn-light'}`}>
							Register as a Professional
					</button>
					<form onSubmit={this.handleSubmit}>
						{errors.message && (
							<div className="alert alert-danger">
								{errors.message}
							</div>
						)}
						<label htmlFor="firstName">First Name:</label>
						<input
							className="form-control"
							type="text"
							id="firstName"
							name="firstName"
							value={firstName}
							onChange={this.handleChange}
						/>
						<label htmlFor="lastName">Last Name:</label>
						<input
							className="form-control"
							type="text"
							id="lastName"
							name="lastName"
							value={lastName}
							onChange={this.handleChange}
						/>
						<label htmlFor="email">Email:</label>
						<input
							className="form-control"
							type="text"
							id="email"
							name="email"
							value={email}
							onChange={this.handleChange}
						/>
						<label htmlFor="password">Password:</label>
						<input
							className="form-control"
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={this.handleChange}
						/>
						{professional && (
							<div>
								<label htmlFor="phoneNumber">Phone Number:</label>
								<input
									className="form-control"
									type="text"
									id="phoneNumber"
									name="phoneNumber"
									value={phoneNumber}
									onChange={this.handleChange}
								/>
								<label htmlFor="category">Category:</label>
								<select
									className="form-control"
									name="category"
									id="category"
									value={category}
									onChange={this.handleChange}>
										<option value="Home Services">Home Services</option>
										<option value="Remote Services">Remote Services</option>
								</select>
								<label htmlFor="occupation">Occupation:</label>
								<input
									className="form-control"
									type="text"
									id="occupation"
									name="occupation"
									value={occupation}
									onChange={this.handleChange}
								/>
							</div>
						)}
						<button type="submit" className="btn btn-primary btn-block btn-lg">
							Sign Up
						</button>
					</form>
				</div>
			</div>
	);
	}
}

export default withRouter(SignUpForm);