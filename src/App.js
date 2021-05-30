import { kMaxLength } from "buffer";
import { Component } from "react";
// import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import "./styles/App.scss";

class App extends Component {
	state = {
		activePage: 0,
		pages: [
			{
				firstPageValidated: false,
				firstPageVisible: true,
				inputs: [
					{
						id: 0,
						name: "name",
						value: "",
						label: "Name ",
						input: "input",
						type: "text",
						validationTerms: {
							minLength: 2,
							maxLength: 20,
						},
						error: false,
						errorMessage: "",
						page: 1,
						placing: 0,
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
						},
						error: false,
						errorMessage: "",
						page: 1,
						placing: 0,
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
						placing: 0,
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
						placing: 0,
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
						placing: 0,
					},
				],
			},
		],
		// // secondPageValidated: false,
		// secondPageVisible: false,
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
		activePage = this.findActivePage(inputName);
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

		this.checkForm(this.state.pages[activePage].inputs);
	};

	findActivePage(inputName) {
		for (let page of this.state.pages) {
			for (let input of page.inputs) {
				if (inputName === input.name) {
					return input.placing;
				}
			}
		}
	}

	checkForm(pageInputs) {
		const inputs = [...pageInputs];
		let errorsLength = inputs.length;
		for (let input of inputs) {
			input.error = false;
			input.errorMessage = "";

			input = this.checkInputType(input);

			if (!input.error) {
				errorsLength--;
			}
		}

		if (!errorsLength) {
			this.setState({
				firstPageValidated: true,
				firstPageVisible: false,
			});
		}

		this.setState({
			inputs: inputs,
		});
	}

	checkInputType(input) {
		if (input.input === "input" && input.type !== "date") {
			const { error, errorMessage } = this.checkTextInput(
				input.value,
				input.error,
				input.errorMessage,
				input.validationTerms.minLength,
				input.validationTerms.maxLength
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

	checkTextInput(value, error, errorMessage, minLength, maxLength) {
		if (!value.match(this.regex.lettersOnly)) {
			error = true;
			errorMessage = this.messages.onlyLetters;
		}

		if (value.length < minLength) {
			error = true;
			errorMessage = `has to be longer then ${minLength} letters.`;
		}

		if (value.length > maxLength) {
			error = true;
			errorMessage = `has to be shorter then ${maxLength} letters.`;
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

	render() {
		return (
			<div className="form">
				<form className="form__firstPage" noValidate>
					{this.state.pages[0].firstPageVisible ? (
						<FirstPage
							inputs={this.state.pages[0].inputs}
							messageHidden={this.errorMessageHidden}
							messageActive={this.errorMessageActive}
							change={this.handleInputChange}
							submit={this.handleSubmitPage}
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
