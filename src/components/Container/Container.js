import { forwardRef } from "react";
import StyledContainer from "./container.style";

const Container = forwardRef(({ children, ...restNativeProps }, ref) => (
	<StyledContainer {...restNativeProps} ref={ref}>
		{children}
	</StyledContainer>
));

export default Container;
