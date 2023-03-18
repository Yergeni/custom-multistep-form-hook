import React from "react";
import FormWrapper from "../FormWrapper";
import { AddressFormProps } from "./UserForm.types";

export function AddressForm({
	street,
	city,
	state,
	zipCode,
	updateFields,
}: AddressFormProps) {
	const handleChange = ({
		currentTarget: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		updateFields({
			[name]: value,
		});
	};

	return (
		<FormWrapper title="Address">
			<label htmlFor="street">Street</label>
			<input
				name="street"
				autoFocus
				required
				type="text"
				value={street}
				onChange={handleChange}
			/>
			<label htmlFor="city">City</label>
			<input
				name="city"
				required
				type="text"
				value={city}
				onChange={handleChange}
			/>
			<label htmlFor="state">State</label>
			<input
				name="state"
				required
				type="text"
				value={state}
				onChange={handleChange}
			/>
			<label htmlFor="zipCode">Zip Code</label>
			<input
				name="zipCode"
				required
				type="text"
				value={zipCode}
				onChange={handleChange}
			/>
		</FormWrapper>
	);
}
