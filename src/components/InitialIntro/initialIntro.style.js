import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledInitialIntro = WrapWithStyled("div", theme => ({
	base: css`
		&.initialIntro,
		.initialIntro {
			&__container {
				position: fixed;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: ${theme.animateDuration.fast};
				backdrop-filter: blur(20px);
			}

			&__desc {
				transition: 0.8s 2s;
				transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
				opacity: 0;
				margin-top: -6rem;
				text-align: center;

				p {
					font-size: 5rem;
					font-weight: 800;
					margin-bottom: 2rem;
					position: relative;
					z-index: 2;
					background-color: white;
				}

				span {
					font-size: 1.5rem;
					color: ${theme.colors.pallet.natural[8]};
					position: relative;
					top: -60px;
					transition: 0.4s;
					transition-delay: 2.5s;

					&:last-child {
						transition-delay: 2.8s;
					}
				}
			}

			&__iconBox {
				background-color: black;
				position: absolute;
				left: 50%;
				top: 50%;
				width: 100vw;
				height: 100vh;
				transform: translate(-50%, -50%);
				display: flex;
				align-items: center;
				justify-content: center;
				color: white;
				transition: all 0.8s 1s, top 0.8s 1.8s;
				transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
				font-size: 5rem;
				font-weight: 800;
				box-shadow: 0 0 210px 161px black;
				z-index: 9;
			}

			&--animate {
				.initialIntro {
					&__iconBox {
						width: 120px;
						height: 120px;
						top: calc(50% - 150px);
						border-radius: ${theme.radius[5]};
						box-shadow: 0 0 0 0 black;
					}

					&__desc {
						opacity: 1;
						margin-top: 0;

						span {
							top: 5px;
						}
					}
				}
			}

			&--fadeout {
				.initialIntro__container {
					opacity: 0;
				}
			}
		}
	`,
}));

export default StyledInitialIntro;
