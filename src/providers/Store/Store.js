import { createContext, useState } from "react";

const ownerProps = {
	token: "",
	threadId: "",
	threadDescription: "",
	doctorPhoneNumbers: [],
};

export const StoreContext = createContext({
	ownerProps,
});

const StoreProvider = ({ children, ...restOwnerProps }) => {
	const [store, setStore] = useState({ ownerProps: restOwnerProps });

	return <StoreContext.Provider value={{ store, setStore }}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
