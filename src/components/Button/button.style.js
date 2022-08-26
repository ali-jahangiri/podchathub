import { css } from "styled-components";
import WrapWithStyled from "../../utils/WrapWithStyled";

const StyledButton = WrapWithStyled("button", theme => ({
	base: css`
		border: none;
		background-color: ${theme.color};
	`,
	light: css`
		background: green;
	`,
	dark: css``,
}));
export default StyledButton;
