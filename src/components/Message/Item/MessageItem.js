import { useEffect, useState } from "react";
import Avatar from "components/Avatar/Avatar";
import StyledMessageItem from "./messageItem.style";
import Radio from "../../Radio/Radio";
import Container from "../../Container";

const MessageItem = ({
	id,
	time,
	source,
	type,
	message,
	owner,
	haveToRenderBasicDetails,
	asNew,
	threadId,
	chatInstance,
	selectHandler,
	unSelectHandler,
	status,
}) => {
	const [messageStatus, setMessageStatus] = useState(() => [asNew ? "new" : undefined]);

	useEffect(
		function sendMessageInParallel() {
			if (asNew) {
				setMessageStatus(["new"]);
				const messageParam = {
					threadId,
					textMessage: message,
					messageType: "TEXT",
				};

				chatInstance.sendTextMessage(messageParam, {
					onSent: function (result) {
						// setMessageStatus(prev => [...prev, "send"]);
					},
				});
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[asNew]
	);

	function toggleSelectStatusHandler() {
		if (source === "author" && messageStatus !== "select") {
			if (!status.isSelected) selectHandler(id);
			else unSelectHandler(id);
		}
	}

	return (
		<StyledMessageItem
			className={`messageItem--${source} ${messageStatus
				.filter(validStatus => validStatus)
				.map(status => `messageItem--${status}`)
				.join(" ")} ${status.isSelected ? "messageItem--selected" : ""} ${
				!haveToRenderBasicDetails ? "messageItem--detailsOmit" : ""
			}`}
		>
			<Container className="messageItem__box">
				{haveToRenderBasicDetails && (
					<Avatar
						className="messageItem__avatar"
						imageSource="https://faces-img.xcdn.link/image-lorem-face-6772.jpg"
					/>
				)}
				<div>
					{haveToRenderBasicDetails && source !== "author" && (
						<div className="messageItem__name">{owner?.firstName}</div>
					)}
					<div className="messageItem__contentRow">
						<div className="messageItem__content">
							<p>{message}</p>
						</div>
						<div onClick={toggleSelectStatusHandler} className="messageItem__time">
							{time}
						</div>
					</div>
				</div>
				{source === "author" && (
					<div className="messageItem__selectBox">
						<Radio onClick={toggleSelectStatusHandler} show={status.isSelected} />
					</div>
				)}
			</Container>
		</StyledMessageItem>
	);
};

export default MessageItem;
