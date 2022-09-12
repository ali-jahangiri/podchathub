import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledMessageList = WrapWithStyled("div", theme => ({
	base: css`
		height: 100%;
		overflow: auto;
		display: flex;
		flex-direction: column-reverse;

		&::-webkit-scrollbar {
			display: none;
		}
	`,
}));

export default StyledMessageList;
