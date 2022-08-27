import Container from "components/Container/Container";
import { useState } from "react";
import StyledMessageInput from "./messageInput.style";
import TextareaAutosize from "react-textarea-autosize";

const SendIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.56 122.88">
		<defs></defs>
		<path d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z" />
	</svg>
);

const EmojiIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm5.666,13.746a1,1,0,0,0-1.33-1.494A7.508,7.508,0,0,1,12,16a7.509,7.509,0,0,1-4.334-1.746,1,1,0,0,0-1.332,1.492A9.454,9.454,0,0,0,12,18,9.454,9.454,0,0,0,17.666,15.746ZM6,10c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Zm8,0c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Z" />
	</svg>
);

const ClipIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
		<path d="M22.95,9.6a1,1,0,0,0-1.414,0L10.644,20.539a5,5,0,1,1-7.072-7.071L14.121,2.876a3,3,0,0,1,4.243,4.242L7.815,17.71a1.022,1.022,0,0,1-1.414,0,1,1,0,0,1,0-1.414l9.392-9.435a1,1,0,0,0-1.414-1.414L4.987,14.882a3,3,0,0,0,0,4.243,3.073,3.073,0,0,0,4.243,0L19.778,8.532a5,5,0,0,0-7.071-7.07L2.158,12.054a7,7,0,0,0,9.9,9.9L22.95,11.018A1,1,0,0,0,22.95,9.6Z" />
	</svg>
);

const MessageInput = () => {
	const [inputValue, setInputValue] = useState("");

	const onInputValueChange = e => {
		setInputValue(e.target.value);
	};

	const mimickingTextareaSubmitHandler = e => {
		if (e.which === 13 && !e.shiftKey) {
			e.preventDefault();
			setInputValue("");
			sendMessageHandler();
		}
	};

	const onSendTriggerClickHandler = () => {};

	const sendMessageHandler = () => {};

	return (
		<Container>
			<StyledMessageInput>
				<div className="messageInput__innerContainer">
					<div className="messageInput__emoji">
						<EmojiIcon />
					</div>
					<TextareaAutosize
						cacheMeasurements
						placeholder="پیامی بنویسید..."
						className="messageInput__input"
						value={inputValue}
						onChange={onInputValueChange}
						onKeyDown={mimickingTextareaSubmitHandler}
					/>
					<div className="messageInput__attachFile">
						<ClipIcon />
					</div>
				</div>
				<button onClick={onSendTriggerClickHandler} className="messageInput__sendTrigger">
					<SendIcon />
				</button>
			</StyledMessageInput>
		</Container>
	);
};

export default MessageInput;
