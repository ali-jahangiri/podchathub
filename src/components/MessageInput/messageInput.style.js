import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledMessageInput = WrapWithStyled("div", theme => ({
	base: css`
		width: 100%;
		display: flex;

		.messageInput {
			&__innerContainer {
				background: ${theme.colors.pallet.natural[2]};
				width: 100%;
				display: flex;
				border-radius: ${theme.radius[3]};
			}

			&__input {
				width: 100%;
				font-family: ${theme.fonts.primary};
				font-size: ${theme.fontSizes.lg};
				background: transparent;
				border: none;
				resize: none;
				overflow-y: hidden;
				padding: 16px;

				&:focus {
					outline: none;
				}
			}

			&__attachFile {
				width: 70px;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;

				svg {
					width: 1.3rem;
					height: 1.3rem;
					fill: ${theme.colors.pallet.natural[8]};
				}
			}

			&__sendTrigger {
				margin-right: ${theme.space[5]};
				background-color: ${theme.colors.pallet.natural[2]};
				border-radius: ${theme.radius[3]};
				cursor: pointer;
				width: 70px;
				display: flex;
				align-items: center;
				justify-content: center;
				border: none;
				transition: ${theme.animateDuration.fast};
				height: 64px;
				align-self: flex-end;

				svg {
					width: 1.3rem;
					height: 1.3rem;
					fill: ${theme.colors.pallet.natural[8]};
					transform: rotate(-135deg);
				}
			}
		}
	`,
}));

export default StyledMessageInput;
