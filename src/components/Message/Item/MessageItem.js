import Avatar from "components/Avatar/Avatar";
import { useEffect, useState } from "react";
import usePodSdk from "../../../hooks/usePodSdk/usePodSdk";
import promisify from "../../../utils/promisify";
import StyledMessageItem from "./messageItem.style";

const MessageItem = ({ time, source, type, message, author, haveToRenderBasicDetails, asNew, threadId }) => {
	const [messageStatus, setMessageStatus] = useState(asNew ? "new" : null);

	const chatInstance = usePodSdk();

	useEffect(
		function sendMessageInParallel() {
			if (asNew) {
				const messageParam = {
					threadId,
					textMessage: message,
					messageType: "TEXT",
				};
				console.log("ssss");

				chatInstance.sendTextMessage(messageParam, {
					onSent: function (result) {
						console.log();
						setMessageStatus("send");
					},
					onDeliver: function (result) {},
					onSeen: function (result) {},
				});
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[asNew]
	);

	return (
		<StyledMessageItem
			className={`messageItem--${source} ${messageStatus ? `messageItem--${messageStatus}` : ""} ${
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
						<p>{message}</p>
					</div>
				</div>
			</div>
		</StyledMessageItem>
	);
};

export default MessageItem;
