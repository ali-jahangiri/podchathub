import StyledButton from "./button.style";

const Button = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
