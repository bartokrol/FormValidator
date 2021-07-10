import React from "react";
import TextInput from "../layout/TextInput";
import SelectInput from "../layout/SelectInput";

const infoMessage = (input) => {
	let message = `May contain between ${input.validationTerms.minLength} and ${input.validationTerms.maxLength} ${input.validationTerms.signs}.`;

	if (input.name === "dateOfBirth") {
		message = "You have to be at least 18 years old.";
	}
	return message;
};

const Page = (props) => {
	const inputs = [];
	const filteredTextInputs = props.inputs
		.filter((input) => input.input === "input")
		.map((input) => (
			<TextInput
				input={input}
				change={props.change}
				toggleInfo={props.toggleInfo}
				handleMessage={infoMessage}
				messageActive={props.messageActive}
				messageHidden={props.messageHidden}
			/>
		));

	const filteredSelectInputs = props.inputs
		.filter((input) => input.input === "select")
		.map((input) => (
			<SelectInput
				input={input}
				change={props.change}
				handleMessage={infoMessage}
				messageActive={props.messageActive}
				messageHidden={props.messageHidden}
			/>
		));

	inputs.push(filteredTextInputs, filteredSelectInputs);

	return (
		<>
			{inputs}
			<div className="form__buttons">
				{props.activePage ? (
					<button
						className="form__buttons__button previousPageButton"
						onClick={props.previousPageBtn}
					>
						Previous Page
					</button>
				) : null}
				<button
					className="form__buttons__button submitPageButton"
					onClick={props.submit}
				>
					{props.pagesLength === props.activePage
						? "Submit"
						: "Next Page"}
				</button>
			</div>
		</>
	);
};

export default Page;
