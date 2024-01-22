import { PRODUCTS } from '../../constants/products';
import Filters from '../filters/filters';
import Game from '../game/Game';

const Main = () => {
	return (
		<>
			<div>
				<Filters></Filters>
			</div>

			<div>
				{PRODUCTS.map(product => (
					<Game
						key={product.id}
						img={product.image}
						title={product.name}
						platform={product.platforms}
					></Game>
				))}
			</div>
		</>
	);
};
export default Main;
