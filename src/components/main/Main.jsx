import { PRODUCTS } from '../../constants/products';
import Filters from '../filters/Filters';
import { useState } from 'react';

import Game from '../game/Game';

const Main = () => {
	const [filters, setFilters] = useState({
		PS5: false,
		PS4: false,
		PC: false,
		Xbox: false
	});

	const filteredProducts = filteredGames(PRODUCTS, filters);

	return (
		<>
			<div>
				<Filters
					action={input => filteredList(input, filters, setFilters)}
				></Filters>
			</div>

			<div>
				{filteredProducts.map(product => (
					<div key={product.id}>
						<Game
							img={product.image}
							title={product.name}
							platforms={product.platforms}
						></Game>
					</div>
				))}
			</div>
		</>
	);
};
const filteredList = (input, filters, setFilters) => {
	const { name, checked } = input;
	setFilters({ ...filters, [name]: checked });
};

const filteredGames = (games, filters) => {
	const gamesFilter = games.filter(product =>
		product.platforms.some(platform => filters[platform.name])
	);
	return gamesFilter;
};
export default Main;
