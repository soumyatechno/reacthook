import React, { useState } from 'react';
import UseCustomInput from './custom';
const UseInput = () => {
	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');

	const [firstName, bindFirstName, resetFirstName] = UseCustomInput('');
	const [lastName, bindLastName, resetLastName] = UseCustomInput('');
	const submitHandler = (e) => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};

	return (
		<div>
			<h2>User Details</h2>
			<form onSubmit={submitHandler}>
				<input type="text" {...bindFirstName} />
				<input type="text" {...bindLastName} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default UseInput;
