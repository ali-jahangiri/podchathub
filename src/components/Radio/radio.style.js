import { css } from "styled-components";
import WrapWithStyled from "../../utils/WrapWithStyled";

const StyledRadio = WrapWithStyled("div", theme => ({
	base: css`
		width: 25px;
		height: 25px;
		border-radius: 25px;
		overflow: hidden;
		cursor: pointer;
		transition: ${theme.animateDuration.fast};
		transform: scale(0);
		background-color: ${theme.colors.pallet.natural[4]};
		display: flex;
		align-items: center;
		justify-content: center;

		div {
			width: 0%;
			height: 0%;
			background-color: ${theme.colors.pallet.natural[8]};
			border-radius: 25px;
			transition: ${theme.animateDuration.fast};
			transition-delay: 0.5s;
		}

		&.radio {
			transition-delay: 0.3s;

			&--show {
				transition-delay: 0;
				transform: scale(1);

				div {
					width: 50%;
					height: 50%;
				}
			}
		}
	`,
}));

export default StyledRadio;
