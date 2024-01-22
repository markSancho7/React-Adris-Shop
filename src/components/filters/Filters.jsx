import { useState } from 'react';

const Filters = () => {
	const [filters, setFilters] = useState({
		PS5: false,
		PS4: false,
		PC: false,
		XBOX: false
	});
	console.log(filters);

	return (
		<>
			<div>
				<label htmlFor='PS5'>PS5</label>
				<input
					id='PS5'
					name='PS5'
					type='checkbox'
					onChange={event => filterdList(filters, setFilters, event.target)}
				/>
			</div>
			<div>
				<label htmlFor=''>PS4</label>
				<input
					type='checkbox'
					onChange={event => filterdList(filters, setFilters, event.target)}
				/>
			</div>
			<div>
				<label htmlFor=''>PC</label>
				<input
					type='checkbox'
					onChange={event => filterdList(filters, setFilters, event.target)}
				/>
			</div>
			<div>
				<label htmlFor=''>XBOX</label>
				<input
					type='checkbox'
					onChange={event => filterdList(filters, setFilters, event.target)}
				/>
			</div>
		</>
	);
};

const filterdList = (filters, setFilters, input) => {
	const { name } = input;
	console.log(name);
	setCheckFilter({ ...filters, filters });
};
export default Filters;
