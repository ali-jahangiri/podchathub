import { useLayoutEffect, useRef, useState } from "react";
import Container from "components/Container";
import Header from "components/Header";
import MessageList from "components/Message/List/MessageList";
import MessageInput from "components/MessageInput";
import LoadingMoreSpinner from "../../components/Message/LoadingMoreSpinner";

import StyledRoom from "./room.style";
import useStore from "../../hooks/useStore/useStore";
import selfClearTimeout from "../../utils/selfClearTimeout";
import useRoomObserver from "../../hooks/useRoomObserver/useRoomObserver";
import transformMessageItem, {
	convertDataProperly,
	extractOnlyNeededProperly,
	MessageSchema,
	omitTheAuthorMessageAdding,
} from "../../utils/transformMessageItem";
import date from "../../utils/date";
import compose from "../../utils/compose";
import getHalfOfUserViewport from "../../utils/getHalfOfUserViewport";
import SelectedMessageController from "../../components/SelectedMessageController";

const Room = () => {
	const [store] = useStore();

	// Room internal stats
	const [isInFetchingMoreMessage, setIsInFetchingMoreMessage] = useState(false);
	const [selectedMessagesId, setSelectedMessagesId] = useState([]);

	const [messageItems, setMessageItems] = useState(getInitialMessage);

	const [currentMessageOffset, setCurrentMessageOffset] = useState(
		() => store.initialMessageHistory.nextOffset
	);

	const messageListContainerRef = useRef();

	function getInitialMessage() {
		return transformMessageItem(store.initialMessageHistory.history.reverse(), {
			authorId: store.user.id,
		});
	}

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

	const scrollToBottomHandler = (behavior = "default") => {
		if (behavior === "smooth") {
			messageListContainerRef.current.scrollTo({
				left: 0,
				top: messageListContainerRef.current.scrollHeight,
				behavior,
			});
		} else {
			messageListContainerRef.current.scrollTop = messageListContainerRef.current.scrollHeight;
		}
	};

	function onNewMessage({ result }) {
		if (!omitTheAuthorMessageAdding(result.message.participant.id, store.user.id)) {
			const finalIncomingMessage = compose(
				convertDataProperly,
				extractOnlyNeededProperly
			)(result.message);
			setMessageItems(prev => [...prev, finalIncomingMessage]);
			selfClearTimeout(() => scrollToBottomHandler("smooth"), 10);
		}
	}

	function onReachToTopOfListContainer() {
		if (!isInFetchingMoreMessage) {
			// setIsInFetchingMoreMessage(true);
			// chatInstance.getHistory(
			// 	{ threadId: store.thread.id, count: 50, offset: currentMessageOffset },
			// 	response => {
			// 		console.log(response);
			// 		if (response.result.hasNext) {
			// 			setMessageItems(prev => [
			// 				...transformMessageItem(response.result.history.reverse(), {
			// 					authorId: user.id,
			// 				}),
			// 				...prev,
			// 			]);
			// 			setCurrentMessageOffset(response.nextOffset);
			// 			setIsInFetchingMoreMessage(false);
			// 		}
			// 	}
			// );
		}
	}

	function addMessageItemToSelectedItemsHandler(targetMessageId) {
		setSelectedMessagesId(prev => [...prev, targetMessageId]);
	}

	function removeMessageItemFromSelectedItemsHandler(targetMessageId) {
		setSelectedMessagesId(prev => prev.filter(messageId => messageId !== targetMessageId));
	}

	function makeSelectedMessageListEmpty() {
		setSelectedMessagesId([]);
	}

	useRoomObserver({
		listeners: {
			onNewMessage,
		},
		config: {},
	});

	useLayoutEffect(
		function initialScrollToEndOfMessageContainer() {
			if (messageListContainerRef.current) scrollToBottomHandler();
		},
		[messageListContainerRef]
	);

	console.log(selectedMessagesId);

	return (
		<StyledRoom>
			<Container>
				<Header />
				{isInFetchingMoreMessage && <LoadingMoreSpinner />}
				<MessageList
					containerTopDistanceMargin={getHalfOfUserViewport()}
					threadId={store.thread.id}
					selectedMessagesList={selectedMessagesId}
					items={messageItems}
					containerRef={messageListContainerRef}
					onReachToTop={onReachToTopOfListContainer}
					selectMessageHandler={addMessageItemToSelectedItemsHandler}
					unSelectMessageHandler={removeMessageItemFromSelectedItemsHandler}
				/>
				<div className="room__messageInputs">
					<SelectedMessageController
						onCloseHandler={makeSelectedMessageListEmpty}
						selectedMessagesList={selectedMessagesId}
						show={selectedMessagesId.length}
					/>
					<MessageInput onTextMessageSend={addTextMessage} />
				</div>
			</Container>
		</StyledRoom>
	);
};

export default Room;
