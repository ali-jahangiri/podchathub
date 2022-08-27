import Avatar from "components/Avatar";
import StyledHeader from "./header.style";

const Header = () => {
	return (
		<StyledHeader>
			<p className="header__roomTitle">دپارتمان پزشکی</p>
			<div className="header__avatarContainer">
				<Avatar imageSource={"https://faces-img.xcdn.link/image-lorem-face-6070.jpg"} />
				<Avatar imageSource={"https://faces-img.xcdn.link/image-lorem-face-3547.jpg"} />
				<Avatar imageSource={"https://faces-img.xcdn.link/image-lorem-face-53.jpg"} />
				<Avatar imageSource={"https://faces-img.xcdn.link/image-lorem-face-6463.jpg"} />
			</div>
		</StyledHeader>
	);
};

export default Header;
