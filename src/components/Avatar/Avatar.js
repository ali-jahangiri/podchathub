import StyledAvatar from "./avatar.style";

const Avatar = ({ imageSource, color, name = "", ...restNativeProps }) => (
	<StyledAvatar boxBackgroundColor={color} {...restNativeProps}>
		{imageSource ? <img src={imageSource} alt="avatar" /> : <p>{name.toUpperCase()}</p>}
	</StyledAvatar>
);

export default Avatar;
