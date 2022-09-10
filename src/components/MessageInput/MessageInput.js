import { useRef, useState } from "react";
import StyledMessageInput from "./messageInput.style";

import TextareaAutosize from "react-textarea-autosize";

import Emoji from "./Emoji/Emoji";
import AttachFile from "./AttachFile/AttachFile";

const SendIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.56 122.88">
		<defs></defs>
		<path d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z" />
	</svg>
);

const MessageInput = ({ onTextMessageSend, onMediaMessageSend }) => {
	const [inputValue, setInputValue] = useState("");
	const textareaRef = useRef();

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

	const onSendTriggerClickHandler = () => {
		setInputValue("");
		sendMessageHandler();
	};

	const sendMessageHandler = () => {
		const trimmedInputValue = inputValue.trim();

		if (trimmedInputValue) {
			onTextMessageSend(trimmedInputValue);
			focusOnTextareaHandler();
		}
	};

	const focusOnTextareaHandler = () => textareaRef.current.focus();

	return (
		<StyledMessageInput>
			<div className="messageInput__innerContainer">
				<Emoji />
				<TextareaAutosize
					autoFocus
					ref={textareaRef}
					cacheMeasurements
					placeholder="پیامی بنویسید..."
					className="messageInput__input"
					value={inputValue}
					onChange={onInputValueChange}
					onKeyDown={mimickingTextareaSubmitHandler}
				/>
				<AttachFile />
			</div>
			<button
				disabled={!inputValue}
				onClick={onSendTriggerClickHandler}
				className="messageInput__sendTrigger"
			>
				<SendIcon />
			</button>
		</StyledMessageInput>
	);
};

export default MessageInput;
