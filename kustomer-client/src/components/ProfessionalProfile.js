import React from 'react';
import { apiCall } from '../services/api';
import defaultImage from '../images/k-logo.jpg';

class ProfessionalProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageAvailable: false
		}
	}
	
	handleSubmit = e => {
		const { currentUser } = this.props;
		e.preventDefault();
		const file = document.getElementById('image').files[0];
		console.log(document.getElementById('image').files)
		const formData = new FormData();
		formData.append('file', file)
		apiCall('post', `/api/${currentUser.user.id}/profilepic`, formData, true)
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err));
		// this.setState({ imageAvailable: true });
	}
	
	render() {
		const { imageAvailable } = this.state;
		const { currentUser } = this.props;
		
		return (
			<div>
				<form 
					encType="multipart/form-data"
					onSubmit={this.handleSubmit}
				>
					<input
						className="form-control"
						type="file"
						name="file"
						id="image"
						accept=".jpg, .jpeg, .png"
					/>
					<button type="submit">Upload</button>
				</form>
				<div>
					<img
						className="img-thumbnail"
						src={ 
							imageAvailable ? 
							`https://todos-api.run-us-west2.goorm.io/api/${currentUser.user.id}/profilepic` : 
							defaultImage
						}
						alt="dp" 
					/>
				</div>
			</div>
		);
	}
}

export default ProfessionalProfile;