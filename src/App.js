import { Component } from "react";
import Page from "./Page";
import SummaryPage from "./SummaryPage";
import "./styles/App.scss";

class App extends Component {
	state = {
		activePage: 4,
		pages: [
			{
				inputs: [
					{
						name: "name",
						value: "",
						label: "Name ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters",
						},
						error: false,
						errorMessage: "",
						page: 1,
					},
					{
						name: "lastName",
						value: "",
						label: "Last Name ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters",
						},
						error: false,
						errorMessage: "",
						page: 1,
					},
					{
						name: "dateOfBirth",
						value: "",
						label: "Date of Birth",
						input: "input",
						type: "date",
						validationTerms: {
							signs: "",
						},
						error: false,
						errorMessage: "",
						page: 1,
					},
					{
						name: "sex",
						value: "",
						label: "Sex",
						input: "select",
						validationTerms: {
							signs: "",
						},
						options: ["", "Male", "Female", "Other"],
						error: false,
						errorMessage: "",
						page: 1,
					},

					{
						name: "maritalStatus",
						value: "",
						label: "Marital Status",
						input: "select",
						validationTerms: {
							signs: "",
						},
						options: [
							"",
							"Single",
							"In Relationship",
							"Married",
							"Separated",
							"Divorced",
							"Widowed",
						],
						error: false,
						errorMessage: "",
						page: 1,
					},
				],
			},
			{
				inputs: [
					{
						name: "country",
						value: "",
						label: "Country ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "city",
						value: "",
						label: "City ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "street",
						value: "",
						label: "Street ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters and numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "buildingNumber",
						value: "",
						label: "Building Number ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters and numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "postalCode",
						value: "",
						label: "Postal Code ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 5,
							maxLength: 6,
							signs: "numbers",
							isDash: false,
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
				],
			},
			{
				inputs: [
					{
						name: "username",
						value: "",
						label: "Username ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters and numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "phone",
						value: "+48 ",
						label: "Phone Number ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 15,
							maxLength: 16,
							signs: "numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "email",
						value: "",
						label: "E-mail ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters and numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "password",
						value: "",
						label: "Password ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters and numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "confirmPassword",
						value: "",
						label: "Confirm Password ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
							signs: "letters and numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
				],
			},
		],
	};

	pagesLength = this.state.pages.length - 1;

	errorMessageActive = "form__page__errorMessage active";
	errorMessageHidden = "form__page__errorMessage";

	messages = {
		onlyLetters: "Field can contain only letters.",
		onlyNumbers: "Field can contain only numbers.",
		emptySelect: "Option has to be chosen.",
		emptyDate: "Date of birth has to be chosen.",
		underEighteen: "You have to be over 18 years old.",
		invalidEmail: "Email is invalid.",
		invalidPasswordConfirmation: "Both passwords has to be the same.",
		emptyPasswordConfirmation: "Confirm password.",
	};

	regex = {
		// lettersSpaceDash: /^[a-zA-Z\u00C0-\u017F -]*$/,
		lettersOnly: /^[a-zA-Z\u00C0-\u017F]*$/,
		numbersOnly: /[\d-]+/g,
		mail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	};

	handleInputChange = (e) => {
		const key = e.nativeEvent.inputType;
		const inputName = e.target.id;
		let activePage = this.state.activePage;
		const inputs = [...this.state.pages[activePage].inputs];
		const isInteger = this.checkForInteger(e.target.value);
		const isSpace = this.checkForSpace(e.target.value);

		for (let input of inputs) {
			input = this.checkForSpecificInput(
				input,
				inputName,
				e.target.value,
				key,
				isInteger,
				isSpace
			);
		}

		this.setState({
			activePage,
			inputs,
		});
	};

	checkForSpecificInput(
		input,
		inputName,
		targetValue,
		key,
		isInteger,
		isSpace
	) {
		if (input.name === inputName) {
			switch (input.validationTerms.signs) {
				case "letters":
					input.value = targetValue;
					break;
				case "numbers":
					switch (inputName) {
						case "postalCode":
							input.value = this.handlePostalCodeInput(
								input.value,
								targetValue,
								key,
								isInteger,
								isSpace
							);
							break;
						case "phone":
							input.value = this.handlePhoneInput(
								input.value,
								targetValue,
								key,
								isInteger,
								isSpace
							);
							break;
						default:
							input.value = targetValue;
					}
					break;
				default:
					input.value = targetValue;
			}
		}
	}

	checkForInteger(value) {
		const inputValue = value.split("");
		const lastElementInsideValue = Number(
			inputValue[inputValue.length - 1]
		);
		return Number.isInteger(lastElementInsideValue);
	}

	checkForSpace(value) {
		const inputValue = value.split("");
		const lastElementInsideValue = inputValue[inputValue.length - 1];
		return lastElementInsideValue === " ";
	}

	handlePostalCodeInput(inputValue, targetValue, key, isInteger, isSpace) {
		const backspace = "deleteContentBackward";

		if (targetValue.length === 2 && key !== backspace) {
			inputValue = targetValue + "-";
			return inputValue;
		}

		if (targetValue.length === 3 && !targetValue.includes("-")) {
			return inputValue;
		}

		if (targetValue.length === 3 && targetValue.includes("-")) {
			inputValue = targetValue;
			return inputValue;
		}

		if (
			(inputValue.length < 6 && isInteger && !isSpace) ||
			key === backspace
		) {
			inputValue = targetValue;
			return inputValue;
		}
		return inputValue;
	}

	handlePhoneInput(inputValue, targetValue, key, isInteger, isSpace) {
		const backspace = "deleteContentBackward";
		if (
			inputValue.length < 15 &&
			isInteger &&
			!isSpace &&
			key !== backspace
		) {
			inputValue = targetValue;
		}

		if (inputValue.length > 4 && key === backspace) {
			inputValue = targetValue;
		}

		if (
			(inputValue.length === 7 && key !== backspace) ||
			(inputValue.length === 11 && key !== backspace)
		) {
			inputValue = targetValue + "-";
		}

		return inputValue;
	}

	handleSubmitPage = (e) => {
		e.preventDefault();
		const activePage = this.state.activePage;
		this.handleForm(this.state.pages[activePage]);
	};

	handleForm(pageInputs) {
		const inputs = [...pageInputs.inputs];

		let errorsLength = inputs.length;
		let activePage = this.state.activePage;
		for (let input of inputs) {
			input.error = false;
			input.errorMessage = "";

			input = this.checkInputType(input);

			if (!input.error) {
				errorsLength--;
			}
		}

		if (!errorsLength) {
			activePage++;
			this.setState({
				activePage,
			});
		}

		this.setState({
			inputs,
		});
	}

	checkInputType(input) {
		if (
			input.input === "input" &&
			input.type !== "date" &&
			input.name !== "email" &&
			input.name !== "confirmPassword"
		) {
			const { error, errorMessage } = this.checkTextInput(
				input.value,
				input.error,
				input.errorMessage,
				input.validationTerms.minLength,
				input.validationTerms.maxLength,
				input.validationTerms.signs
			);
			input.error = error;
			input.errorMessage = errorMessage;
			return input;
		}

		if (input.input === "select") {
			const { error, errorMessage } = this.checkSelectInput(
				input.value,
				input.error,
				input.errorMessage
			);
			input.error = error;
			input.errorMessage = errorMessage;
			return input;
		}

		if (input.type === "date") {
			const date = this.checkDateOfBirthValidation(input);
			input = date;
			return input;
		}

		if (input.name === "email") {
			if (!input.value.match(this.regex.mail)) {
				input.error = true;
				input.errorMessage = this.messages.invalidEmail;
			}
			return input;
		}

		if (input.name === "confirmPassword") {
			if (input.value !== this.state.pages[2].inputs[3].value) {
				input.error = true;
				input.errorMessage = this.messages.invalidPasswordConfirmation;
			}
			if (!input.value) {
				input.error = true;
				input.errorMessage = this.messages.emptyPasswordConfirmation;
			}
			return input;
		}
	}

	checkTextInput(value, error, errorMessage, minLength, maxLength, type) {
		switch (true) {
			case value.length === 0:
				error = true;
				errorMessage = "Field is required";
				return { error, errorMessage };
			case value.length > maxLength:
				error = true;
				errorMessage = `Field value has to be shorter then ${maxLength} ${type}.`;
				return { error, errorMessage };
			case value.length < minLength:
				error = true;
				errorMessage = `Field value has to be longer then ${minLength} ${type}.`;
				return { error, errorMessage };
			default:
				error = false;
				errorMessage = "";
		}

		switch (type) {
			case "letters":
				if (!value.match(this.regex.lettersOnly)) {
					error = true;
					errorMessage = this.messages.onlyLetters;
				}
				return { error, errorMessage };
			case "numbers":
				if (!value.match(this.regex.numbersOnly)) {
					error = true;
					errorMessage = this.messages.onlyNumbers;
				}
				return { error, errorMessage };
			default:
				error = false;
				errorMessage = "";
		}

		return { error, errorMessage };
	}

	checkSelectInput(value, error, errorMessage) {
		if (!value) {
			error = true;
			errorMessage = this.messages.emptySelect;
		}

		return { error, errorMessage };
	}

	checkDateOfBirthValidation(input) {
		const year = Number(input.value.slice(0, 4));
		const month = Number(input.value.slice(5, 7));
		const day = Number(input.value.slice(8, 10));

		const date = new Date();
		const todaysDay = date.getDate();
		const todaysMonth = date.getMonth() + 1;
		const todaysYear = date.getFullYear();

		if (!year || !month || !day) {
			input.error = true;
			input.errorMessage = this.messages.emptyDate;
			return input;
		}

		if (year && month && day) {
			if (todaysYear - year > 18) {
				return input;
			} else {
				if (todaysYear - year >= 18) {
					if (todaysMonth >= month) {
						if (todaysDay >= day) {
						} else {
							input.error = true;
							input.errorMessage = this.messages.underEighteen;
							return input;
						}
					} else {
						input.error = true;
						input.errorMessage = this.messages.underEighteen;
						return input;
					}
				} else {
					input.error = true;
					input.errorMessage = this.messages.underEighteen;
					return input;
				}
			}
		}
	}

	handlePreviousPageClick = (e) => {
		e.preventDefault();

		let activePage = this.state.activePage;
		activePage--;

		this.setState({
			activePage,
		});
	};

	handleInfoClick = (e) => {
		const icon = e.target;
		const target = e.target.parentNode;
		const activeIcon = "activeIcon";
		const active = "activeInfo";

		if (!target.className.includes(active)) {
			target.classList.add(active);
			icon.classList.add(activeIcon);
			setTimeout(() => {
				target.classList.remove(active);
				icon.classList.remove(activeIcon);
			}, 5000);
		}
	};

	handleDeclineSummary = (e) => {
		e.preventDefault();

		this.setState({
			activePage: 0,
		});
	};

	handleAcceptSummary = (e) => {
		e.preventDefault();

		const inputs = [];
		for (let page of this.state.pages) {
			page.inputs.map((input) => inputs.push(input));
		}

		const phoneInput = inputs.filter((input) => input.name === "phone");
		inputs.forEach((input) => (input.value = ""));
		phoneInput.forEach((input) => (input.value = "+48 "));

		this.setState({
			activePage: 0,
		});
	};

	render() {
		const activePage = this.state.activePage;
		return (
			<div className="form">
				<form className="form__page" noValidate>
					{this.state.pages[activePage] ? (
						<Page
							inputs={this.state.pages[activePage].inputs}
							messageHidden={this.errorMessageHidden}
							messageActive={this.errorMessageActive}
							change={this.handleInputChange}
							submit={this.handleSubmitPage}
							previousPageBtn={this.handlePreviousPageClick}
							activePage={this.state.activePage}
							pagesLength={this.pagesLength}
							toggleInfo={this.handleInfoClick}
						/>
					) : null}
					{activePage > this.pagesLength ? (
						<SummaryPage
							pages={this.state.pages}
							declineSummary={this.handleDeclineSummary}
							acceptSummary={this.handleAcceptSummary}
						/>
					) : null}
				</form>
			</div>
		);
	}
}

export default App;
