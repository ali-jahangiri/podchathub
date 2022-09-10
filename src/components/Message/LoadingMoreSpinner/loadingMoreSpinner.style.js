import { css } from "styled-components";
import WrapWithStyled from "../../../utils/WrapWithStyled";

const StyledLoadingMoreSpinner = WrapWithStyled("div", theme => ({
	base: css`
		background-color: red;
	`,
}));

export default StyledLoadingMoreSpinner;
