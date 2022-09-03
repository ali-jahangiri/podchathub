import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledProgressBar = WrapWithStyled("div", theme => ({
	base: css`
		position: absolute;
		width: 300px;
		bottom: 200px;

		.progressBar {
			&__container {
				position: relative;
			}

			&__title {
				color: ${theme.colors.pallet.natural[6]};
				transition: ${theme.animateDuration.slow} 0.4s;
				opacity: 0;
				position: absolute;
				left: 25%;
				top: 0;
			}

			&__bar {
				width: 100%;
				height: 8px;
				background-color: ${theme.colors.pallet.natural[2]};
				border-radius: ${theme.radius[1]};
				overflow: hidden;
				direction: ltr;
				position: relative;
				z-index: 1;
				opacity: 0;
				transition: ${theme.animateDuration.extraSlow};
			}

			&__progress {
				height: 100%;
				background-color: ${theme.colors.pallet.natural[4]};
				transition: ${theme.animateDuration.fast};
			}
		}

		&.progressBar {
			&--show {
				.progressBar {
					&__title {
						opacity: 1;
						top: -35px;
					}

					&__bar {
						opacity: 1;
					}
				}
			}
		}
	`,
}));

export default StyledProgressBar;
