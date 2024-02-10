import React, { useState, useRef, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import "../../../index.css";
import { BUTTON_DEBUG } from "../common_exports";
import { useRipple } from "../../../hooks/useRipple";

/* /components/Button_v1/Button_v1.tsx  */

type ButtonType = "button" | "submit" | "reset" | undefined;

interface Props {
	styles?: string;
	type?: ButtonType;
	title?: string;
	disabled?: boolean;
	message?: string;
	clickLimit?: number; // Rename clickcounts to clickLimit
	disableErrorMessages?: boolean;
	rippleColor?: string;
}

const ButtonV1: React.FC<Props> = (props: Props) => {
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState(
		// Set default message here, considering props
		props.message || "Wow, you are Weak in Clicking 😛"
	);

	const buttonRef = useRef<HTMLButtonElement>(null);

	useRipple(buttonRef, {
		rippleColor: props.rippleColor || "rgba(0, 0, 0, 0.2)",
		animationLength: 3000,
	});

	const notifyError = () => {
		toast.error(message, {
			position: "bottom-left",
			duration: 5000,

			style: {
				border: "1px solid #713200",
				padding: "16px",
				color: "#713200",
				borderRadius: "15px",
			},
			iconTheme: {
				primary: "#713200",
				secondary: "#FFFAEE",
			},
		});
	};
	const handleClick = () => {
		if (props.clickLimit && count >= props.clickLimit) {
			return;
		}

		if (message && count >= Number(props.clickLimit) / 2) {
			if (!props.disableErrorMessages) {
				BUTTON_DEBUG && console.log("Inside notifyError");
				notifyError();
			}
		}

		setCount(count + 1);
	};

	return (
		<>
			<Toaster />
			<button
				type={props.type || "button"}
				onClick={handleClick}
				ref={buttonRef}
				className={`${props.styles ? `relative ${props.styles}` : " relative px-3 py-2 rounded-lg hover:bg-violet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-violet-700 cursor-pointer bg-violet-500 text-white"}`}
			>
				{props.title}
			</button>
		</>
	);
};

export default ButtonV1;
