import { useEffect, useState } from "react";
import Avatar from "components/Avatar/Avatar";
import StyledMessageItem from "./messageItem.style";
import Radio from "../../Radio/Radio";

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
	edited,
	isSelected,
	chatInstance,
	selectHandler,
	unSelectHandler,
}) => {
	const [messageStatus, setMessageStatus] = useState(asNew ? "new" : null);

	useEffect(
		function sendMessageInParallel() {
			if (asNew) {
				const messageParam = {
					threadId,
					textMessage: message,
					messageType: "TEXT",
				};

				chatInstance.sendTextMessage(messageParam, {
					onSent: function (result) {
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

	function toggleSelectStatusHandler() {
		if (source === "author") {
			if (!isSelected) selectHandler(id);
			else unSelectHandler(id);
		}
	}

	useEffect(
		function changeMessageStatusBaseOnSelectChange() {
			setMessageStatus(isSelected ? "selected" : null);
		},
		[isSelected]
	);

	return (
		<StyledMessageItem
			className={`messageItem--${source} ${
				messageStatus ? `messageItem--${messageStatus}` : ""
			} ${!haveToRenderBasicDetails ? "messageItem--detailsOmit" : ""}`}
		>
			<div className="messageItem__box">
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
			</div>
			{source === "author" && (
				<div className="messageItem__selectBox">
					<Radio onClick={toggleSelectStatusHandler} show={isSelected} />
				</div>
			)}
		</StyledMessageItem>
	);
};

export default MessageItem;
