import Avatar from "components/Avatar/Avatar";
import StyledMessageItem from "./messageItem.style";

const MessageItem = ({ time, source, content, author, haveToRenderBasicDetails, asNew }) => {
	return (
		<StyledMessageItem
			className={`messageItem--${source} ${asNew ? "messageItem--new" : ""} ${
				!haveToRenderBasicDetails ? "messageItem--detailsOmit" : ""
			}`}
		>
			<div className="messageItem__box">
				{haveToRenderBasicDetails && (
					<Avatar className="messageItem__avatar" imageSource="https://faces-img.xcdn.link/image-lorem-face-6772.jpg" />
				)}
				<div>
					{haveToRenderBasicDetails && (
						<div className="messageItem__metaDetails">
							<p>{author}</p>
							<span>{time}</span>
						</div>
					)}
					<div className="messageItem__content">
						<p>{content}</p>
					</div>
				</div>
			</div>
		</StyledMessageItem>
	);
};

export default MessageItem;
