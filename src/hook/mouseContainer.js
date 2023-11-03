import React, { useState, useEffect } from 'react';
import HookMouse from './hookMouse';

const MouseContainer = () => {
	const [display, setDisplay] = useState(true);

	// useEffect(() => {
	// 	window.addEventListener('mousemove', logMousePosition);
	// }, []);

	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />}
		</div>
	);
};

export default MouseContainer;
