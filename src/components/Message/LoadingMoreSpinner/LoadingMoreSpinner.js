import StyledLoadingMoreSpinner from "./loadingMoreSpinner.style";

const LoadingMoreSpinner = ({ show }) => (
	<StyledLoadingMoreSpinner show={show}>
		<div style={{ animationDelay: "100ms" }} />
		<div style={{ animationDelay: "150ms" }} />
		<div style={{ animationDelay: "200ms" }} />
	</StyledLoadingMoreSpinner>
);

export default LoadingMoreSpinner;
