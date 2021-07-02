const TextInput = (props) => {
	return (
		<div key={props.input.name} className="form__page__inputBox">
			<label
				htmlFor={props.input.name}
				className="form__page__inputBox__labelName"
			>
				{props.input.label}
			</label>
			<div className="form__page__inputBox__inputContainer">
				<input
					key={props.input.name}
					type={props.input.type}
					id={props.input.name}
					autoComplete="off"
					value={props.input.value}
					onChange={props.change}
				/>
				<div
					onClick={props.toggleInfo}
					className="form__page__inputBox__inputContainer__information"
				>
					<span className="form__page__inputBox__inputContainer__information__informationIcon"></span>
					<span className="form__page__inputBox__inputContainer__information__informationMessage">
						{props.handleMessage(props.input)}
					</span>
				</div>
			</div>

			<span
				className={
					props.input.error ? props.messageActive : props.messageHidden
				}
			>
				{props.input.errorMessage}
			</span>
		</div>
	);
};

export default TextInput;
