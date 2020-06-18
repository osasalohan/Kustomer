import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import { authCustomer, authProfessional } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';

const Main = props => (
	<div className="container">
		<Switch>
			<Route exact path="/">
				<HomePage currentUser={props.currentUser} />
			</Route>
			<Route exact path="/signin">
				<SignInForm
					removeError={props.removeError}
					errors={props.errors}
					customerAuth={props.authCustomer}
					professionalAuth={props.authProfessional}
				/>
			</Route>
			<Route exact path="/signup">
				<SignUpForm
					removeError={props.removeError}
					errors={props.errors}
					customerAuth={props.authCustomer}
					professionalAuth={props.authProfessional}
				/>
			</Route>
		</Switch>
	</div>
);

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		errors: state.errors
	};
}

export default connect(mapStateToProps, { authCustomer, authProfessional, removeError })(Main);
