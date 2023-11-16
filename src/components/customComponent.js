import { useEffect } from 'react';

const useTitle = (data) => {
	useEffect(() => {
		document.title = `Clicked ${data} times`;
	}, [data]);
};

export default useTitle;
