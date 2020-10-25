import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box; 
    }
    body {
        margin: 0;
        padding: 0;
        display: relative;
        background-color: ${(props) => props.theme.colors.white};
        font-family: 'Noto Sans KR', sans-serif;
    }
    h1 {
        font-size: 24px;
        font-weight: 500;
    }
    h2 {
        font-size: 18px;
        font-weight: 500;
    }
    h3 {
        font-size: 16px;
        font-weight: 500;
    }
    h4 {
        font-size: 14px;
        font-weight: 500;
    }
    h5 {
        font-size: 12px;
        font-weight: 500;
    }
`;

export default GlobalStyle;
