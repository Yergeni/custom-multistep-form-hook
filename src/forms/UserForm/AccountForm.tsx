import React from "react";
import FormWrapper from "../FormWrapper";
import { AccountFormProps } from "./UserForm.types";

export function AccountForm({
	email,
	password,
	updateFields,
}: AccountFormProps) {
	const handleChange = ({
		currentTarget: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		updateFields({
			[name]: value,
		});
	};

	return (
		<FormWrapper title="Account">
			<label htmlFor="email">Email</label>
			<input
				name="email"
				autoFocus
				required
				type="text"
				value={email}
				onChange={handleChange}
			/>
			<label htmlFor="Password">Password</label>
			<input
				name="password"
				required
				type="password"
				value={password}
				onChange={handleChange}
			/>
		</FormWrapper>
	);
}
