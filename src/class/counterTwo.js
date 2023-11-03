import React, { Component } from 'react';

export class CounterFive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	handleClick = () => {
		this.setState((prevCount) => {
			return { count: prevCount.count + 5 };
		});
	};

	render() {
		return (
			<div>
				Counter :{this.state.count}
				<button onClick={this.handleClick}>IncrementFive</button>
			</div>
		);
	}
}

export default CounterFive;
