import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledHeader = WrapWithStyled("div", theme => ({
	base: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100px;

		.header {
			&__roomTitle {
				font-size: ${theme.fontSizes.xl};
				font-weight: ${theme.fontWeights.semibold};
				cursor: pointer;
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
