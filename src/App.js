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
					<input type="text" id="name" />
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label
						htmlFor="lastname"
						className="form__firstPage__labelName"
					>
						Last Name:{" "}
					</label>
					<input
						type="text"
						id="lastname"
						value={this.state.lastName}
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
						type="text"
						id="dateOfBirth"
						value={this.state.dateOfBirth}
					/>
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label htmlFor="sex" className="form__firstPage__labelName">
						Sex:{" "}
					</label>
					<input type="text" id="sex" value={this.state.sex} />
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label
						htmlFor="maritalStatus"
						className="form__firstPage__labelName"
					>
						Marital Status:{" "}
					</label>
					<input
						type="text"
						id="maritalStatus"
						value={this.state.maritalStatus}
					/>
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
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
					<input type="text" id="city" value={this.state.city} />
					<span className="form__firstPage__errorMessage">
						Error message
					</span>
					<label
						htmlFor="street"
						className="form__firstPage__labelName"
					>
						Street:{" "}
					</label>
					<input type="text" id="street" value={this.state.street} />
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
					/>
					<span className="form__firstPage__errorMessage">
						Error message
					</span> */}
					<button type="submit" class="form__button">
						Next Page
					</button>
				</form>
			</div>
		);
	}
}

export default App;
