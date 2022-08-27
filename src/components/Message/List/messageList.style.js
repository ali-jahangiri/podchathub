import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledMessageList = WrapWithStyled("div", theme => ({
	base: css`
		height: 100%;
		width: 100%;
		overflow-y: auto;

		&::-webkit-scrollbar {
			display: none;
		}

		margin-bottom: ${theme.space[8]};
	`,
}));

export default StyledMessageList;