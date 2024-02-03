import React, { ChangeEvent, useState } from "react";

interface Props {
	value: number;
	min: number;
	max: number;
	onChange: (value: number) => void;
}

const Range: React.FC<Props> = ({ value, min, max, onChange }) => {
	const [decrement, setDecrement] = useState<boolean>(true);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value);

		if (newValue > value) {
			// Slider is moving to the right
			setDecrement(false);
		} else if (newValue < value) {
			// Slider is moving to the left
			setDecrement(true);
		}

		onChange(newValue);
	};

	const handleMouseMove = () => {
		if (decrement) {
			// Funny behavior: Decrement when moving to the right
			onChange(value - 1);
		} else {
			// Funny behavior: Increment when moving to the left
			onChange(value + 1);
		}
	};

	return (
		<input type="range" min={min} max={max} value={value} onChange={handleChange} onMouseMove={handleMouseMove} />
	);
};

export default Range;
