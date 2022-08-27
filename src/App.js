import { ThemeProvider } from "styled-components";
import useThemePersis from "hooks/useThemePersist/useThemePersist";

import Room from "components/Room/Room";
import StyleResetter from "providers/StyleResetter";
import BaseStyle from "providers/BaseStyle/BaseStyle";

function App() {
	const [theme, setTheme] = useThemePersis();
	return (
		<div className="App">
			<StyleResetter />
			<BaseStyle />
			<ThemeProvider theme={theme}>
				<Room />
			</ThemeProvider>
		</div>
	);
}

export default App;
