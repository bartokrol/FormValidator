import React from "react";

const Input = (props) => {
	if (props.name.input.input === "select") {
		const options = props.name.input.options.map((option) => (
			<option id={option} value={option}>
				{option}
			</option>
		));
		const select = (
			<>
				<label
					htmlFor={props.name.id}
					className="form__firstPage__labelName"
				>
					{props.name.label}
				</label>
				<select
					id={props.name.id}
					name={props.name.id}
					value={props.name.value}
					onChange={props.click}
				>
					{options}
				</select>
				<span
					className={
						props.name.error
							? props.activeMessage
							: props.hiddenMessage
					}
				>
					Error message
				</span>
			</>
		);

		return select;
	}

	if (props.name.input.input === "input") {
		const input = (
			<>
				<label
					htmlFor={props.name.id}
					className="form__firstPage__labelName"
				>
					{props.name.label}
				</label>
				<input
					id={props.name.id}
					type={props.name.input.type}
					value={props.name.value}
					autoComplete="off"
					onChange={props.click}
				/>
				<span
					className={
						props.name.error
							? props.activeMessage
							: props.hiddenMessage
					}
				>
					Error message
				</span>
			</>
		);
		return input;
	}
};

export default Input;
