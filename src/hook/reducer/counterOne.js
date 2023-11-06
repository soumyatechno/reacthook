import React, { useReducer } from 'react';

const initialState = 0;

const CounterOne = () => {
	const reducer = (state, action) => {
		switch (action) {
			case 'increment':
				return state + 1;
			case 'decrement':
				return state - 1;
			case 'reset':
				return initialState;
				deafult: return state;
		}
	};
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			CounterOne
			<h3>Count - {count}</h3>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
		</div>
	);
};

export default CounterOne;
