import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledHeader = WrapWithStyled("div", theme => ({
	base: css`
		.header {
			&__roomTitle {
				font-size: ${theme.fontSizes.xl};
				font-weight: ${theme.fontWeights.semibold};
				cursor: pointer;
			}

			&__container {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 100px;
			}

			&__avatarContainer {
				display: flex;

				& > div {
					margin-right: -${theme.space[8]};
				}
			}
		}
	`,
}));

export default StyledHeader;
