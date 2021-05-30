import React from "react";

const FirstPage = (props) => {
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
				<input
					type={input.type}
					id={input.name}
					autoComplete="off"
					value={input.value}
					onChange={props.change}
				/>
				<span
					className={
						input.error ? props.messageActive : props.messageHidden
					}
				>
					{input.name === "dateOfBirth"
						? input.errorMessage
						: input.label + input.errorMessage}
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
					id={input.name}
					name={input.name}
					onChange={props.change}
					value={input.value}
				>
					{input.options.map((option) => (
						<option value={option}>{option}</option>
					))}
				</select>
				<span
					className={
						input.error ? props.messageActive : props.messageHidden
					}
				>
					{input.label} {input.errorMessage}
				</span>
			</>
		));

	inputs.push(filteredTextInputs, filteredSelectInputs);

	return (
		<>
			{inputs}
			<button class="form__button" onClick={props.submit}>
				Next Page
			</button>
		</>
	);
};

export default FirstPage;
