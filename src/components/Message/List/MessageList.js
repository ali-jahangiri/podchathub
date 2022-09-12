import checkForRenderBasicDetails from "utils/checkForRenderBasicDetails";
import MessageItem from "../Item/MessageItem";
import EmptyState from "../EmptyState";
import StyledMessageList from "./messageList.style";
import usePodSdk from "../../../hooks/usePodSdk";
import IntersectObserver from "../../../providers/IntersectObserverElement";

const MessageList = ({
	items = [],
	containerRef,
	threadId,
	onReachToTop,
	onReachToBottom,
	selectMessageHandler,
	unSelectMessageHandler,
	selectedMessagesList,
}) => {
	const chatInstance = usePodSdk();

	return (
		<StyledMessageList ref={containerRef}>
			<IntersectObserver onIntersecting={onReachToBottom} />
			{items.length ? (
				items.map((message, i) => (
					<MessageItem
						status={{
							isSelected: selectedMessagesList.find(
								selectItemId => selectItemId === message.id
							),
							isDeleted: false,
							isEdited: message.edited,
						}}
						chatInstance={chatInstance}
						threadId={threadId}
						haveToRenderBasicDetails={checkForRenderBasicDetails(message, items[i - 1])}
						{...message}
						selectHandler={selectMessageHandler}
						unSelectHandler={unSelectMessageHandler}
						key={message.id}
					/>
				))
			) : (
				<EmptyState />
			)}
			<IntersectObserver
				onIntersecting={isIntersection => isIntersection && onReachToTop(isIntersection)}
			/>
		</StyledMessageList>
	);
};

export default MessageList;
