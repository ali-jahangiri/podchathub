function checkForRenderBasicDetails(currentMessage, prevMessage) {
	if (prevMessage?.source === currentMessage.source) return false;
	else return true;
}

export default checkForRenderBasicDetails;

// next message .owner === current.owner
