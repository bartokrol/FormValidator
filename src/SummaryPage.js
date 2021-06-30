const SummaryPage = (props) => {
	const inputs = [];
	for (let page of props.pages) {
		page.inputs.map((input) => inputs.push(input.value));
	}

	const summaryValues = inputs.map((input) => <h1>{input}</h1>);

	return (
		<>
			<div>Summary</div>
			{summaryValues}
		</>
	);
};

export default SummaryPage;
