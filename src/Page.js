import React from "react";
import TextInput from "./TextInput";

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
				handleMessage={infoMessage}
				messageActive={props.messageActive}
				messageHidden={props.messageHidden}
			/>
		));

	const filteredSelectInputs = props.inputs
		.filter((input) => input.input === "select")
		.map((input) => (
			<div key={input.name}>
				<label
					htmlFor="sex"
					className="form__page__inputBox__labelName"
				>
					{input.label}
				</label>{" "}
				<select
					className="form__page__inputBox__selectContainer"
					key={input.name}
					id={input.name}
					name={input.name}
					onChange={props.change}
					value={input.value}
				>
					{input.options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<span
					className={
						input.error ? props.messageActive : props.messageHidden
					}
				>
					{input.errorMessage}
				</span>
			</div>
		));

	inputs.push(filteredTextInputs, filteredSelectInputs);

	return (
		<>
			{inputs}
			{props.activePage ? (
				<button class="form__button" onClick={props.previousPageBtn}>
					Previous Page
				</button>
			) : null}
			<button class="form__button" onClick={props.submit}>
				{props.pagesLength === props.activePage
					? "Submit"
					: "Next Page"}
			</button>
		</>
	);
};

export default Page;
