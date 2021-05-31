import { Component } from "react";
import FirstPage from "./Page";
import "./styles/App.scss";

class App extends Component {
	state = {
		activePage: 0,
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
						error: false,
						errorMessage: "",
						page: 1,
					},
					{
						name: "sex",
						value: "",
						label: "Sex",
						input: "select",
						options: ["", "Male", "Female", "Other"],
						error: false,
						errorMessage: "",
						page: 1,
					},

					{
						name: "maritalStatus",
						value: "",
						input: "select",
						label: "Marital Status",
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
							signs: "letters",
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
							signs: "letters or numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
					{
						name: "postalCode",
						value: "",
						label: "Postal Code",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 5,
							maxLength: 6,
							signs: "numbers",
						},
						error: false,
						errorMessage: "",
						page: 2,
					},
				],
			},
		],
	};

	errorMessageActive = "form__firstPage__errorMessage active";
	errorMessageHidden = "form__firstPage__errorMessage";

	messages = {
		onlyLetters: "has to contain only letters.",
		onlyNumbers: "has to contain only numbers.",
		emptySelect: "has to be chosen.",
		emptyDate: "Date of Birth has to be chosen.",
		underEighteen: "You have to be over 18 years old.",
	};

	regex = {
		lettersOnly: /^[A-Za-z]+$/,
	};

	handleInputChange = (e) => {
		const inputName = e.target.id;
		let activePage = this.state.activePage;
		const inputs = [...this.state.pages[activePage].inputs];

		for (let input of inputs) {
			if (input.name === inputName) {
				input.value = e.target.value;
			}
		}

		this.setState({
			activePage,
			inputs,
		});
	};

	handleSubmitPage = (e) => {
		e.preventDefault();
		const activePage = this.state.activePage;
		this.checkForm(this.state.pages[activePage]);
	};

	checkForm(pageInputs) {
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
		if (input.input === "input" && input.type !== "date") {
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
	}

	checkTextInput(value, error, errorMessage, minLength, maxLength, type) {
		if (!value.match(this.regex.lettersOnly)) {
			error = true;
			errorMessage = this.messages.onlyLetters;
		}

		if (value.length < minLength) {
			error = true;
			errorMessage = `has to be longer then ${minLength} ${type}.`;
		}

		if (value.length > maxLength) {
			error = true;
			errorMessage = `has to be shorter then ${maxLength} ${type}.`;
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

	render() {
		const activePage = this.state.activePage;
		return (
			<div className="form">
				<form className="form__firstPage" noValidate>
					{this.state.pages[activePage] ? (
						<FirstPage
							inputs={this.state.pages[activePage].inputs}
							messageHidden={this.errorMessageHidden}
							messageActive={this.errorMessageActive}
							change={this.handleInputChange}
							submit={this.handleSubmitPage}
							previousPageBtn={this.handlePreviousPageClick}
							activePage={this.state.activePage}
						/>
					) : null}
				</form>
			</div>
		);
	}
}

export default App;
