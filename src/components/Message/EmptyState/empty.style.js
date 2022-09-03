import { css, keyframes } from "styled-components";
import WrapWithStyled from "../../../utils/WrapWithStyled";

const animateFadeChatBlock = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const StyledEmptyState = WrapWithStyled("div", theme => ({
	base: css`
		width: 50%;
		margin: auto;
		text-align: center;

		& > div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: ${theme.space[12]};

			div {
				width: 150px;
				height: 35px;
				border-radius: ${theme.radius[2]};
				background-color: ${theme.colors.pallet.natural[2]};
				margin: ${theme.space[5]};
				animation: ${animateFadeChatBlock} 1s forwards alternate;
				opacity: 0;

				&:nth-child(even) {
					border-radius: 0 ${theme.radius[6]} ${theme.radius[6]} ${theme.radius[6]};
					margin-right: ${theme.space[18]};
				}

				&:nth-child(odd) {
					border-radius: ${theme.radius[6]} 0 ${theme.radius[6]} ${theme.radius[6]};
					margin-left: ${theme.space[18]};
				}
			}
		}

		p {
			font-size: ${theme.fontSizes.lg};
			margin-bottom: ${theme.space[5]};
			color: ${theme.colors.pallet.natural[10]};
		}

		span {
			color: ${theme.colors.pallet.natural[8]};
		}
	`,
}));

export default StyledEmptyState;
