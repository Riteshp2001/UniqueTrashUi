import { RangeV1 } from "./components/Range";
import { ButtonV1 } from "./components/Button";

function App() {
	// DEMONSTRATION PURPOSES
	return (
		<div className="flex items-center justify-center h-screen w-screen bg-gray-100">
			<div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg">
				<h1 className="text-3xl font-bold text-gray-800 mb-6">Buggy Range Slider and Button 😈</h1>
				<p className="text-lg text-gray-600 mb-8">Adjust the slider to change the value.</p>
				<div className="mb-8 text-center">
					<RangeV1 value={-1} min={-100} max={100} tiltDegree={90} DEBUG={true} />
				</div>
				<p className="text-lg text-gray-600 mb-8">click the button to see the result.</p>
				<div className="w-50 text-center">
					<ButtonV1 title={"CLICK ME"} clickLimit={20} />
				</div>
				<p className="text-sm text-gray-500 mt-4">Developed by Ritesh Pandit</p>
			</div>
		</div>
	);
}

export default App;
