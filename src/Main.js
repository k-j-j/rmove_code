import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	return (
		<>
			<h3>Hello!!! main page</h3>
			<ul>
				<Link to="/product/1"><li>1번 product</li></Link>
				<Link to="/product/2"><li>2번 product</li></Link>
			</ul>
		</>
	);
};
export default Main;