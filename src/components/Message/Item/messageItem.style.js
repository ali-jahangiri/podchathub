import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledMessageItem = WrapWithStyled("div", theme => ({
	base: css`
		margin: ${theme.space[5]} 0;
		margin-top: ${theme.space[8]};

		&.messageItem,
		.messageItem {
			&__box {
				display: flex;
				max-width: 60%;
			}

			&__content {
				padding: ${theme.space[12]};
				display: flex;
				align-items: center;
				line-height: ${theme.lineHeights[7]};
			}

			&__avatar {
				margin-top: -${theme.space[8]};
				flex-shrink: 0;
			}

			&__metaDetails {
				display: flex;
				align-items: center;
				margin-bottom: ${theme.space[5]};

				p {
					font-size: ${theme.fontSizes.lg};
					color: ${theme.colors.pallet.natural[10]};
				}

				span {
					color: ${theme.colors.pallet.natural[6]};
				}
			}

			&--owner {
				.messageItem {
					&__avatar {
						margin-left: ${theme.space[5]};
					}

					&__metaDetails {
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

			&--clinic {
				.messageItem {
					&__avatar {
						margin-right: ${theme.space[5]};
					}

					&__metaDetails {
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

				&.messageItem {
					&--owner {
						margin-right: ${theme.space[18]};
					}

					&--clinic {
						margin-left: ${theme.space[18]};
					}
				}
			}
		}
	`,
}));

export default StyledMessageItem;
