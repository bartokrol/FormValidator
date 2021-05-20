import React from "react";

const Input = (props) => {
	return (
		<>
			<label
				htmlFor={props.name.id}
				className="form__firstPage__labelName"
			>
				{props.name.label}
			</label>
			<input
				type="text"
				id={props.name.id}
				autoComplete="off"
				value={props.name.value}
				onChange={props.click}
			/>
		</>
	);
};

export default Input;
