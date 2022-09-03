import { useState } from "react";
import tokens from "../../theme/tokens";

const useThemePersis = () => {
	const [theme, setTheme] = useState(function detectFunctionFromLocalStorage() {
		return {
			name: "light",
			tokens: tokens,
		};
	});

	return [theme, setTheme];
};

export default useThemePersis;
