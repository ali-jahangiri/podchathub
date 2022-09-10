import StyledRadio from "./radio.style";

const Radio = ({ show, onClick }) => (
	<StyledRadio onClick={() => onClick(!show)} className={`radio ${show ? "radio--show" : ""}`}>
		<div />
	</StyledRadio>
);

export default Radio;
