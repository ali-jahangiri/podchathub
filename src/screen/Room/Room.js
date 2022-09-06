import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "components/Container";
import Header from "components/Header";
import MessageList from "components/Message/List/MessageList";
import MessageInput from "components/MessageInput";
import StyledRoom from "./room.style";
import useStore from "../../hooks/useStore/useStore";
import usePodSdk from "../../hooks/usePodSdk/usePodSdk";
import selfClearTimeout from "../../utils/selfClearTimeout";
import useRoomObserver from "../../hooks/useRoomObserver/useRoomObserver";

const Room = () => {
	const [store] = useStore();
	const chatInstance = usePodSdk();

	useRoomObserver({
		onNewMessage(result) {
			console.log(result);
		},
	});

	const [messageItems, setMessageItems] = useState([]);
	const messageListContainerRef = useRef();

	function addTextMessage(message) {
		const newTextMessage = {
			asNew: true,
			source: "owner",
			author: "علی",
			message,
			type: "text",
		};

		setMessageItems(prev => [...prev, newTextMessage]);
		selfClearTimeout(() => scrollToBottomHandler("smooth"), 10);
	}

	function addMediaMessage(medias) {}

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

	// remove this (TEST PURPOSE)
	useEffect(() => {
		setMessageItems(store?.initialMessageHistory?.history);
	}, [store]);

	return (
		<StyledRoom>
			<Container>
				<Header />
				<MessageList
					// IMPORTANT REMOVE OPTIONAL CHAIN BECAUSE WE CANNOT HANDLE THIS CASE
					threadId={store?.thread?.id}
					items={messageItems}
					containerRef={messageListContainerRef}
				/>
				<MessageInput onTextMessageSend={addTextMessage} />
			</Container>
		</StyledRoom>
	);
};

export default Room;
