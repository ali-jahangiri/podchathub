import { ThemeProvider } from "styled-components";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

import useThemePersis from "hooks/useThemePersist";
import Room from "screen/Room/Room";
import StyleResetter from "providers/StyleResetter";
import BaseStyle from "providers/BaseStyle";
import PodSdkProvider from "providers/PodSdk/PodSdkProvider";
import StoreProvider from "providers/Store";
import Setup from "screen/Setup";

// setup dayjs for entire app runtime
dayjs.extend(jalaliday);

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
						{/* Screen component hierarchy */}
						<Setup>
							<Room />
						</Setup>
					</PodSdkProvider>
				</StoreProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
