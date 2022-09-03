import { useLayoutEffect, useRef } from "react";
import Container from "components/Container";
import Header from "components/Header";
import MessageList from "components/Message/List/MessageList";
import MessageInput from "components/MessageInput";
import selfClearTimeout from "utils/selfClearTimeout";
import StyledRoom from "./room.style";

const Room = () => {
	const messageListContainerRef = useRef();

	function addStaticItem(content) {
		// selfClearTimeout(() => scrollToBottomHandler("smooth"), 10);
	}

	useLayoutEffect(
		function initialScrollToEndOfMessageContainer() {
			if (messageListContainerRef.current) {
				scrollToBottomHandler();
			}
		},
		[messageListContainerRef]
	);

	const scrollToBottomHandler = (behavior = "default") => {
		if (behavior === "smooth") {
			messageListContainerRef.current.scrollTo({ left: 0, top: messageListContainerRef.current.scrollHeight, behavior });
		} else {
			messageListContainerRef.current.scrollTop = messageListContainerRef.current.scrollHeight;
		}
	};

	return (
		<StyledRoom>
			<Container>
				<Header />
				<MessageList containerRef={messageListContainerRef} />
				<MessageInput onSendMessage={addStaticItem} />
			</Container>
		</StyledRoom>
	);
};

export default Room;
