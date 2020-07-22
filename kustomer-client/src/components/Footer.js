import React from 'react';
import logo from '../images/k-logo.jpg';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	render() {
		return(
			<div>
				<div className="container footer">
					<div className="row">
						<div className="col-md-4">
							<div>
								<img src={logo} alt="Kustomer home icon" />
								<h6 className="d-inline-block">Kustomer</h6>
							</div>
							<p>Kustomer is an online jobs platform where users can get jobs & hire professional services. Register for 												Kustomer now to land your first gig, or to start receiving live bids from qualified Professionals in minutes!
							</p>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-6">
							<div className="container">
								<div className="row">
									<div className="col d-flex flex-column info">
										<div>Kustomer</div>
										<Link to="/">About</Link>
										<Link to="/">Careers</Link>
										<Link to="/">Partnerships</Link>
										<Link to="/">Privacy Policy</Link>
										<Link to="/">Terms of Service</Link>
									</div>
									<div className="col d-flex flex-column info">
										<div>Community</div>
										<Link to="/">Events</Link>
										<Link to="/">Affiliates</Link>
										<Link to="/">Invite a Friend</Link>
										<Link to="/">Become a Seller</Link>
									</div>
									<div className="col d-flex flex-column info">
										<div>Support</div>
										<Link to="/">Help & Support</Link>
										<Link to="/">Trust & Safety</Link>
										<Link to="/">Selling on Kustomer</Link>
										<Link to="/">Buying on Kustomer</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<footer>
						<hr/>
						<div className="d-flex justify-content-between">
							<p className="d-inline-block">© 2020 Kustomer Ltd, All Rights Reserved</p>
							<div>
								<a href="www.twitter.com"><i className="fab fa-twitter"></i></a>
								<a href="www.twitter.com"><i className="fab fa-facebook-square"></i></a>
								<a href="www.twitter.com"><i className="fab fa-instagram"></i></a>
								<a href="www.twitter.com"><i className="fab fa-linkedin"></i></a>
							</div>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default Footer;