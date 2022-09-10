import { css } from "styled-components";
import WrapWithStyled from "../../utils/WrapWithStyled";

const StyledSelectedMessageController = WrapWithStyled("div", theme => ({
	base: css`
		width: 100%;
		height: 110px;
		background-color: white;
		transition: ${theme.animateDuration.slow};
		position: fixed;
		z-index: 2;
		border-radius: ${theme.radius[3]};
		bottom: -100%;
		left: 0;

		.messageController {
			&__container {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			&__closeTrigger {
				cursor: pointer;
				padding: 1rem;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: ${theme.animateDuration.normal};
				border-radius: 35px;

				svg {
					width: 1.8rem;
					height: 1.8rem;
					fill: ${theme.colors.pallet.natural[10]};
				}

				&:hover {
					background-color: ${theme.colors.pallet.natural[2]};
				}
			}

			&__deleteTrigger {
				cursor: pointer;
				padding: 1rem;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 35px;
				transition: ${theme.animateDuration.normal};
				background-color: ${theme.colors.pallet.red[2]};

				svg {
					width: 1.6rem;
					height: 1.6rem;
					transition: ${theme.animateDuration.normal};
					fill: ${theme.colors.pallet.red[4]};
				}

				&:hover {
					background-color: ${theme.colors.pallet.red[3]};

					svg {
						fill: ${theme.colors.pallet.red[7]};
					}
				}
			}

			&__title {
				font-size: ${theme.fontSizes.lg};
			}
		}

		&.messageController {
			&--show {
				bottom: 0;
			}
		}
	`,
}));

export default StyledSelectedMessageController;
