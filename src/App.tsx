import UserForm from "./forms/UserForm/UserForm";

function App() {
	return (
		<div
			style={{
				position: "relative",
				background: "white",
				border: "1px solid black",
				padding: "2rem",
				margin: "1rem",
				borderRadius: ".5rem",
				fontFamily: "Arial",
				maxWidth: "max-content",
			}}
		>
			<UserForm />
		</div>
	);
}

export default App;
