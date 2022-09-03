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

	const changeStoreValueHandler = (key, value) => {
		setStore(prev => ({
			...prev,
			[key]: value,
		}));
	};

	return <StoreContext.Provider value={{ store, setStore: changeStoreValueHandler }}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
