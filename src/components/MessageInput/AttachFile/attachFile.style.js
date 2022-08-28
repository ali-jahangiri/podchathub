import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledAttachFile = WrapWithStyled("div", theme => ({
	base: css`
		position: relative;

		.attacheFile {
			&__trigger {
				width: 70px;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				user-select: none;
				background-color: transparent;
				border: none;
				outline-color: ${theme.colors.brand.primary};

				& > svg {
					width: 1.3rem;
					height: 1.3rem;
					fill: ${theme.colors.pallet.natural[8]};
					position: relative;
					z-index: 1;
				}

				/* mimicking small icon background */
				&::after {
					content: "";
					width: 60%;
					height: 65%;
					background: transparent;
					position: absolute;
					left: 50%;
					top: 50%;
					border-radius: 55px;
					z-index: 0;
					transform: translate(-50%, -50%);
					transition: ${theme.animateDuration.fast};
				}

				&--active {
					&::after {
						background-color: ${theme.colors.brand.primary}20;
					}

					svg {
						fill: ${theme.colors.brand.primary};
					}
				}
			}

			&__popover {
				position: absolute;
				bottom: calc(100% + ${theme.space[7]});
				left: 0;
				width: 220px;
				border-radius: ${theme.radius[5]};
				border: 2px solid ${theme.colors.pallet.natural[2]};
				background-color: white;
				opacity: 0;
				transition: ${theme.animateDuration.fast};

				&::after {
					content: "";
					width: 1rem;
					height: 1rem;
					position: absolute;
					left: 24px;
					bottom: -10px;
					background-color: white;
					border: 2px solid ${theme.colors.pallet.natural[2]};
					transform: rotate(45deg);
				}

				&--show {
					opacity: 1;
					bottom: calc(100% + ${theme.space[10]});
				}
			}

			&__itemContainer {
				padding: ${theme.space[8]};
				background-color: white;
				border-radius: ${theme.radius[5]};
				position: relative;
				z-index: 2;
			}

			&__item {
				padding: ${theme.space[10]};
				font-size: ${theme.fontSizes.base};
				cursor: pointer;
				transition: ${theme.animateDuration.fast};
				border-radius: ${theme.radius[2]};
				user-select: none;
				border: none;
				width: 100%;
				font-family: ${theme.fonts.primary};
				background: white;
				display: flex;
				justify-content: space-between;

				svg {
					width: 1.3rem;
					height: 1.3rem;
					fill: ${theme.colors.pallet.natural[8]};
				}

				&:hover {
					background: ${theme.colors.pallet.natural[2]};
				}

				&:active {
					background: ${theme.colors.pallet.natural[4]};
				}

				&:last-child {
					margin-top: ${theme.space[5]};
				}
			}
		}
	`,
}));

export default StyledAttachFile;
