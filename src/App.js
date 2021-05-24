import { Component } from "react";
import FirstPage from "./FirstPage";
import "./styles/App.scss";

class App extends Component {
	state = {
		name: "",
		lastName: "",
		dateOfBirth: "",
		sex: "",
		maritalStatus: "",
		firstPageErrors: {
			name_err: false,
			lastName_err: false,
			dateOfBirth_err: false,
			sex_err: false,
			maritalStatus_err: false,
		},
		firstPageErrorsMessages: {
			name_message: "",
			lastName_message: "",
			dateOfBirth_message: "",
			sex_message: "",
			maritalStatus_message: "",
		},
		firstPageValidated: false,
		country: "",
		city: "",
		street: "",
		buildingNumber: "",
		postalCode: "",
	};

	errorMessageActive = "form__firstPage__errorMessage active";
	errorMessageHidden = "form__firstPage__errorMessage";

	messages = {
		minLength: "has to be longer then 2 letters.",
		onlyLetters: "has to contain only letters.",
		onlyNumbers: "has to contain only numbers.",
		emptySelect: "has to be chosen.",
		emptyDate: "Date of birth has to be chosen.",
		underEighteen: "You have to be over 18 years old.",
	};

	handleInputChange = (e) => {
		const inputName = e.target.id;
		this.setState({
			[inputName]: e.target.value,
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
			name_message,
			lastName_message,
			dateOfBirth_message,
			sex_message,
			maritalStatus_message,
			isPageValidated,
		} = validated;
		this.setState(() => ({
			firstPageErrors: {
				name_err: !name,
				lastName_err: !lastName,
				dateOfBirth_err: !dateOfBirth,
				sex_err: !sex,
				maritalStatus_err: !maritalStatus,
			},
			firstPageErrorsMessages: {
				name_message: name_message,
				lastName_message: lastName_message,
				dateOfBirth_message: dateOfBirth_message,
				sex_message: sex_message,
				maritalStatus_message: maritalStatus_message,
			},
			firstPageValidated: isPageValidated,
		}));
	};

	checkForm() {
		let name = true;
		let lastName = true;
		let dateOfBirth = true;
		let sex = true;
		let maritalStatus = true;
		let isPageValidated = false;

		let name_message = " ";
		let lastName_message = " ";
		let dateOfBirth_message = " ";
		let sex_message = " ";
		let maritalStatus_message = " ";

		const date = this.checkDateOfBirthValidation(dateOfBirth);
		dateOfBirth = date;

		if (this.state.name.length < 3) {
			name = false;
			name_message = this.messages.minLength;
		}

		if (this.state.lastName.length < 2) {
			lastName = false;
			lastName_message = this.messages.minLength;
		}

		if (dateOfBirth.notFilled) {
			dateOfBirth = false;
			dateOfBirth_message = this.messages.emptyDate;
		}

		if (dateOfBirth.underEighteen) {
			dateOfBirth = false;
			dateOfBirth_message = this.messages.underEighteen;
		}

		if (!this.state.sex) {
			sex = false;
			sex_message = this.messages.emptySelect;
		}

		if (!this.state.maritalStatus) {
			maritalStatus = false;
			maritalStatus_message = this.messages.emptySelect;
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
			name_message,
			lastName_message,
			dateOfBirth_message,
			sex_message,
			maritalStatus_message,
			isPageValidated,
		};
	}

	checkDateOfBirthValidation(dateOfBirth) {
		const year = Number(this.state.dateOfBirth.slice(0, 4));
		const month = Number(this.state.dateOfBirth.slice(5, 7));
		const day = Number(this.state.dateOfBirth.slice(8, 10));

		const date = new Date();
		const todaysDay = date.getDate();
		const todaysMonth = date.getMonth() + 1;
		const todaysYear = date.getFullYear();

		if (!year || !month || !day) {
			dateOfBirth = {
				notFilled: true,
			};
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
							dateOfBirth = {
								underEighteen: true,
							};
							return dateOfBirth;
						}
					} else {
						dateOfBirth = {
							underEighteen: true,
						};
						return dateOfBirth;
					}
				} else {
					dateOfBirth = {
						underEighteen: true,
					};
					return dateOfBirth;
				}
			}
		}
	}

	render() {
		return (
			<div className="form">
				<form className="form__firstPage" noValidate>
					{!this.state.firstPageValidated ? (
						<FirstPage
							name={this.state.name}
							lastName={this.state.lastName}
							dateOfBirth={this.state.dateOfBirth}
							sex={this.state.sex}
							maritalStatus={this.state.maritalStatus}
							errors={this.state.firstPageErrors}
							click={this.handleInputChange}
							submit={this.handleSubmitFirstPage}
							messageActive={this.errorMessageActive}
							messageHidden={this.errorMessageHidden}
							errorMessages={this.state.firstPageErrorsMessages}
						/>
					) : null}
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
