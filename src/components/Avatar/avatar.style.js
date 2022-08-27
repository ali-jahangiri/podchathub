import { css } from "styled-components";
import WrapWithStyled from "utils/WrapWithStyled";

const StyledAvatar = WrapWithStyled("div", theme => ({
	base: css`
		border-radius: 25px;
		width: 50px;
		height: 50px;
		background-color: ${props => props.boxBackgroundColor};
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid white;

		img {
			width: 100%;
			border-radius: 25px;
		}
	`,
}));

export default StyledAvatar;
