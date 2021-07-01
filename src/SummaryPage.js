const SummaryPage = (props) => {
	const inputs = [];
	for (let page of props.pages) {
		page.inputs.map((input) => inputs.push(input));
	}

	const summaryValues = inputs.map((input) => (
		<>
			<span>
				{input.label}:<h1>{input.value}</h1>
			</span>
		</>
	));

	return (
		<>
			<div>Summary</div>
			{summaryValues}
			<button>Decline</button>
			<button>Accept</button>
		</>
	);
};

export default SummaryPage;
