import React, { Component } from 'react';

class Test extends Component {
	state = {
		title: '',
		body: ''
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json()).then((data) =>
			this.setState({
				title: data.body,
				body: data.body
			})
		);
	}

	render() {
		const { title, body } = this.state;
		return (
			<div>
				<h1>{title}</h1>
				<br />
				<br />
				<h4>{body}</h4>
			</div>
		);
	}
}
export default Test;
