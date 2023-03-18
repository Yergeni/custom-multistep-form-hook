import React from "react";
import FormWrapper from "../FormWrapper";
import { UserDetailsFormProps } from "./UserForm.types";

export function UserDetailsForm({
	firstName,
	lastName,
	age,
	updateFields,
}: UserDetailsFormProps) {

	const handleChange = ({
		currentTarget: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		updateFields({
			[name]: value,
		});
	};

	return (
		<FormWrapper title="User Details">
			<label htmlFor="firstName">First Name</label>
			<input
				name="firstName"
				autoFocus
				required
				type="text"
				value={firstName}
				onChange={handleChange}
			/>
			<label htmlFor="lastName">Last Name</label>
			<input
				name="lastName"
				required
				type="text"
				value={lastName}
				onChange={handleChange}
			/>
			<label htmlFor="age">Age</label>
			<input
				name="age"
				required
				min={1}
				max={110}
				type="number"
				value={age}
				onChange={handleChange}
			/>
		</FormWrapper>
	);
}
