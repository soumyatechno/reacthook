import React, { useReducer } from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 10
};

const CounterTwo = () => {
	const reducer = (state, action) => {
		const { type, value } = action;
		const { firstCounter, secondCounter } = state;
		switch (type) {
			case 'increment':
				return { ...state, firstCounter: firstCounter + value };
			case 'decrement':
				return { ...state, firstCounter: firstCounter - value };
			case 'reset':
				return initialState;
			case 'increment5':
				return { ...state, firstCounter: firstCounter + value };
			case 'decrement5':
				return { ...state, firstCounter: firstCounter - value };
			case 'incremental':
				return { ...state, secondCounter: secondCounter + value };
			case 'decremental':
				return { ...state, secondCounter: secondCounter - value };
				deafult: return state;
		}
	};
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			Counters
			<h3>CountOne - {count.firstCounter}</h3>
			<h3>CountTwo - {count.secondCounter}</h3>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			<button onClick={() => dispatch({ type: 'increment5', value: 5 })}>Increment 5</button>
			<button onClick={() => dispatch({ type: 'decrement5', value: 5 })}>Decrement 5</button>
			<button onClick={() => dispatch({ type: 'incremental', value: 5 })}>Incremental</button>
			<button onClick={() => dispatch({ type: 'decremental', value: 5 })}>Decremental</button>
		</div>
	);
};

export default CounterTwo;
