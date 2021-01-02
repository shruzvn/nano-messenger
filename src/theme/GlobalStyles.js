//All CSS global styles implementation will get done here

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        user-select: none;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    }
    html, body{
        font-size: 14px;
    }
`;

export default GlobalStyle;