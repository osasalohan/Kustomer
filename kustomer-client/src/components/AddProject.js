import React from 'react';
import { apiCall } from '../services/api';
import { withRouter } from 'react-router-dom';


class AddProject extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: ''
		}
	}
	
	handleSubmit = (e) => {
		const { currentUser } = this.props;
		e.preventDefault();
		const files = document.getElementById('images').files;
		const formData = new FormData();
		for(var i=0; i<files.length; i++) {
			formData.append('files', files[i]);
		}
		apiCall('post', `/api/professionals/${currentUser.user.id}/portfolio`, this.state)
		.then(project => apiCall('post', `/api/${currentUser.user.id}/projectpics/${project._id}`, formData, true))
		.catch(err => console.log(err));
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render() {
		const { errors, removeError, history } = this.props;
		const { title, description } = this.state;
		
		history.listen(() => {
			removeError();
		});
		
		return (
			<div className="row justify-content-md-center text-center">
				<div className="col-md-6">
					<form
						encType="multipart/form-data"
						onSubmit={this.handleSubmit}	
					>
						{errors.message && (
							<div className="alert alert-danger">
								{errors.message}
							</div>
						)}
						<label htmlFor="title">Title:</label>
							<input
								className="form-control"
								type="text"
								id="title"
								name="title"
								value={title}
								onChange={this.handleChange}
							/>
						<label htmlFor="description">Description:</label>
							<textarea
								className="form-control"
								id="description"
								name="description"
								value={description}
								onChange={this.handleChange}
							/>
						<label htmlFor="images">Project Pictures:</label>
							<input
								className="form-control"
								type="file"
								name="file"
								id="images"
								accept=".jpg, .jpeg, .png"
								multiple
							/>
						<button
							type="submit"
							onClick={this.handleSubmit}
							className="btn btn-primary">
								Add Project
						</button>
					</form>
				</div>
			</div>
	);
	}
}

export default withRouter(AddProject);