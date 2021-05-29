import { Component } from "react";
// import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import "./styles/App.scss";

class App extends Component {
	state = {
		// name: "",
		// lastName: "",
		// dateOfBirth: "",
		// sex: "",
		// maritalStatus: "",
		firstPageInputs: [
			{
				id: 0,
				name: "name",
				value: "",
				input: "input",
				type: "text",
				label: "Name ",
				page: 1,
				error: false,
				message: "",
			},
			{
				name: "lastName",
				value: "",
				input: "input",
				type: "text",
				label: "Last Name",
				page: 1,
				error: false,
				message: "",
			},
			{
				name: "dateOfBirth",
				value: "",
				input: "input",
				type: "date",
				label: "Date of Birth",
				page: 1,
				error: false,
				message: "",
			},
			{
				name: "sex",
				value: "",
				input: "select",
				options: ["", "Male", "Female", "Other"],
				label: "Sex",
				page: 1,
				error: false,
				message: "",
			},

			{
				name: "maritalStatus",
				value: "",
				input: "select",
				options: [
					"",
					"Single",
					"In Relationship",
					"Married",
					"Separated",
					"Divorced",
					"Widowed",
				],
				label: "Marital Status",
				page: 1,
				error: false,
				message: "",
			},
		],
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
		secondPageVisible: true,
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
		const firstPageInputs = [...this.state.firstPageInputs];

		for (let input of firstPageInputs) {
			if (input.name === inputName) {
				input.value = e.target.value;
			}
		}

		this.setState({
			firstPageInputs,
		});
	};

	// handleSubmitFirstPage = (e) => {
	// 	e.preventDefault();
	// 	const {
	// 		name,
	// 		lastName,
	// 		dateOfBirth,
	// 		sex,
	// 		maritalStatus,
	// 		name_message,
	// 		lastName_message,
	// 		dateOfBirth_message,
	// 		sex_message,
	// 		maritalStatus_message,
	// 		isPageValidated,
	// 	} = this.checkFirstPage();

	// 	this.setState(() => ({
	// 		firstPageErrors: {
	// 			name_err: !name,
	// 			lastName_err: !lastName,
	// 			dateOfBirth_err: !dateOfBirth,
	// 			sex_err: !sex,
	// 			maritalStatus_err: !maritalStatus,
	// 		},
	// 		firstPageErrorsMessages: {
	// 			name_message: name_message,
	// 			lastName_message: lastName_message,
	// 			dateOfBirth_message: dateOfBirth_message,
	// 			sex_message: sex_message,
	// 			maritalStatus_message: maritalStatus_message,
	// 		},
	// 		firstPageValidated: isPageValidated,
	// 	}));
	// };

	// checkFirstPage() {
	// 	let name = true;
	// 	let lastName = true;
	// 	let dateOfBirth = true;
	// 	let sex = true;
	// 	let maritalStatus = true;
	// 	let isPageValidated = false;

	// 	let name_message = " ";
	// 	let lastName_message = " ";
	// 	let dateOfBirth_message = " ";
	// 	let sex_message = " ";
	// 	let maritalStatus_message = " ";

	// 	const checkName = this.checkTextInput(
	// 		this.state.name,
	// 		name,
	// 		name_message
	// 	);
	// 	name = checkName.stateName;
	// 	name_message = checkName.stateName_message;

	// 	const checkLastName = this.checkTextInput(
	// 		this.state.lastName,
	// 		lastName,
	// 		lastName_message
	// 	);
	// 	lastName = checkLastName.stateName;
	// 	lastName_message = checkLastName.stateName_message;

	// 	const date = this.checkDateOfBirthValidation(dateOfBirth);
	// 	dateOfBirth = date;

	// 	const checkDateOfBirth = this.checkDateOfBirth(
	// 		dateOfBirth,
	// 		dateOfBirth_message
	// 	);
	// 	dateOfBirth = checkDateOfBirth.dateOfBirth;
	// 	dateOfBirth_message = checkDateOfBirth.dateOfBirth_message;

	// 	const checkSex = this.checkSelectInput(
	// 		this.state.sex,
	// 		sex,
	// 		sex_message
	// 	);
	// 	sex = checkSex.stateName;
	// 	sex_message = checkSex.stateName_message;

	// 	const checkMaritalStatus = this.checkSelectInput(
	// 		this.state.maritalStatus,
	// 		maritalStatus,
	// 		maritalStatus_message
	// 	);
	// 	maritalStatus = checkMaritalStatus.stateName;
	// 	maritalStatus_message = checkMaritalStatus.stateName_message;

	// 	if (name && lastName && dateOfBirth && sex && maritalStatus) {
	// 		isPageValidated = true;
	// 		this.setState({
	// 			firstPageValidated: isPageValidated,
	// 			firstPageVisible: false,
	// 			secondPageVisible: true,
	// 		});
	// 	}

	// 	return {
	// 		name,
	// 		lastName,
	// 		dateOfBirth,
	// 		sex,
	// 		maritalStatus,
	// 		name_message,
	// 		lastName_message,
	// 		dateOfBirth_message,
	// 		sex_message,
	// 		maritalStatus_message,
	// 		isPageValidated,
	// 	};
	// }

	// checkTextInput(state, stateName, stateName_message) {
	// 	if (!state.match(this.regex.lettersOnly)) {
	// 		stateName_message = false;
	// 		stateName_message = this.messages.onlyLetters;
	// 	}

	// 	if (state.length < 2) {
	// 		stateName = false;
	// 		stateName_message = this.messages.minLength;
	// 	}

	// 	if (state.length > 20) {
	// 		stateName = false;
	// 		stateName_message = this.messages.maxLength;
	// 	}
	// 	return { stateName, stateName_message };
	// }

	// checkDateOfBirth(dateOfBirth, dateOfBirth_message) {
	// 	if (dateOfBirth.notFilled) {
	// 		dateOfBirth = false;
	// 		dateOfBirth_message = this.messages.emptyDate;
	// 	}

	// 	if (dateOfBirth.underEighteen) {
	// 		dateOfBirth = false;
	// 		dateOfBirth_message = this.messages.underEighteen;
	// 	}
	// 	return { dateOfBirth, dateOfBirth_message };
	// }

	// checkSelectInput(state, stateName, stateName_message) {
	// 	if (!state) {
	// 		stateName = false;
	// 		stateName_message = this.messages.emptySelect;
	// 	}

	// 	return { stateName, stateName_message };
	// }

	// checkDateOfBirthValidation(dateOfBirth) {
	// 	const year = Number(this.state.dateOfBirth.slice(0, 4));
	// 	const month = Number(this.state.dateOfBirth.slice(5, 7));
	// 	const day = Number(this.state.dateOfBirth.slice(8, 10));

	// 	const date = new Date();
	// 	const todaysDay = date.getDate();
	// 	const todaysMonth = date.getMonth() + 1;
	// 	const todaysYear = date.getFullYear();

	// 	if (!year || !month || !day) {
	// 		dateOfBirth = {
	// 			notFilled: true,
	// 		};
	// 		return dateOfBirth;
	// 	}

	// 	if (year && month && day) {
	// 		if (todaysYear - year > 18) {
	// 			dateOfBirth = true;
	// 			return dateOfBirth;
	// 		} else {
	// 			if (todaysYear - year >= 18) {
	// 				if (todaysMonth >= month) {
	// 					if (todaysDay >= day) {
	// 						dateOfBirth = true;
	// 						return dateOfBirth;
	// 					} else {
	// 						dateOfBirth = {
	// 							underEighteen: true,
	// 						};
	// 						return dateOfBirth;
	// 					}
	// 				} else {
	// 					dateOfBirth = {
	// 						underEighteen: true,
	// 					};
	// 					return dateOfBirth;
	// 				}
	// 			} else {
	// 				dateOfBirth = {
	// 					underEighteen: true,
	// 				};
	// 				return dateOfBirth;
	// 			}
	// 		}
	// 	}
	// }

	// handlePageChange = (e) => {
	// 	e.preventDefault();
	// 	if (this.state.secondPageVisible) {
	// 		this.setState({
	// 			firstPageValidated: false,
	// 			firstPageVisible: true,
	// 			secondPageVisible: false,
	// 		});
	// 	}
	// };

	// checkSecondPage() {
	// 	let country = true;
	// 	let city = true;
	// 	let street = true;
	// 	let buildingNumber = true;
	// 	let postalCode = true;
	// 	let isPageValidated = false;

	// 	let country_message = " ";
	// 	let city_message = " ";
	// 	let street_message = " ";
	// 	let buildingNumber_message = " ";
	// 	let postalCode_message = " ";

	// 	const checkCountry = this.checkTextInput(
	// 		this.state.country,
	// 		country,
	// 		country_message
	// 	);
	// 	country = checkCountry.stateName;
	// 	country_message = checkCountry.stateName_message;

	// 	const checkCity = this.checkTextInput(
	// 		this.state.city,
	// 		city,
	// 		city_message
	// 	);
	// 	city = checkCity.stateName;
	// 	city_message = checkCity.stateName_message;

	// 	const checkStreet = this.checkTextInput(
	// 		this.state.street,
	// 		street,
	// 		street_message
	// 	);
	// 	street = checkStreet.stateName;
	// 	street_message = checkStreet.stateName_message;

	// 	const checkBuildingNumber = this.checkTextInput(
	// 		this.state.buildingNumber,
	// 		buildingNumber,
	// 		buildingNumber_message
	// 	);
	// 	buildingNumber = checkBuildingNumber.stateName;
	// 	buildingNumber_message = checkBuildingNumber.stateName_message;

	// 	const checkPostalCode = this.checkTextInput(
	// 		this.state.maritalStatus,
	// 		postalCode,
	// 		postalCode_message
	// 	);
	// 	postalCode = checkPostalCode.stateName;
	// 	postalCode_message = checkPostalCode.stateName_message;

	// 	if (country && city && street && buildingNumber && postalCode) {
	// 		isPageValidated = true;
	// 		this.setState({
	// 			firstPageValidated: isPageValidated,
	// 			firstPageVisible: false,
	// 			secondPageVisible: true,
	// 		});
	// 	}

	// 	return {
	// 		country,
	// 		city,
	// 		street,
	// 		buildingNumber,
	// 		postalCode,
	// 		country_message,
	// 		city_message,
	// 		street_message,
	// 		buildingNumber_message,
	// 		postalCode_message,
	// 		isPageValidated,
	// 	};
	// }

	// handleSubmitSecondPage = (e) => {
	// 	e.preventDefault();
	// 	const {
	// 		country,
	// 		city,
	// 		street,
	// 		buildingNumber,
	// 		postalCode,
	// 		country_message,
	// 		city_message,
	// 		street_message,
	// 		buildingNumber_message,
	// 		postalCode_message,
	// 		isPageValidated,
	// 	} = this.checkSecondPage();

	// 	this.setState(() => ({
	// 		secondPageErrors: {
	// 			country_err: !country,
	// 			city_err: !city,
	// 			street_err: !street,
	// 			buildingNumber_err: !buildingNumber,
	// 			postalCode_err: !postalCode,
	// 		},
	// 		secondPageErrorsMessages: {
	// 			country_message: country_message,
	// 			city_message: city_message,
	// 			street_message: street_message,
	// 			buildingNumber_message: buildingNumber_message,
	// 			postalCode_message: postalCode_message,
	// 		},
	// 		secondPageValidated: isPageValidated,
	// 	}));
	// };

	render() {
		return (
			<div className="form">
				<form className="form__firstPage" noValidate>
					{this.state.firstPageVisible ? (
						<FirstPage
							inputs={this.state.firstPageInputs}
							messageHidden={this.errorMessageHidden}
							messageActive={this.errorMessageActive}
							change={this.handleInputChange}
							// name={this.state.name}
							// lastName={this.state.lastName}
							// dateOfBirth={this.state.dateOfBirth}
							// sex={this.state.sex}
							// maritalStatus={this.state.maritalStatus}
							// errors={this.state.firstPageErrors}
							// submit={this.handleSubmitFirstPage}
							// messageActive={this.errorMessageActive}
							// messageHidden={this.errorMessageHidden}
							// errorMessages={this.state.firstPageErrorsMessages}
						/>
					) : null}
					{/* {this.state.secondPageVisible ? (
						<SecondPage
							country={this.state.country}
							city={this.state.city}
							street={this.state.street}
							buildingNumber={this.state.buildingNumber}
							postalCode={this.state.postalCode}
							errors={this.state.secondPageErrors}
							change={this.handleInputChange}
							previousPageClick={this.handlePageChange}
							submit={this.handleSubmitSecondPage}
							messageActive={this.errorMessageActive}
							messageHidden={this.errorMessageHidden}
							errorMessages={this.state.secondPageErrorsMessages}
						/>
					) : null} */}
				</form>
			</div>
		);
	}
}

export default App;
