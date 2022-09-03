import { css } from "styled-components";
import Color from "color";
import WrapWithStyled from "../../utils/WrapWithStyled";

const StyledButton = WrapWithStyled("button", theme => ({
	base: css`
		border: none;
		border: none;
		border-radius: ${theme.radius[2]};
		font-family: ${theme.fonts.primary};
		font-size: ${theme.fontSizes.base};
		width: 100%;
		padding: ${theme.space[9]};
		cursor: pointer;
		background: ${theme.colors.brand.primary};
		color: white;
		transition: ${theme.animateDuration.fast};

		&:hover {
			background: ${Color(theme.colors.brand.primary).fade(0.1).toString()};
		}
	`,
}));
export default StyledButton;
