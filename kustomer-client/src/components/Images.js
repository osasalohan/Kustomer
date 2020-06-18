import React from 'react';

class Images extends React.Component {
	componentDidMount() {
		fetch('/images')
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}
	
	render() {
		return (
			<div>
				<img src="https://todos-api.run-us-west2.goorm.io/images" alt="dp" id="img" />
			</div>
		);
	}
}

export default Images;