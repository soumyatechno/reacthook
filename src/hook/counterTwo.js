import React, { useState } from 'react';

const CounterTwo = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	const handleIncrement = () => {
		for (let i = 0; i < 5; i++) {
			setCount((count) => count + 1);
		}
	};

	return (
		<div>
			Counter: {count}
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(0)}>Reset</button>
			<button onClick={handleIncrement}>IncrementBy5</button>
		</div>
	);
};

export default CounterTwo;
