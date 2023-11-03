import React, { Component } from 'react';

export class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			name: ''
		};
	}

	handleClick = () => {
		this.setState({ count: this.state.count + 1 });
	};

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) console.log('UseEffect: Updating the count');
		document.title = `Clicked ${this.state.count} times`;
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button onClick={this.handleClick}>Counter {this.state.count}</button>
			</div>
		);
	}
}

export default Counter;
