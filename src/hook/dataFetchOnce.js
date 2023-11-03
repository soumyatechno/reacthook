import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchOnce = () => {
	const [id, setId] = useState(1);
	const [posts, setPosts] = useState({});
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);

	const handleClick = () => {
		setIdFromButtonClick(id);
	};

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => {
				console.log(res);
				setPosts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [idFromButtonClick]);

	return (
		<div>
			<h1>Posts</h1>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			<button type="submit" onClick={handleClick}>
				Subbmit
			</button>
			<div>{posts.title}</div>
		</div>
	);
};

export default DataFetchOnce;
