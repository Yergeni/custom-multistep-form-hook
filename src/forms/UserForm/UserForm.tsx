import React, { FormEvent, useState } from "react";

import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { UserDetailsForm } from "./UserDetailsForm";
import { INITIAL_FORM_DATA } from "./UserForm.constants";

import { FormDataType } from "./UserForm.types";

import { useMultiStepForm } from "hooks";

export default function UserForm() {
	const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM_DATA);

	const updateFields = (fields: Partial<FormDataType>) => {
		setFormData((prevData) => ({ ...prevData, ...fields }));
	};

	const {
		numberOfSteps,
		currentStepIndex,
		step,
		next,
		back,
		gotTo,
		isFisrtStep,
		isLastStep,
	} = useMultiStepForm([
		<UserDetailsForm {...formData} updateFields={updateFields} />,
		<AddressForm {...formData} updateFields={updateFields} />,
		<AccountForm {...formData} updateFields={updateFields} />,
	]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!isLastStep) return next();
		alert(
			`Successfull Account Creation with FORM DATA:\n ${JSON.stringify(
				formData,
				null,
				2
			)}`
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* Steps Info */}
			<div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
				{currentStepIndex + 1} / {numberOfSteps}
			</div>
			{/* Step */}
			{step}
			{/* Buttons */}
			<div
				style={{
					display: "flex",
					marginTop: "1rem",
					gap: ".5rem",
					justifyContent: "flex-end",
				}}
			>
				{!isFisrtStep && (
					<button
						type="button"
						style={{
							padding: ".5rem 1rem",
							background: "GrayText",
							color: "white",
							border: "none",
							borderRadius: ".2rem",
							fontWeight: 500,
						}}
						onClick={back}
					>
						Back
					</button>
				)}
				<button
					type="submit"
					style={{
						padding: ".5rem 1rem",
						background: "darkgreen",
						color: "white",
						border: "none",
						borderRadius: ".2rem",
						fontWeight: 500,
					}}
				>
					{isLastStep ? "Finish" : "Next"}
				</button>
			</div>
		</form>
	);
}
