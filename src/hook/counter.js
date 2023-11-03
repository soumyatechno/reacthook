import React, { useState, useEffect, useRef } from 'react';

function Counter() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	const handleClicked = () => setCount(count + 1);
	const shouldLog = useRef(false);

	useEffect(() => {
		if (shouldLog.current) {
			console.log('useEffect - Updating document title');
			document.title = `Clicked ${count} times`;
		} else {
			shouldLog.current = true;
		}
	}, [count]);

	return (
		<div onClick={handleClicked}>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<button>Counter {count}</button>
		</div>
	);
}

export default Counter;
