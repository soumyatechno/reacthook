import './App.css';
import React from 'react';
import ClassMouse from './class/classMouse';
import IntervalClass from './class/intervalClass';
import ParentComponent from './hook/context/parentComponent';
// import CounterFive from './class/counterTwo';
// import Counter from './hook/counter';
import DataFetch from './hook/dataFetch';
import DataFetchOnce from './hook/dataFetchOnce';
// import Counter from './class/counter';
import HookMouse from './hook/hookMouse';
import IntervalHookCounter from './hook/intervalHookCounter';
import MouseContainer from './hook/mouseContainer';
import CounterOne from './hook/reducer/counterOne';
import CounterTwo from './hook/reducer/counterTwo';
// import Focus from './hook/ref/focus';
import Counter from './hook/ref/counter';
import CustomCounter from './components/customCounter';
import SampleCounterOne from './components/SampleCounterOne';
import SampleCounterTwo from './components/SampleCounterTwo';
import UseInput from './components/customComponents';

export const AnotherContext = React.createContext();
export const UserContext = React.createContext();
function App() {
	return (
		<div className="App">
			{/* <HookMouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalClass />
			<IntervalHookCounter /> */}
			{/* <DataFetch /> */}
			{/* <Counter /> */}
			{/* <DataFetchOnce /> */}
			{/* <UserContext.Provider value={'Soumya'}>
				<AnotherContext.Provider value={'Chakraborty'}>
					<ParentComponent />
				</AnotherContext.Provider>
			</UserContext.Provider> */}
			{/* <CounterOne /> */}
			{/* <CounterTwo /> */}
			{/* <Focus /> */}
			{/* <Counter /> */}
			{/* <CustomCounter /> */}
			{/* <SampleCounterOne /> */}
			{/* <SampleCounterTwo /> */}
			<UseInput />
		</div>
	);
}

export default App;
