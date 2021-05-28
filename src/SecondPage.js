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
				value={country}
				autoComplete="off"
			/>
			<span
				className={
					country_err ? props.messageActive : props.messageHidden
				}
			>
				{`Country ${country_message}`}
			</span>
			<label htmlFor="city" className="form__firstPage__labelName">
				City:{" "}
			</label>
			<input
				type="text"
				id="city"
				onChange={props.change}
				value={city}
				autoComplete="off"
			/>
			<span
				className={city_err ? props.messageActive : props.messageHidden}
			>
				{`City ${city_message}`}
			</span>
			<label htmlFor="street" className="form__firstPage__labelName">
				Street:{" "}
			</label>
			<input
				type="text"
				id="street"
				onChange={props.change}
				value={street}
				autoComplete="off"
			/>
			<span
				className={
					street_err ? props.messageActive : props.messageHidden
				}
			>
				{`Street ${street_message}`}
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
				value={buildingNumber}
				autoComplete="off"
			/>
			<span
				className={
					buildingNumber_err
						? props.messageActive
						: props.messageHidden
				}
			>
				{`Building Number ${buildingNumber_message}`}
			</span>
			<label htmlFor="postal_code" className="form__firstPage__labelName">
				Postal Code:{" "}
			</label>
			<input
				type="text"
				id="postal_code"
				onChange={props.change}
				value={postalCode}
				autoComplete="off"
			/>
			<span
				className={
					postalCode_err ? props.messageActive : props.messageHidden
				}
			>
				{`Postal Code ${postalCode_message}`}
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
