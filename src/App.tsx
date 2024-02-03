import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import { Button } from "./components/Button/Button_v1";
import { Range } from "./components/Range";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Range
				min={0}
				max={100}
				value={count}
				onChange={() => {
					console.log("onChange");
				}}
			/>
		</div>
	);
}

export default App;
