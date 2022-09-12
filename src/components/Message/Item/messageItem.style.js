import { css, keyframes } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const animateNewMessageGrow = keyframes`
	from {
		max-height: 0px;
	}

	to {
		max-height: 200px;
	}
`;

const StyledMessageItem = WrapWithStyled("div", theme => ({
	base: css`
		margin: ${theme.space[5]} 0;
		margin-bottom: ${theme.space[8]};
		transition: ${theme.animateDuration.fast};
		display: flex;

		.messageItem {
			&__box {
				display: flex;
				width: 100%;
			}

			&__contentRow {
				display: flex;
			}

			&__time {
				padding-right: ${theme.space[7]};
				padding-left: ${theme.space[7]};
				margin-top: auto;
				font-size: 0.8rem;
				color: ${theme.colors.pallet.natural[6]};
				cursor: pointer;
				user-select: none;
			}

			&__content {
				padding: ${theme.space[11]} ${theme.space[12]};
				display: flex;
				align-items: center;
				line-height: ${theme.lineHeights[7]};
			}

			&__avatar {
				margin-top: -${theme.space[8]};
				flex-shrink: 0;
			}

			&__selectBox {
				margin-right: auto;
				display: flex;
				align-items: center;
				justify-content: center;
				padding-left: ${theme.space[9]};
			}

			&__name {
				display: flex;
				align-items: center;
				margin-bottom: ${theme.space[8]};
				color: ${theme.colors.pallet.natural[10]};

				p {
					font-size: ${theme.fontSizes.lg};
					color: ${theme.colors.pallet.natural[10]};
				}
			}
		}

		&.messageItem {
			&--author {
				.messageItem {
					&__avatar {
						margin-left: ${theme.space[5]};
					}

					&__name {
						p {
							margin-left: ${theme.space[5]};
						}
					}

					&__content {
						background-color: ${theme.colors.brand.primary};
						color: white;
						border-radius: ${theme.radius[6]} 0 ${theme.radius[6]} ${theme.radius[6]};
					}
				}
			}

			&--new {
				animation: ${animateNewMessageGrow} ${theme.animateDuration.slow} forwards alternate
					cubic-bezier(0.755, 0.05, 0.855, 0.06);

				opacity: 0.8;
			}

			&--provider {
				.messageItem {
					&__avatar {
						margin-right: ${theme.space[5]};
					}

					&__contentRow {
						flex-direction: row-reverse;
					}

					&__name {
						flex-direction: row-reverse;
						justify-content: flex-start;

						p {
							margin-right: ${theme.space[5]};
						}
					}

					&__box {
						flex-direction: row-reverse;
						margin-right: auto;
					}

					&__content {
						background-color: ${theme.colors.pallet.natural[2]};
						color: ${theme.colors.pallet.natural[10]};
						border-radius: 0 ${theme.radius[6]} ${theme.radius[6]} ${theme.radius[6]};
					}
				}
			}

			&--detailsOmit {
				margin-top: ${theme.space[5]};

				.messageItem {
					&__selectBox {
						padding-left: ${theme.space[19]};
					}
				}

				&.messageItem {
					&--author {
						padding-right: ${theme.space[22]};
					}

					&--provider {
						padding-left: ${theme.space[22]};
					}
				}
			}

			&--selected {
				transition: ${theme.animateDuration.normal};
				background-color: #e9e9e940;
			}
		}
	`,
}));

export default StyledMessageItem;
