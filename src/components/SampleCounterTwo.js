import useCustom from './counterCustom';
const SampleCounterOne = () => {
	const [count, increment, decrement, reset] = useCustom(0, 10);

	return (
		<div>
			<h3>Counter = {count}</h3>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default SampleCounterOne;
