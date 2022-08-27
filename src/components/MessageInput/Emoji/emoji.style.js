import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledEmoji = WrapWithStyled("div", theme => ({
	base: css`
		position: relative;

		.emoji {
			&__trigger {
				width: 70px;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				user-select: none;

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
				width: 400px;
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
					left: 89%;
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
				display: flex;
				flex-wrap: wrap;
				padding: ${theme.space[8]};
				background-color: white;
				border-radius: ${theme.radius[5]};
				position: relative;
				z-index: 2;
			}

			&__item {
				cursor: pointer;
				margin: ${theme.space[3]};
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1 0;
				transition: ${theme.animateDuration.fast};
				border-radius: ${theme.radius[2]};
				padding: ${theme.space[5]};
				background-color: white;
				border: none;
				max-width: 67px;

				img {
					width: 3rem;
					-webkit-user-drag: none;
					-moz-user-drag: none;
					-o-user-drag: none;
				}

				&:hover {
					background-color: ${theme.colors.pallet.natural[2]};
				}

				&:active {
					background-color: ${theme.colors.pallet.natural[4]};
				}
			}
		}
	`,
}));

export default StyledEmoji;
