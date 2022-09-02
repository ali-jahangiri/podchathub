import { ThemeProvider } from "styled-components";
import useThemePersis from "hooks/useThemePersist/useThemePersist";

import Room from "components/Room/Room";
import StyleResetter from "providers/StyleResetter";
import BaseStyle from "providers/BaseStyle/BaseStyle";
import PodSdkProvider from "providers/PodSdk/PodSdkProvider";
import InitialGate from "providers/InitialGate/InitialGateProvider";
import StoreProvider from "providers/Store/Store";

function App({ token, threadId, doctorPhoneNumbers, threadDescription }) {
	const [theme] = useThemePersis();

	return (
		<div className="App">
			<StyleResetter />
			<BaseStyle />
			<ThemeProvider theme={theme}>
				<StoreProvider
					token={token}
					doctorPhoneNumbers={doctorPhoneNumbers}
					threadDescription={threadDescription}
					threadId={threadId}
				>
					<PodSdkProvider>
						<InitialGate>
							<Room />
						</InitialGate>
					</PodSdkProvider>
				</StoreProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
