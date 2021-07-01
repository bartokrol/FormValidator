const SummaryPage = (props) => {
	const inputs = [];
	for (let page of props.pages) {
		page.inputs.map((input) => inputs.push(input));
	}

	const summaryValues = inputs.map((input) => (
		<>
			<div className="summaryPage__inputBox">
				<span className="summaryPage__inputBox__inputName">
					{input.label}:
				</span>
				<span className="summaryPage__inputBox__inputValue">
					{input.value}
				</span>
			</div>
		</>
	));

	return (
		<div className="summaryPage">
			<h1>Summary</h1>
			{summaryValues}
			<h2 className="summaryPage__correctQuestion">
				Is everything is correct?
			</h2>
			<div className="summaryPage__buttons">
				<button onClick={props.declineSummary}>Decline</button>
				<button>Accept</button>
			</div>
		</div>
	);
};

export default SummaryPage;
