import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetch = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				console.log(res);
				setPost(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<ul>
				{post?.map((post) => {
					return <li key={post.id}>{post.title}</li>;
				})}
			</ul>
		</div>
	);
};

export default DataFetch;
