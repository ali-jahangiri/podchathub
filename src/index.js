import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const token = "e0f236ab27b348baaf0a16dda40ddcbb.XzIwMjI5";
const targetThreadId = "THREAD_ID_8";
const targetThreadDescription = "خدمت درمانی ۱";
const friendsPhoneNumber = ["09917240664", "09126930749"];

const SimulatedParentWrapper = () => {
	return (
		<App
			threadId={targetThreadId}
			doctorPhoneNumbers={friendsPhoneNumber}
			threadDescription={targetThreadDescription}
			token={token}
		/>
	);
};

root.render(<SimulatedParentWrapper />);
