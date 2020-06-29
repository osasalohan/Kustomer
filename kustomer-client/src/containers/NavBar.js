import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import logo from '../images/k-logo.jpg';

class NavBar extends React.Component {
	logout = (e) => {
		e.preventDefault();
		this.props.logout();
	}
	
	renderSwitch = (userType) => {
		const { currentUser } = this.props;
		
		switch(userType) {
			case 'professional':
				return (
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to={`/professional/${currentUser.user.id}/profile`}>Edit Profile</Link>
						</li>
						<li>
							<Link to={`/professional/${currentUser.user.id}/newproject`}>Add a Project</Link>
						</li>
						<li>
							<Link to="/" onClick={this.logout}>Log Out</Link>
						</li>
					</ul>
				);
			case 'customer':
				return (
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to="/">Post a Job</Link>
						</li>
						<li>
							<Link to="/" onClick={this.logout}>Log Out</Link>
						</li>
					</ul>
				);
			default:
				return (
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li>
							<Link to="/signin">Log In</Link>
						</li>
					</ul>	
				);
		}
	}
	
	render() {
		const { currentUser } = this.props;
		
		return (
			<nav className="navbar navbar-expand">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">
							<img src={logo} alt="Kustomer home icon" />
						</Link>
					</div>
					{ this.renderSwitch(currentUser.user.userType) }
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, { logout })(NavBar);