import checkForRenderBasicDetails from "utils/checkForRenderBasicDetails";
import MessageItem from "../Item/MessageItem";
import StyledMessageList from "./messageList.style";

const MessageList = ({ items = [], containerRef }) => {
	return (
		<StyledMessageList ref={containerRef}>
			{items.map((message, i) => (
				<MessageItem haveToRenderBasicDetails={checkForRenderBasicDetails(message, items[i - 1])} {...message} key={i} />
			))}
		</StyledMessageList>
	);
};

export default MessageList;
