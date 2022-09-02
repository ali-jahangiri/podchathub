import { Fragment, useEffect, useState } from "react";
import selfClearTimeout from "utils/selfClearTimeout";
import StyledInitialIntro from "./initialIntro.style";

const InitialIntro = ({ showIntro, children }) => {
	const [animateHelper, setAnimateHelper] = useState(false);
	const [renderIntro, setRenderIntro] = useState(true);
	const [fadeOutIntro, setFadeOutIntro] = useState(false);

	useEffect(function startAnimateHandler() {
		selfClearTimeout(() => setAnimateHelper(true), 10);
	}, []);

	useEffect(
		function hideIntroHandler() {
			if (!showIntro) {
				setFadeOutIntro(true);
				selfClearTimeout(() => setRenderIntro(false), 180);
			}
		},
		[showIntro]
	);

	return (
		<Fragment>
			<StyledInitialIntro
				className={`initialIntro ${fadeOutIntro ? "initialIntro--fadeout" : ""} ${
					animateHelper ? "initialIntro--animate" : ""
				}`}
			>
				{renderIntro ? (
					<div className="initialIntro__container">
						<div className="initialIntro__iconBox">
							<p>پاد</p>
						</div>
						<div className="initialIntro__desc">
							<p>پاد چت</p>
							<span>ارتباطی آسان </span>
							<span>در سایه سلامتی</span>
						</div>
					</div>
				) : (
					children
				)}
			</StyledInitialIntro>
		</Fragment>
	);
};

export default InitialIntro;
