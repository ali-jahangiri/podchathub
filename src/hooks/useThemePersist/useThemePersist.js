import { useState } from "react";

const useThemePersis = () => {
	const [theme, setTheme] = useState(function detectFunctionFromLocalStorage() {});

	return [theme, setTheme];
};

export default useThemePersis;
