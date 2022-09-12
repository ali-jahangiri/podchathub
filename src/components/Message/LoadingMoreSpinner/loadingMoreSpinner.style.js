import { css, keyframes } from "styled-components";
import WrapWithStyled from "../../../utils/WrapWithStyled";

const animateWave = keyframes`
	from {
		transform: translateY(0px);
	}
	to {
		transform: translateY(10px);
	}
`;

const StyledLoadingMoreSpinner = WrapWithStyled("div", theme => ({
	base: css`
		display: flex;
		align-items: center;
		justify-content: center;
		transition: ${theme.animateDuration.fast};
		height: 0px;
		overflow: hidden;
		opacity: 0;

		div {
			width: 10px;
			height: 10px;
			border-radius: 5px;
			background-color: ${theme.colors.pallet.natural[4]};
			margin: 0px ${theme.space[2]};
			animation: ${animateWave} 0.3s forwards alternate infinite;
		}

		${props =>
			props.show &&
			css`
				height: 40px;
				opacity: 1;
			`}
	`,
}));

export default StyledLoadingMoreSpinner;
