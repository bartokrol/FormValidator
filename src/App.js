import { Component } from "react";
import Input from "./Input";
import "./styles/App.scss";

class App extends Component {
	state = {
		name: {
			id: "name",
			label: "Name",
			value: "",
			input: {
				input: "input",
				type: "text",
			},
		},
		lastName: {
			id: "lastName",
			label: "Last Name",
			value: "",
			input: {
				input: "input",
				type: "text",
			},
		},
		dateOfBirth: {
			id: "dateOfBirth",
			label: "Date of Birth",
			value: "",
			input: {
				input: "input",
				type: "data",
			},
		},
		sex: {
			id: "sex",
			label: "Sex",
			value: "",
			input: {
				input: "select",
				type: "text",
				options: {
					empty: "",
					male: "Male",
					female: "Female",
					other: "Other",
				},
			},
		},
		maritalStatus: {
			id: "maritalStatus",
			label: "Marital Status",
			value: "",
			input: {
				input: "select",
				type: "text",
				options: {
					empty: "",
					single: "Single",
					married: "Married",
					separated: "Separated",
					divorced: "Divorced",
					widowed: "Widowed",
					other: "Other",
				},
			},
		},
		country: "",
		city: "",
		street: "",
		buildingNumber: "",
		postalCode: "",
		errors: {
			name_err: false,
			lastName_err: false,
			dateOfBirth_err: false,
			sex_err: false,
			maritalStatus_err: false,
		},
		pagesValidated: {
			firstPage: false,
		},
	};

	// sexes = {
	// 	male: "male",
	// 	female: "female",
	// 	other: "other",
	// };

	errorMessageActive = "form__firstPage__errorMessage active";
	errorMessageHidden = "form__firstPage__errorMessage";

	handleInputChange = (e) => {
		const inputName = e.target.id;
		const labelName = e.target.previousSibling.textContent;
		console.log(inputName);
		console.log(labelName);
		this.setState({
			[inputName]: {
				id: inputName,
				label: labelName,
				value: e.target.value,
				input: {
					input: "input",
					type: "text",
				},
			},
		});
	};

	handleSubmitFirstPage = (e) => {
		e.preventDefault();
		const validated = this.checkForm();
		const {
			name,
			lastName,
			dateOfBirth,
			sex,
			maritalStatus,
			isPageValidated,
		} = validated;
		this.setState({
			errors: {
				name_err: !name,
				lastName_err: !lastName,
				dateOfBirth_err: !dateOfBirth,
				sex_err: !sex,
				maritalStatus_err: !maritalStatus,
			},
			pagesValidated: {
				firstPage: isPageValidated,
			},
		});
	};
	checkForm() {
		let name = true;
		let lastName = true;
		let dateOfBirth = true;
		let sex = true;
		let maritalStatus = true;
		let isPageValidated = false;

		const date = this.checkDateOfBirthValidation(dateOfBirth);
		dateOfBirth = date;

		if (this.state.name.value.length > 3) {
		} else {
			name = false;
		}

		if (this.state.lastName.value.length > 3) {
		} else {
			lastName = false;
		}
		if (dateOfBirth.value) {
		} else {
			dateOfBirth = false;
		}
		if (this.state.sex.value) {
		} else {
			sex = false;
		}
		if (this.state.maritalStatus.value) {
		} else {
			maritalStatus = false;
		}

		if ((name, lastName, dateOfBirth, sex, maritalStatus)) {
			isPageValidated = true;
		}

		return {
			name,
			lastName,
			dateOfBirth,
			sex,
			maritalStatus,
			isPageValidated,
		};
	}

	checkDateOfBirthValidation(dateOfBirth) {
		const year = Number(this.state.dateOfBirth.value.slice(0, 4));
		const month = Number(this.state.dateOfBirth.value.slice(5, 7));
		const day = Number(this.state.dateOfBirth.value.slice(8, 10));

		const date = new Date();
		const todaysDay = date.getDate();
		const todaysMonth = date.getMonth() + 1;
		const todaysYear = date.getFullYear();

		if (!year || !month || !day) {
			dateOfBirth = false;
			return dateOfBirth;
		}

		if (year && month && day) {
			if (todaysYear - year > 18) {
				dateOfBirth = true;
				return dateOfBirth;
			} else {
				if (todaysYear - year >= 18) {
					if (todaysMonth >= month) {
						if (todaysDay >= day) {
							dateOfBirth = true;
							return dateOfBirth;
						} else {
							dateOfBirth = false;
							return dateOfBirth;
						}
					} else {
						dateOfBirth = false;
						return dateOfBirth;
					}
				} else {
					dateOfBirth = false;
					return dateOfBirth;
				}
			}
		}
	}

	render() {
		// const { name, lastName, dateOfBirth, sex, maritalStatus } = this.state;
		// const {
		// 	name_err,
		// 	lastName_err,
		// 	dateOfBirth_err,
		// 	sex_err,
		// 	maritalStatus_err,
		// } = this.state.errors;

		return (
			<div className="form">
				<form className="form__firstPage" noValidate>
					<Input
						name={this.state.name}
						click={this.handleInputChange}
					/>
					<Input
						name={this.state.lastName}
						click={this.handleInputChange}
					/>
					{/* <label
						htmlFor="name"
						className="form__firstPage__labelName"
					>
						Name:
					</label>
					<input
						type="text"
						id="name"
						autoComplete="off"
						value={name.value}
						onChange={this.handleInputChange}
					/>
					<span
						className={
							name_err
								? this.errorMessageActive
								: this.errorMessageHidden
						}
					>
						Error message
					</span>
					<label
						htmlFor="lastName"
						className="form__firstPage__labelName"
					>
						Last Name:{" "}
					</label>
					<input
						type="text"
						id="lastName"
						value={lastName.value}
						autoComplete="off"
						onChange={this.handleInputChange}
					/>
					<span
						className={
							lastName_err
								? this.errorMessageActive
								: this.errorMessageHidden
						}
					>
						Error message
					</span>
					<label
						htmlFor="dateOfBirth"
						className="form__firstPage__labelName"
					>
						Date of Birth:{" "}
					</label>
					<input
						type="date"
						id="dateOfBirth"
						value={dateOfBirth.value}
						autoComplete="off"
						onChange={this.handleInputChange}
					/>
					<span
						className={
							dateOfBirth_err
								? this.errorMessageActive
								: this.errorMessageHidden
						}
					>
						Error message
					</span>
					<label htmlFor="sex" className="form__firstPage__labelName">
						Sex:{" "}
					</label>
					<select
						id="sex"
						name="sex"
						onChange={this.handleInputChange}
						value={sex.value}
					>
						<option value=""></option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>

					<span
						className={
							sex_err
								? this.errorMessageActive
								: this.errorMessageHidden
						}
					>
						Error message
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
						onChange={this.handleInputChange}
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
								? this.errorMessageActive
								: this.errorMessageHidden
						}
					>
						Error message
					</span>
					<button
						class="form__button"
						onClick={this.handleSubmitFirstPage}
					>
						Next Page
					</button> */}
					{/* <label
						htmlFor="country"
						className="form__firstPage__labelName"
					>
						Country:{" "}
					</label>
					<input
						type="text"
						id="country"
						value={this.state.country}
					autoComplete="off" 
						/>
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label
						htmlFor="city"
						className="form__firstPage__labelName"
					>
						City:{" "}
					</label>
					<input type="text" id="city" value={this.state.city} autoComplete="off" />
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label
						htmlFor="street"
						className="form__firstPage__labelName"
					>
						Street:{" "}
					</label>
					<input type="text" id="street" value={this.state.street} autoComplete="off" />
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label
						htmlFor="building_number"
						className="form__firstPage__labelName"
					>
						Building Number:{" "}
					</label>
					<input
						type="text"
						id="building_number"
						value={this.state.buildingNumber}
					autoComplete="off" 
						/>
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label
						htmlFor="postal_code"
						className="form__firstPage__labelName"
					>
						Postal Code:{" "}
					</label>
					<input
						type="text"
						id="postal_code"
						value={this.state.postalCode}
					autoComplete="off" 
						/>
					<span className="form__firstPage__errorMessage">
						Error message
					</span> */}
				</form>
			</div>
		);
	}
}

export default App;
