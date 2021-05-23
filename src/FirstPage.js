const FirstPage = (props) => {
	const { name, lastName, dateOfBirth, sex, maritalStatus } = props;
	const {
		name_err,
		lastName_err,
		dateOfBirth_err,
		sex_err,
		maritalStatus_err,
	} = props.errors;
	const {
		name_message,
		lastName_message,
		dateOfBirth_message,
		sex_message,
		maritalStatus_message,
	} = props.errorMessages;

	return (
		<>
			<label htmlFor="name" className="form__firstPage__labelName">
				Name:
			</label>
			<input
				type="text"
				id="name"
				autoComplete="off"
				value={name.value}
				onChange={props.click}
			/>
			<span
				className={name_err ? props.messageActive : props.messageHidden}
			>
				{name_message}
			</span>
			<label htmlFor="lastName" className="form__firstPage__labelName">
				Last Name:{" "}
			</label>
			<input
				type="text"
				id="lastName"
				value={lastName.value}
				autoComplete="off"
				onChange={props.click}
			/>
			<span
				className={
					lastName_err ? props.messageActive : props.messageHidden
				}
			>
				{lastName_message}
			</span>
			<label htmlFor="dateOfBirth" className="form__firstPage__labelName">
				Date of Birth:{" "}
			</label>
			<input
				type="date"
				id="dateOfBirth"
				value={dateOfBirth.value}
				autoComplete="off"
				onChange={props.click}
			/>
			<span
				className={
					dateOfBirth_err ? props.messageActive : props.messageHidden
				}
			>
				{dateOfBirth_message}
			</span>
			<label htmlFor="sex" className="form__firstPage__labelName">
				Sex:{" "}
			</label>
			<select
				id="sex"
				name="sex"
				onChange={props.click}
				value={sex.value}
			>
				<option value=""></option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
			</select>

			<span
				className={sex_err ? props.messageActive : props.messageHidden}
			>
				{sex_message}
			</span>
			<label
				htmlFor="maritalStatus"
				className="form__firstPage__labelName"
			>
				Marital Status:{" "}
			</label>
			<select
				id="maritalStatus"
				name="maritalStatus"
				onChange={props.click}
				value={maritalStatus.value}
			>
				<option value=""></option>
				<option value="single">Single</option>
				<option value="married">Married</option>
				<option value="separated">Separated</option>
				<option value="divorced">Divorced</option>
				<option value="widowed">Widowed</option>
			</select>
			<span
				className={
					maritalStatus_err
						? props.messageActive
						: props.messageHidden
				}
			>
				{maritalStatus_message}
			</span>
			<button class="form__button" onClick={props.submit}>
				Next Page
			</button>
		</>
	);
};

export default FirstPage;
