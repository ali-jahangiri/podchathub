import { StoreContext } from "providers/Store/Store";
import { useContext } from "react";

const useStore = () => {
	const { store, setStore } = useContext(StoreContext);
	return [store, setStore];
};

export default useStore;
