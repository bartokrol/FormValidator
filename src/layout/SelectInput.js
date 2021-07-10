const SelectInput = (props) => {
	return (
		<div key={props.input.name}>
			<label htmlFor="sex" className="form__page__inputBox__labelName">
				{props.input.label}
			</label>{" "}
			<select
				className="form__page__inputBox__selectContainer"
				key={props.input.name}
				id={props.input.name}
				name={props.input.name}
				onChange={props.change}
				value={props.input.value}
			>
				{props.input.options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			<span
				className={
					props.input.error
						? props.messageActive
						: props.messageHidden
				}
			>
				{props.input.errorMessage}
			</span>
		</div>
	);
};

export default SelectInput;
