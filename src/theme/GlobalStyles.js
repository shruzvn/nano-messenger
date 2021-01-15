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
        overflow: hidden;
    }

    //animations

    //Fade
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
    
    //Zoom Fade
    .zoomFade-enter {
        opacity: 0;
        transform: scale(.95);
    }
    .zoomFade-enter-active {
        opacity: 1;
        transform: scale(1);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }
    .zoomFade-exit {
        opacity: 1;
        transform: scale(1);
    }
    .zoomFade-exit-active {
        opacity: 0;
        transform: scale(1.05);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }

    //Fade to down
    .fadeToDown-enter {
        opacity: 0;
        transform: translateY(-100%);
    }
    .fadeToDown-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }
    .fadeToDown-exit {
        opacity: 1;
        transform: translateY(0);
    }
    .fadeToDown-exit-active {
        opacity: 0;
        transform: translateY(100%);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }

    //Fade to up
    .fadeToUp-enter {
        opacity: 0;
        transform: translateY(100%);
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
        transform: translateY(-100%);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }

    //Slide through X axis
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

    //Pop and fade
    .popFade-enter {
        opacity: 0;
        transform: scale(.5);
    }
    .popFade-enter-active {
        opacity: 1;
        transform: scale(1);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }
    .popFade-exit {
        opacity: 1;
        transform: scale(1);
    }
    .popFade-exit-active {
        opacity: 0;
        transform: scale(.5);
        transition-property: transform, opacity;
        transition-duration: 200ms;
    }
`;

export default GlobalStyle;