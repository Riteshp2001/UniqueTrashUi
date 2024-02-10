import React, { useState } from "react";
import { RANGE_DEBUG } from "../../Range/common_exports";

interface Props {
	value?: number;
	min?: number;
	max?: number;
	tiltDegree?: number;
	DEBUG?: boolean;
}

/* /components/Range_v1/Range_v1.tsx  */

const RangeV1: React.FC<Props> = (props: Props) => {
	const [value, setValue] = useState<number>(
		// Set default value here, considering props
		props.value !== undefined ? props.value : 50
	);

	const handleMouseMove = (e: any) => {
		// Get mouse position and target element dimensions
		const x = e.clientX;
		const left = e.target.getBoundingClientRect().left;
		const width = e.target.getBoundingClientRect().width;

		// Calculate new x position relative to target element
		const newX = x - left;
		const ratioPosition = newX / width;

		let rotation;

		// Determine rotation based on mouse position ratio
		if (ratioPosition < 0.5) {
			rotation = (ratioPosition - 0.5) * Number(props.tiltDegree); // Tilt to the right
			if (value > Number(props.min)) setValue(value - 1); // Decrease value
		} else {
			rotation = (ratioPosition - 0.5) * Number(props.tiltDegree); // Tilt to the left
			if (value < Number(props.max)) setValue(value + 1); // Increase value
		}

		RANGE_DEBUG && console.log("rotation", rotation);

		// Apply rotation transformation to target element
		e.target.style.transform = `rotate(${rotation}deg)`;
		e.target.style.transition = "transform 0.6s";
		e.target.style.transitionTimingFunction = "ease-in-out";
		e.target.style.transitionProperty = "transform";
		e.target.style.transitionDuration = "0.6s";
		e.target.style.transitionDelay = "0s";
	};

	const handleOnMouseOut = (e: any) => {
		// Reset rotation transformation on mouse out
		e.target.style.transform = "rotate(0deg)";
		e.target.style.transition = "transform 0.2s";
		e.target.style.transitionTimingFunction = "ease-in-out";
		e.target.style.transitionProperty = "transform";
		e.target.style.transitionDuration = "0.6s";
		e.target.style.transitionDelay = "0s";
	};

	const handleOnChange = (e: any) => {
		// Update value when input changes
		RANGE_DEBUG && console.log("Inside Handle Change", e.target.value);
		setValue(parseInt(e.target.value, 10));
	};

	return (
		<>
			<input
				type="range"
				min={props.min || 0} //default value is 0
				max={props.max || 100} //default value is 100
				value={value} //default value is 50
				onChange={handleOnChange}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleOnMouseOut}
			/>
			{props.DEBUG && (
				<div>
					<p>
						Value: <b>{value}</b>
					</p>
				</div>
			)}
		</>
	);
};

export default RangeV1;
