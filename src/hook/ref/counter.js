import React, { useRef } from 'react';

const Counter = () => {
	const counterRef = useRef(0);
	const handleClick = () => {
		counterRef.current++;
		alert(counterRef.current);
	};
	return (
		<div>
			<button onClick={handleClick}>Click</button>
		</div>
	);
};

export default Counter;
