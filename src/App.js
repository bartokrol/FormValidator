import { Component } from "react";
import SecondPage from "./SecondPage";
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
		firstPageVisible: true,
		country: "",
		city: "",
		street: "",
		buildingNumber: "",
		postalCode: "",
		secondPageErrors: {
			country_err: false,
			city_err: false,
			street_err: false,
			buildingNumber_err: false,
			postalCode_err: false,
		},
		secondPageErrorsMessages: {
			country_message: "",
			city_message: "",
			street_message: "",
			buildingNumber_message: "",
			postalCode_message: "",
		},
		secondPageValidated: false,
		secondPageVisible: false,
	};

	errorMessageActive = "form__firstPage__errorMessage active";
	errorMessageHidden = "form__firstPage__errorMessage";

	messages = {
		minLength: "has to be longer then 2 letters.",
		maxLength: "has to be shorter then 20 letters.",
		onlyLetters: "has to contain only letters.",
		onlyNumbers: "has to contain only numbers.",
		emptySelect: "has to be chosen.",
		emptyDate: "Date of birth has to be chosen.",
		underEighteen: "You have to be over 18 years old.",
	};

	regex = {
		lettersOnly: /^[A-Za-z]+$/,
	};

	handleInputChange = (e) => {
		const inputName = e.target.id;
		this.setState({
			[inputName]: e.target.value,
		});
	};

	handleSubmitFirstPage = (e) => {
		e.preventDefault();
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
		} = this.checkForm();

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

		const checkName = this.checkTextInput(
			this.state.name,
			name,
			name_message
		);
		name = checkName.stateName;
		name_message = checkName.stateName_message;

		const checkLastName = this.checkTextInput(
			this.state.lastName,
			lastName,
			lastName_message
		);
		lastName = checkLastName.stateName;
		lastName_message = checkLastName.stateName_message;

		const date = this.checkDateOfBirthValidation(dateOfBirth);
		dateOfBirth = date;

		const checkDateOfBirth = this.checkDateOfBirth(
			dateOfBirth,
			dateOfBirth_message
		);
		dateOfBirth = checkDateOfBirth.dateOfBirth;
		dateOfBirth_message = checkDateOfBirth.dateOfBirth_message;

		const checkSex = this.checkSelectInput(
			this.state.sex,
			sex,
			sex_message
		);
		sex = checkSex.stateName;
		sex_message = checkSex.stateName_message;

		const checkMaritalStatus = this.checkSelectInput(
			this.state.maritalStatus,
			maritalStatus,
			maritalStatus_message
		);
		maritalStatus = checkMaritalStatus.stateName;
		maritalStatus_message = checkMaritalStatus.stateName_message;

		if (name && lastName && dateOfBirth && sex && maritalStatus) {
			isPageValidated = true;
			this.setState({
				secondPageVisible: true,
			});
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

	checkTextInput(state, stateName, stateName_message) {
		if (!state.match(this.regex.lettersOnly)) {
			stateName_message = false;
			stateName_message = this.messages.onlyLetters;
		}

		if (state.length < 2) {
			stateName = false;
			stateName_message = this.messages.minLength;
		}

		if (state.length > 20) {
			stateName = false;
			stateName_message = this.messages.maxLength;
		}
		return { stateName, stateName_message };
	}

	checkDateOfBirth(dateOfBirth, dateOfBirth_message) {
		if (dateOfBirth.notFilled) {
			dateOfBirth = false;
			dateOfBirth_message = this.messages.emptyDate;
		}

		if (dateOfBirth.underEighteen) {
			dateOfBirth = false;
			dateOfBirth_message = this.messages.underEighteen;
		}
		return { dateOfBirth, dateOfBirth_message };
	}

	checkSelectInput(state, stateName, stateName_message) {
		if (!state) {
			stateName = false;
			stateName_message = this.messages.emptySelect;
		}

		return { stateName, stateName_message };
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
					{this.state.secondPageVisible ? (
						<SecondPage
							country={this.state.country}
							city={this.state.city}
							street={this.state.street}
							buildingNumber={this.state.buildingNumber}
							postalCode={this.state.postalCode}
						/>
					) : null}
				</form>
			</div>
		);
	}
}

export default App;
