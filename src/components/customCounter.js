import React, { useState } from 'react';
import useTitle from './customComponent';

const CustomCounter = () => {
	const [count, setCount] = useState(0);
	const handleCounter = () => {
		setCount(count + 1);
	};
	useTitle(count);
	// useEffect(() => {
	// 	document.title = `Clicked ${count} times`;
	// }, [count]);

	return (
		<div>
			<button onClick={handleCounter}>Counter</button> - {count}
		</div>
	);
};

export default CustomCounter;
