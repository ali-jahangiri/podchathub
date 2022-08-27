import { createGlobalStyle } from "styled-components";

const BaseStyleCss = createGlobalStyle`
    body {
        font-family: Vazirmatn, sans-serif;
        direction: rtl;
    }
`;

const BaseStyle = () => <BaseStyleCss />;

export default BaseStyle;
