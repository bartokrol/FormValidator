import React from "react";

const infoMessage = (input) => {
	const message = `This input can contain ${input.validationTerms.signs} and it's value has to be between ${input.validationTerms.minLength} and ${input.validationTerms.maxLength} signs.`;
	return message;
};

const Page = (props) => {
	const inputs = [];
	const filteredTextInputs = props.inputs
		.filter((input) => input.input === "input")
		.map((input) => (
			<>
				<label
					htmlFor={input.name}
					className="form__firstPage__labelName"
				>
					{input.label}
				</label>
				<span className="form__firstPage__inputContainer">
					<input
						key={input.name}
						type={input.type}
						id={input.name}
						autoComplete="off"
						value={input.value}
						onChange={props.change}
					/>
					<span
						onClick={props.toggleInfo}
						className="form__firstPage__inputContainer__information"
					>
						<span className="form__firstPage__inputContainer__information__informationIcon"></span>
						<span className="form__firstPage__inputContainer__information__informationMessage">
							{infoMessage(input)}
						</span>
					</span>
				</span>

				<span
					className={
						input.error ? props.messageActive : props.messageHidden
					}
				>
					{input.errorMessage}
				</span>
			</>
		));

	const filteredSelectInputs = props.inputs
		.filter((input) => input.input === "select")
		.map((input) => (
			<>
				<label htmlFor="sex" className="form__firstPage__labelName">
					{input.label}
				</label>{" "}
				<select
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
			</>
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
