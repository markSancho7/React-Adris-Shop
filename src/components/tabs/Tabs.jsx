const Tabs = ({ platforms, currentTab }) => {
	return platforms.map((platform, index) => (
		<button key={platform.id} onClick={event => currentTab(index)}>
			{platform.name}
		</button>
	));
};
export default Tabs;
