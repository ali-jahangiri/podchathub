// import Chat from "podchat";

const usePodSdk = () => {
	const chatAgent = {
		appId: new Date().getTime(),
		grantDeviceIdFromSSO: false,
		enableCache: true, // Enable Client side caching
		mapApiKey: "API_KEY_OF_NESHAN_MAP", //  {**REQUIRED**} API Key of Neshan Map
		socketAddress: "ws://172.16.106.26:8003/ws", // {**REQUIRED**} Socket Address
		ssoHost: "http://172.16.110.76", // {**REQUIRED**} Socket Address
		platformHost: "http://172.16.106.26:8080/hamsam", // {**REQUIRED**} Platform Core Address
		fileServer: "http://172.16.106.26:8080/hamsam", // {**REQUIRED**} File Server Address
		serverName: "chat-server", // {**REQUIRED**} Server to to register on
		token: "SSO_TOKEN", // {**REQUIRED**} SSO Token
		wsConnectionWaitTime: 500, // Time out to wait for socket to get ready after open
		connectionRetryInterval: 5000, // Time interval to retry registering device or registering server
		connectionCheckTimeout: 10000, // Socket connection live time on server
		messageTtl: 24 * 60 * 60, // Message time to live (1 day in seonds)
		reconnectOnClose: true, // auto connect to socket after socket close
		asyncLogging: {
			onFunction: true, // log main actions on console
			onMessageReceive: true, // log received messages on console
			onMessageSend: true, // log sent messaged on console
			actualTiming: true, // log actual functions running time
		},
	};

	// const chat = new Chat();
	const chat = {};

	console.log(chat);
};

export default usePodSdk;
