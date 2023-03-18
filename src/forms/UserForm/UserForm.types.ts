export type FormDataType = {
	firstName: string;
	lastName: string;
	age: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	email: string;
	password: string;
};

type UpdateFileds = {
	updateFields: (fields: Partial<FormDataType>) => void;
};

export type UserDetailsFormProps = Pick<
	FormDataType,
	"firstName" | "lastName" | "age"
> &
	UpdateFileds;
export type AddressFormProps = Pick<
	FormDataType,
	"street" | "city" | "state" | "zipCode"
> &
	UpdateFileds;
export type AccountFormProps = Pick<FormDataType, "email" | "password"> &
	UpdateFileds;
