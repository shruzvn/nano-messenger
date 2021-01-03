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

    .fadeToUp-enter {
        opacity: 0;
        transform: translateY(-100%);
    }
    .fadeToUp-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }
    .fadeToUp-exit {
        opacity: 1;
        transform: translateY(0);
    }
    .fadeToUp-exit-active {
        opacity: 0;
        transform: translateY(100%);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }

    .xSlide-enter {
        transform: translateX(100%);
    }
    .xSlide-enter-active {
        transform: translateX(0);
        transition: transform 200ms !important; 
    }
    .xSlide-exit {
        transform: translateX(0);
    }
    .xSlide-exit-active {
        transform: translateX(100%);
        transition: transform 200ms !important;
    }
`;

export default GlobalStyle;