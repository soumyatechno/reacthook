import React, { Component } from 'react';

export class IntervalClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.tick = this.tick.bind(this);
	}

	componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	tick() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return <div>{this.state.count}</div>;
	}
}

export default IntervalClass;
