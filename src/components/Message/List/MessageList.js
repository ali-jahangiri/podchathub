import { useCallback } from "react";

import checkForRenderBasicDetails from "utils/checkForRenderBasicDetails";
import MessageItem from "../Item/MessageItem";
import EmptyState from "../EmptyState";
import StyledMessageList from "./messageList.style";
import debounce from "../../../utils/debounce";
import usePodSdk from "../../../hooks/usePodSdk";

const MessageList = ({
	items = [],
	containerRef,
	threadId,
	onReachToTop,
	containerTopDistanceMargin,
	selectMessageHandler,
	unSelectMessageHandler,
	selectedMessagesList,
}) => {
	const chatInstance = usePodSdk();

	const debouncedScrollHandler = useCallback(
		debounce(e => {
			const containerTopPx = e.target.scrollTop;
			if (containerTopPx <= containerTopDistanceMargin) onReachToTop();
		}, 50),
		[]
	);

	return (
		<StyledMessageList onScroll={debouncedScrollHandler} ref={containerRef}>
			{items.length ? (
				items.map((message, i) => (
					<MessageItem
						isSelected={selectedMessagesList.find(
							selectItemId => selectItemId === message.id
						)}
						chatInstance={chatInstance}
						threadId={threadId}
						haveToRenderBasicDetails={checkForRenderBasicDetails(message, items[i - 1])}
						{...message}
						key={i}
						selectHandler={selectMessageHandler}
						unSelectHandler={unSelectMessageHandler}
					/>
				))
			) : (
				<EmptyState />
			)}
		</StyledMessageList>
	);
};

export default MessageList;
