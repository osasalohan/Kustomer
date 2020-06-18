import React from 'react';
import { withRouter } from 'react-router-dom';


class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		const { customerAuth, professionalAuth, history } = this.props;
		const userType = e.target.id;
		(userType === 'customer' ? customerAuth('signin', this.state) : professionalAuth('signin', this.state))
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
	
	render() {
		const { errors, removeError, history } = this.props;
		const { email, password } = this.state;
		
		history.listen(() => {
			removeError();
		});
		
		return (
			<div className="row justify-content-md-center text-center">
				<div className="col-md-6">
					<form>
						{errors.message && (
							<div className="alert alert-danger">
								{errors.message}
							</div>
						)}
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
						<button
							type="button"
							id="customer"
							onClick={this.handleSubmit}
							className="btn btn-primary">
								Log In as a Customer
						</button>
						<button
							type="button"
							id="professional"
							onClick={this.handleSubmit}
							className="btn btn-primary">
								Log In as a Professional
						</button>
					</form>
				</div>
			</div>
	);
	}
}

export default withRouter(SignInForm);