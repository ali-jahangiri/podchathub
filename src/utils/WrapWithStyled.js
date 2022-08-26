import styled from "styled-components";

function WrapWithStyled(tagName, styleCallback) {
	const StyledElement = styled(tagName)(({ theme }) => {
		const componentStyle = styleCallback(theme.tokens);
		const styleList = [componentStyle.base];

		const themeDependedStyle = componentStyle[theme.name];
		styleList.push(themeDependedStyle);
		return styleList;
	});

	return StyledElement;
}

export default WrapWithStyled;
