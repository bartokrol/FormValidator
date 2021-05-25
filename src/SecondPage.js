import React from "react";

const SecondPage = (props) => {
	return (
		<>
			{/* <label htmlFor="country" className="form__firstPage__labelName">
				Country:{" "}
			</label>
			<input
				type="text"
				id="country"
				value={props.country}
				autoComplete="off"
			/>
			<span className="form__firstPage__errorMessage">Error message</span>
			<label htmlFor="city" className="form__firstPage__labelName">
				City:{" "}
			</label>
			<input
				type="text"
				id="city"
				value={props.city}
				autoComplete="off"
			/>
			<span className="form__firstPage__errorMessage">Error message</span>
			<label htmlFor="street" className="form__firstPage__labelName">
				Street:{" "}
			</label>
			<input
				type="text"
				id="street"
				value={props.street}
				autoComplete="off"
			/>
			<span className="form__firstPage__errorMessage">Error message</span>
			<label
				htmlFor="building_number"
				className="form__firstPage__labelName"
			>
				Building Number:{" "}
			</label>
			<input
				type="text"
				id="building_number"
				value={props.buildingNumber}
				autoComplete="off"
			/>
			<span className="form__firstPage__errorMessage">Error message</span>
			<label htmlFor="postal_code" className="form__firstPage__labelName">
				Postal Code:{" "}
			</label>
			<input
				type="text"
				id="postal_code"
				value={props.postalCode}
				autoComplete="off"
			/> */}
			<span className="form__firstPage__errorMessage">Error message</span>
			<button class="form__button" onClick={props.previousPageClick}>
				Previous Page
			</button>
			<button class="form__button" onClick={props.submit}>
				Next Page
			</button>
		</>
	);
};

export default SecondPage;
