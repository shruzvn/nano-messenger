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

    //animations
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        opacity: 1;
        transition: opacity 200ms;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
        transition: opacity 200ms;
    }
`;

export default GlobalStyle;