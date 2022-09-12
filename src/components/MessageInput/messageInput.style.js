import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledMessageInput = WrapWithStyled("div", theme => ({
	base: css`
		width: 100%;
		display: flex;
		position: relative;
		z-index: 9;

		[contenteditable="true"]:empty:before {
			content: attr(placeholder);
			color: ${theme.colors.pallet.natural[8]};
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

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
				padding: 16px;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				max-height: 300px;

				&:focus {
					outline: none;
				}

				/* emoji image sizes */
				img {
					width: 3.4rem;
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
				background-color: ${theme.colors.brand.primary};

				svg {
					width: 1.3rem;
					height: 1.3rem;
					transform: rotate(-135deg);
					fill: white;
					transition: ${theme.animateDuration.fast};
				}

				&:disabled {
					background-color: ${theme.colors.pallet.natural[2]};
					cursor: default;

					svg {
						fill: ${theme.colors.pallet.natural[8]};
					}
				}
			}
		}
	`,
}));

export default StyledMessageInput;
