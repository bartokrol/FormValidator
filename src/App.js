import { Component } from "react";
import "./styles/App.scss";

class App extends Component {
	state = {
		name: "",
		lastName: "",
		dateOfBirth: "",
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
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" value={this.state.name} />
					<span>Message</span>
					<label htmlFor="lastname">Last Name: </label>
					<input
						type="text"
						id="lastname"
						value={this.state.lastName}
					/>
					<span>Message</span>
					<label htmlFor="dateOfBirth">Date of Birth: </label>
					<input
						type="text"
						id="dateOfBirth"
						value={this.state.dateOfBirth}
					/>
					<span>Message</span>
					<label htmlFor="country">Country: </label>
					<input
						type="text"
						id="country"
						value={this.state.country}
					/>
					<span>Message</span>
					<label htmlFor="city">City: </label>
					<input type="text" id="city" value={this.state.city} />
					<span>Message</span>
					<label htmlFor="street">Street: </label>
					<input type="text" id="street" value={this.state.street} />
					<span>Message</span>
					<label htmlFor="building_number">Building Number: </label>
					<input
						type="text"
						id="building_number"
						value={this.state.buildingNumber}
					/>
					<span>Message</span>
					<label htmlFor="postal_code">Postal Code: </label>
					<input
						type="text"
						id="postal_code"
						value={this.state.postalCode}
					/>
					<span>Message</span>
					<button type="submit">Wyślij</button>
				</form>
			</div>
		);
	}
}

export default App;
