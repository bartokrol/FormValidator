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
	};

	handleInputChange = (e) => {
		const name = e.target.id;
		this.setState({
			[name]: e.target.value,
		});
	};

	handleSubmitFirstPage = (e) => {
		e.preventDefault();
	};

	render() {
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
					<span className="form__firstPage__errorMessage">
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
					<span className="form__firstPage__errorMessage">
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
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label htmlFor="sex" className="form__firstPage__labelName">
						Sex:{" "}
					</label>
					<select id="sex" name="sex">
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>

					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label
						htmlFor="maritalStatus"
						className="form__firstPage__labelName"
					>
						Marital Status:{" "}
					</label>
					<select id="maritalStatus" name="maritalStatus">
						<option value="single">Single</option>
						<option value="married">Married</option>
						<option value="separated">Separated</option>
						<option value="divorced">Divorced</option>
						<option value="widowed">Widowed</option>
					</select>
					<span className="form__firstPage__errorMessage">
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
