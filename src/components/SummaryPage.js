const SummaryPage = (props) => {
	const inputs = [];
	for (let page of props.pages) {
		page.inputs.map((input) =>
			input.name !== "confirmPassword" ? inputs.push(input) : null
		);
	}

	const summaryValues = inputs.map((input) => (
		<div className="summaryPage__inputBox" key={input.name}>
			<span className="summaryPage__inputBox__inputName">
				{input.label}:
			</span>
			<span className="summaryPage__inputBox__inputValue">
				{input.value}
			</span>
		</div>
	));

	return (
		<div className="summaryPage">
			<h1 className="summaryPage__summaryText">Summary</h1>
			{summaryValues}
			<h2 className="summaryPage__correctQuestion">
				Is everything is correct?
			</h2>
			<div className="summaryPage__buttons">
				<button
					className="summaryPage__buttons__button declineButton"
					onClick={props.declineSummary}
				>
					Decline
				</button>
				<button
					className="summaryPage__buttons__button acceptButton"
					onClick={props.acceptSummary}
				>
					Accept
				</button>
			</div>
		</div>
	);
};

export default SummaryPage;
