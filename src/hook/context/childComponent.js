import React, { useContext } from 'react';
// import NestedChildComponent from './nestedChildComponent';
import { UserContext, AnotherContext } from '../../App';

const ChildComponent = () => {
	const user = useContext(UserContext);
	const title = useContext(AnotherContext);

	return (
		<div>
			{user} {title}
		</div>
	);
};

export default ChildComponent;
