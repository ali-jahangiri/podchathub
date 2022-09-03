import checkForRenderBasicDetails from "utils/checkForRenderBasicDetails";
import MessageItem from "../Item/MessageItem";
import EmptyState from "../EmptyState";
import StyledMessageList from "./messageList.style";

const MessageList = ({ items = [], containerRef }) => {
	return (
		<StyledMessageList ref={containerRef}>
			{items.length ? (
				items.map((message, i) => (
					<MessageItem haveToRenderBasicDetails={checkForRenderBasicDetails(message, items[i - 1])} {...message} key={i} />
				))
			) : (
				<EmptyState />
			)}
		</StyledMessageList>
	);
};

export default MessageList;
