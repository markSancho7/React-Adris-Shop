const Game = ({ img, title, platform }) => {
	return (
		<div>
			<img src={img} alt='' />
			<p>{title}</p>
			<button>Add to Cart</button>
			<p>{platform[0].price}</p>
		</div>
	);
};
export default Game;
