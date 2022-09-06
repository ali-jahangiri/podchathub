import { useEffect } from "react";
import usePodSdk from "../usePodSdk/usePodSdk";

const LISTENER_MESSAGE_NEW = "messageEvents";

function useRoomObserver({ onNewMessage }) {
	const chatInstance = usePodSdk();

	useEffect(
		function settleListenersHandler() {
			chatInstance.on(LISTENER_MESSAGE_NEW, onNewMessage);
		},
		[chatInstance, onNewMessage]
	);
}

export default useRoomObserver;
