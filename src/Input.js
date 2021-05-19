import React from "react";

const Input = (props) => {
	return (
		<label htmlFor={props.name} className="form__firstPage__labelName">
			{props.name}
		</label>
	);
};

export default Input;
