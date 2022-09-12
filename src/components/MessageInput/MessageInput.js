import { useRef, useState } from "react";
import StyledMessageInput from "./messageInput.style";

import ContentEditable from "react-contenteditable";

import Emoji from "./Emoji/Emoji";
import AttachFile from "./AttachFile/AttachFile";
import emojiList from "../../static/emojiList";

const MessageInput = ({ onTextMessageSend, onMediaMessageSend, onEmojiMessageSend }) => {
	//  because of library glitch, we need to store input value inside ref hook instead of useState hook
	const inputValue = useRef("");
	const inputRef = useRef();
	const [_, forceToReRender] = useState();
	const [currentInputEmojiList, setCurrentInputEmojiList] = useState([]);

	const onInputValueChange = e => {
		inputValue.current = e.target.value;
		// we need to detect which one of rendered emoji still is inside the input and if one of the selected emoji was deleted, we automatically remove it from state to make our state sync with input valueF
		const currentlyEmojiNameRenderedInInput = Array.from(e.nativeEvent.target.children)
			.filter(child => child.tagName === "IMG")
			.map(imgNode => imgNode.dataset.emojiName);
		setCurrentInputEmojiList(currentlyEmojiNameRenderedInInput);
	};

	const mimickingTextareaSubmitHandler = e => {
		if (e.which === 13 && !e.shiftKey) {
			e.preventDefault();
			sendMessageHandler();
		}
	};

	const sendMessageHandler = () => {
		const trimmedInputValue = inputValue.current.trim();
		if (trimmedInputValue) {
			if (currentInputEmojiList.length) {
				onEmojiMessageSend(currentInputEmojiList);
			} else {
				onTextMessageSend(trimmedInputValue);
			}
			focusOnTextareaHandler();
			inputValue.current = "";
		}
	};

	const focusOnTextareaHandler = () => inputRef.current.focus();

	function onSelectEmojiHandler(emojiName) {
		const newEmojiListToRenderInsideInput = [...currentInputEmojiList, emojiName];
		inputValue.current = newEmojiListToRenderInsideInput
			.map(
				currentEmojiName =>
					`<img data-emoji-name=${currentEmojiName} src=${
						emojiList.find(emoji => emoji.code === currentEmojiName).src
					} alt="emoji" />`
			)
			.join(" ");
		setCurrentInputEmojiList(newEmojiListToRenderInsideInput);
		forceToReRender(Date.now());
	}

	return (
		<StyledMessageInput>
			<div className="messageInput__innerContainer">
				<Emoji onSelect={onSelectEmojiHandler} />
				<ContentEditable
					autoFocus
					innerRef={inputRef}
					placeholder="پیامی بنویسید..."
					className="messageInput__input"
					html={inputValue.current}
					onChange={onInputValueChange}
					onKeyDown={mimickingTextareaSubmitHandler}
				/>
				<AttachFile />
			</div>
			<button
				disabled={!inputValue}
				onClick={sendMessageHandler}
				className="messageInput__sendTrigger"
			>
				<SendIcon />
			</button>
		</StyledMessageInput>
	);
};

const SendIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.56 122.88">
		<defs></defs>
		<path d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z" />
	</svg>
);

export default MessageInput;
