import React from 'react';
import { UserContext, AnotherContext } from '../../App';
const NestedChildComponent = () => {
	return (
		<div>
			<UserContext.Consumer>
				{(user) => {
					return (
						<AnotherContext.Consumer>
							{(data) => {
								return (
									<div>
										User Contect Value {user}
										{data}
									</div>
								);
							}}
						</AnotherContext.Consumer>
					);
				}}
			</UserContext.Consumer>
		</div>
	);
};

export default NestedChildComponent;
