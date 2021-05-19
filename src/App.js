import { Component } from "react";
import "./styles/App.scss";

class App extends Component {
	state = {
		name: "",
		lastName: "",
		dateOfBirth: "",
		sex: "",
		maritalStatus: "",
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
	};

	errorMessageActive = "form__firstPage__errorMessage active";
	errorMessageHidden = "form__firstPage__errorMessage";

	handleInputChange = (e) => {
		const name = e.target.id;
		this.setState({
			[name]: e.target.value,
		});
	};

	handleSubmitFirstPage = (e) => {
		e.preventDefault();
		const validated = this.checkForm();
		const { name, lastName, dateOfBirth, sex, maritalStatus } = validated;
		this.setState({
			errors: {
				name_err: !name,
				lastName_err: !lastName,
				dateOfBirth_err: !dateOfBirth,
				sex_err: !sex,
				maritalStatus_err: !maritalStatus,
			},
		});
	};

	checkForm() {
		let name = true;
		let lastName = true;
		let dateOfBirth = true;
		let sex = true;
		let maritalStatus = true;

		const date = this.checkDateOfBirthValidation(dateOfBirth);
		dateOfBirth = date;

		if (this.state.name.length > 3) {
		} else {
			name = false;
		}

		if (this.state.lastName.length > 3) {
		} else {
			lastName = false;
		}
		if (dateOfBirth) {
		} else {
			dateOfBirth = false;
		}
		if (this.state.sex) {
		} else {
			sex = false;
		}
		if (this.state.maritalStatus) {
		} else {
			maritalStatus = false;
		}

		return {
			name,
			lastName,
			dateOfBirth,
			sex,
			maritalStatus,
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
		const {
			name_err,
			lastName_err,
			dateOfBirth_err,
			sex_err,
			maritalStatus_err,
		} = this.state.errors;

		return (
			<div className="form">
				<form className="form__firstPage" noValidate>
					<label
						htmlFor="name"
						className="form__firstPage__labelName"
					>
						Name:
					</label>
					<input
						type="text"
						id="name"
						autoComplete="off"
						value={this.state.name}
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
						value={this.state.lastName}
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
						value={this.state.dateOfBirth}
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
						value={this.state.sex}
					>
						<option value=" "></option>
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
						value={this.state.maritalStatus}
					>
						<option value=" "></option>
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
					</button>
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
