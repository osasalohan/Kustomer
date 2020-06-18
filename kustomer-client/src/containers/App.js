import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import store from '../store';
import NavBar from './NavBar';
import Main from './Main';
import { setAuthToken, setCurrentUser } from '../store/actions/auth';

if(localStorage.jwtoken) {
	setAuthToken(localStorage.jwtoken);
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtoken)));
	} catch(err) {
		store.dispatch(setCurrentUser({}));
	}
}

const App = () => (
	<Provider store={store}>
		<Router>
			<div className="landing">
				<NavBar />
				<Main />
			</div>
		</Router>
	</Provider>
)

export default App;
