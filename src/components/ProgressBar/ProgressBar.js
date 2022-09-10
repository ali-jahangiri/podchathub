import { useEffect, useState } from "react";
import StyledProgressBar from "./ProgressBar.style";

const ProgressBar = ({ totalStep, currentStep, render = false }) => {
	const [animateFadeIn, setAnimateFadeIn] = useState(render);

	useEffect(
		function fadeProgressBarHandler() {
			setAnimateFadeIn(render);
		},
		[render]
	);

	return (
		<StyledProgressBar className={`progressBar ${animateFadeIn ? "progressBar--show" : ""}`}>
			<div className="progressBar__container">
				<p className="progressBar__title">{animateFadeIn}</p>
				<div className="progressBar__bar">
					<div
						style={{ width: `${(currentStep / totalStep) * 100}%` }}
						className="progressBar__progress"
					/>
				</div>
			</div>
		</StyledProgressBar>
	);
};

export default ProgressBar;
