import { css } from "styled-components";
import Color from "color";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledAlert = WrapWithStyled("div", theme => ({
	base: css`
		background-color: ${Color(theme.colors.pallet.red[5]).fade(0.85).toString()};
		border-radius: ${theme.radius[2]};
		border: 2px solid ${Color(theme.colors.pallet.red[5]).fade(0.8).toString()};
		padding: ${theme.space[10]};
		color: ${theme.colors.pallet.red[6]};
	`,
}));

export default StyledAlert;
