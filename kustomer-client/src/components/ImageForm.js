import React from 'react';

class ImageForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		const file = document.getElementById('image').files[0];
		const formData = new FormData();
		formData.append('file', file)
		fetch('/images', {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err));
	}
	
	render() {
		return (
			<form 
				encType="multipart/form-data"
				onSubmit={this.handleSubmit}
			>
				<input
					type="file"
					name="file"
					id="image"
					accept=".jpg, .jpeg, .png"
				/>
				<button type="submit">Upload</button>
			</form>
		);
	}
}

export default ImageForm;