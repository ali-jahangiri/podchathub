import { PodSdkContext } from "providers/PodSdk/PodSdkProvider";
import { useContext } from "react";

const usePodSdk = () => {
	const sdkInstance = useContext(PodSdkContext);
	return sdkInstance;
};

export default usePodSdk;
