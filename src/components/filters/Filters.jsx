const Filters = ({ action }) => {
	return (
		<>
			<div>
				<label htmlFor='PS5'>PS5</label>
				<input
					id='PS5'
					name='PS5'
					type='checkbox'
					onChange={event => action(event.target)}
				/>
			</div>
			<div>
				<label htmlFor=''>PS4</label>
				<input
					id='PS4'
					name='PS4'
					type='checkbox'
					onChange={event => action(event.target)}
				/>
			</div>
			<div>
				<label htmlFor=''>PC</label>
				<input
					id='PC'
					name='PC'
					type='checkbox'
					onChange={event => action(event.target)}
				/>
			</div>
			<div>
				<label htmlFor=''>XBOX</label>
				<input
					id='XBOX'
					name='Xbox'
					type='checkbox'
					onChange={event => action(event.target)}
				/>
			</div>
		</>
	);
};

export default Filters;
