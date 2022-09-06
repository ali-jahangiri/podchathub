import date from "./date";

function extractOnlyNeededProperly({ id, threadId, ownerId, message, messageType, edited, participant, timeMiliSeconds }) {
	return {
		id,
		threadId,
		message,
		type: messageType,
		edited,
		time: timeMiliSeconds,
		source: null,
		owner: {
			id: ownerId,
			username: participant.username,
			firstName: participant.firstName,
			lastName: participant.lastName,
			fullName: participant.name,
		},
	};
}

function convertTimestampToReadableClockTime(timestamp) {
	return date(timestamp).format("hh:mm");
}

function detectSourceOfMessage(ownerId, patientId) {
	return ownerId === patientId ? "author" : "provider";
}

function renderFriendlyNameForAuthor(ownerId, patientId, currentFirstName) {
	if (ownerId === patientId) return "شما";
	else return currentFirstName;
}

function convertDataProperly({ time, owner, ...restProperty }, authorId) {
	return {
		...restProperty,
		time: convertTimestampToReadableClockTime(time),
		source: detectSourceOfMessage(owner.id, authorId),
		owner: {
			...owner,
			firstName: renderFriendlyNameForAuthor(owner.id, authorId, owner.firstName),
		},
	};
}

function transformMessageItem(messageList = [], { authorId }) {
	return messageList.map(extractOnlyNeededProperly).map(message => convertDataProperly(message, authorId));
}

export default transformMessageItem;