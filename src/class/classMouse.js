import React, { Component } from 'react';

class ClassMouse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			x: 0,
			y: 0
		};
	}

	loginMousePosition = (e) => {
		this.setState({
			x: e.clientX,
			y: e.clientY
		});
	};

	componentDidMount() {
		window.addEventListener('mousemove', this.loginMousePosition);
	}

	render() {
		return (
			<div>
				X - {this.state.x} Y - {this.state.y}
			</div>
		);
	}
}

export default ClassMouse;
