import { useLayoutEffect, useRef, useState } from "react";
import Container from "components/Container";
import Header from "components/Header";
import MessageList from "components/Message/List/MessageList";
import MessageInput from "components/MessageInput";
import StyledRoom from "./room.style";
import useStore from "../../hooks/useStore/useStore";
import selfClearTimeout from "../../utils/selfClearTimeout";
import useRoomObserver from "../../hooks/useRoomObserver/useRoomObserver";
import transformMessageItem, {
	convertDataProperly,
	extractOnlyNeededProperly,
	MessageSchema,
} from "../../utils/transformMessageItem";
import date from "../../utils/date";
import compose from "../../utils/compose";

const Room = () => {
	const [store] = useStore();

	const { user, initialMessageHistory } = store;

	const [messageItems, setMessageItems] = useState(function getInitialMessage() {
		return transformMessageItem(initialMessageHistory.history.reverse(), { authorId: user.id });
	});

	const messageListContainerRef = useRef();

	function omitTheAuthorMessageAdding(participantId, authorId) {
		if (participantId === authorId) return true;
		else return false;
	}

	useRoomObserver({
		onNewMessage({ result }) {
			if (!omitTheAuthorMessageAdding(result.message.participant.id, user.id)) {
				const finalIncomingMessage = compose(convertDataProperly, extractOnlyNeededProperly)(result.message);
				setMessageItems(prev => [...prev, finalIncomingMessage]);
				selfClearTimeout(() => scrollToBottomHandler("smooth"), 10);
			}
		},
	});

	function addTextMessage(message) {
		const newMessage = new MessageSchema({
			asNew: true,
			type: "text",
			time: date(Date.now()).format("hh:mm"),
			threadId: store.thread.id,
			message,
			source: "author",
			owner: {
				firstName: "شما",
			},
		});

		setMessageItems(prev => [...prev, newMessage]);
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

	return (
		<StyledRoom>
			<Container>
				<Header />
				<MessageList threadId={store.thread.id} items={messageItems} containerRef={messageListContainerRef} />
				<MessageInput onTextMessageSend={addTextMessage} />
			</Container>
		</StyledRoom>
	);
};

export default Room;
