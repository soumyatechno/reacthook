import React, { useState, useEffect } from 'react';

function HookMouse() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const loginPosition = (e) => {
		console.log('Mouse event');
		setX(e.clientX);
		setY(e.clientY);
	};
	useEffect(() => {
		console.log('useEffect called');
		window.addEventListener('mousemove', loginPosition);
		return () => {
			console.log('Component unmounting code');
			window.removeEventListener('mousemove', loginPosition);
		};
	}, []);

	return (
		<div>
			X - {x} Y - {y}
		</div>
	);
}

export default HookMouse;
