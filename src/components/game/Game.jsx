import { useState } from 'react';
import Tabs from '../tabs/Tabs';

const Game = ({ img, title, platforms }) => {
	const [tabActive, setTabActive] = useState(0);
	return (
		<>
			<div>
				<img src={img} alt='' />
				<p>{title}</p>
				<button>Add to Cart</button>
				<p>{platforms[tabActive].price}</p>
			</div>
			<div>
				<Tabs
					platforms={platforms}
					currentTab={index => currentTab(setTabActive, index)}
				></Tabs>
			</div>
		</>
	);
};

const currentTab = (setTabActive, index) => {
	console.log(index);
	setTabActive(index);
};
export default Game;
