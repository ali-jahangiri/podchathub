import { useEffect } from "react";
import usePodSdk from "../usePodSdk/usePodSdk";

function useRoomObserver({
	listeners: { onNewMessage, onReachToTopOfListContainer },
	config: { containerRef },
}) {
	const chatInstance = usePodSdk();

	useEffect(
		function settleListenersHandler() {
			chatInstance.on("messageEvents", onNewMessage);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);
}

export default useRoomObserver;
