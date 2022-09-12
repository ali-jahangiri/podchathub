import { css } from "styled-components";
import WrapWithStyled from "../../utils/WrapWithStyled";

const StyledBackToButtonOfRoom = WrapWithStyled("button", theme => ({
	base: css`
		position: absolute;
		left: 50%;
		top: 30px;
		transition: ${theme.animateDuration.normal};
		cursor: pointer;
		transform: translate(-50%, -50%);
		padding: ${theme.space[8]};
		border-radius: 25px;
		display: flex;
		align-items: center;
		color: ${theme.colors.pallet.natural[10]};
		user-select: none;
		font-family: ${theme.fonts.primary};
		background-color: white;
		border: none;

		svg {
			width: 0.8rem;
			height: 0.8rem;
			margin-right: 0.5rem;
			fill: ${theme.colors.pallet.natural[8]};
			transition: ${theme.animateDuration.fast};
		}

		&:focus {
			background-color: ${theme.colors.pallet.natural[2]};
		}

		&:hover {
			background-color: ${theme.colors.pallet.natural[2]};

			svg {
				transform: translateY(3px);
			}
		}

		${props =>
			props.show &&
			css`
				top: -50px;
			`};
	`,
}));

export default StyledBackToButtonOfRoom;
