import React from "react";

const SecondPage = (props) => {
	const { country, city, street, buildingNumber, postalCode } = props;
	const {
		country_err,
		city_err,
		street_err,
		buildingNumber_err,
		postalCode_err,
	} = props.errors;
	const {
		country_message,
		city_message,
		street_message,
		buildingNumber_message,
		postalCode_message,
	} = props.errorMessages;

	return (
		<>
			<label htmlFor="country" className="form__firstPage__labelName">
				Country:{" "}
			</label>
			<input
				type="text"
				id="country"
				onChange={props.change}
				value={props.country}
				autoComplete="off"
			/>
			<span
				className={city_err ? props.messageActive : props.messageHidden}
			>
				{`Name ${city_message}`}
			</span>
			<label htmlFor="city" className="form__firstPage__labelName">
				City:{" "}
			</label>
			<input
				type="text"
				id="city"
				onChange={props.change}
				value={props.city}
				autoComplete="off"
			/>
			<span
				className={city_err ? props.messageActive : props.messageHidden}
			>
				{`Name ${city_message}`}
			</span>
			<label htmlFor="street" className="form__firstPage__labelName">
				Street:{" "}
			</label>
			<input
				type="text"
				id="street"
				onChange={props.change}
				value={props.street}
				autoComplete="off"
			/>
			<span
				className={
					street_err ? props.messageActive : props.messageHidden
				}
			>
				{`Name ${street_message}`}
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
				onChange={props.change}
				value={props.buildingNumber}
				autoComplete="off"
			/>
			<span
				className={
					buildingNumber_err
						? props.messageActive
						: props.messageHidden
				}
			>
				{`Name ${buildingNumber_message}`}
			</span>
			<label htmlFor="postal_code" className="form__firstPage__labelName">
				Postal Code:{" "}
			</label>
			<input
				type="text"
				id="postal_code"
				onChange={props.change}
				value={props.postalCode}
				autoComplete="off"
			/>
			<span
				className={
					postalCode_err ? props.messageActive : props.messageHidden
				}
			>
				{`Name ${postalCode_message}`}
			</span>
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
