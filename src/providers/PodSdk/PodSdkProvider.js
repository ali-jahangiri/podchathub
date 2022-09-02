import useStore from "hooks/useStore/useStore";
import ChatConstructors from "podchat-browser";
import { createContext, useMemo } from "react";

export const PodSdkContext = createContext({});

const PodSdkProvider = ({ children }) => {
	const [store] = useStore();

	const memoizedSdkInstance = useMemo(() => {
		const chatConfig = {
			socketAddress: "wss://chat-sandbox.pod.ir/ws",
			ssoHost: "https://accounts.pod.ir",
			platformHost: "https://sandbox.pod.ir:8043/srv/basic-platform",
			fileServer: "https://core.pod.ir",
			podSpaceFileServer: "http://sandbox.podspace.ir:8080",
			serverName: "chat-server",
			callNoAnswerTimeout: 0,
			token: store.ownerProps.token,
			asyncLogging: {
				// onFunction: true, // log main actions on console
				// onMessageReceive: true, // log received messages on console
				// onMessageSend: true, // log sent messaged on console
				// actualTiming: true, // log actual functinpom ons running time
			},

			callOptions: {
				callNoAnswerTimeout: 20000,
				useInternalTurnAddress: false,
				callTurnIp: "46.32.6.188",
				callDivId: "call-div",
				callVideo: {
					minWidth: 320,
					minHeight: 180,
				},
				callAudioTagClassName: "podcall-audio",
				callVideoTagClassName: "podcall-video",
			},
		};

		return new ChatConstructors(chatConfig);
	}, []);

	return <PodSdkContext.Provider value={memoizedSdkInstance}>{children}</PodSdkContext.Provider>;
};

export default PodSdkProvider;
