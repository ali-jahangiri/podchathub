import { ThemeProvider } from "styled-components";
import StyleResetter from "providers/StyleResetter";

function App() {
	return (
		<div className="App">
			<StyleResetter />
			<ThemeProvider theme={{ name: "light", tokens: { color: "blue" } }}></ThemeProvider>
		</div>
	);
}

export default App;
