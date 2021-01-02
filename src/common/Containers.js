// Containers that will be used across the application
// The code is quite understandable, so no further explanation is needed

import styled, { css } from 'styled-components';

export const Main = styled.section`
    position: relative;
    background-color: #FFF; //this will be changed
    border-width: 0.1rem;
    border-color: #000; //this will be changed
    border-style: ${({ borderDirection }) => {
        switch (borderDirection) {
            case "up":
                return "solid none none";
            case "down":
                return "none none solid";
            case "right":
                return "none solid none none";
            default:
                return "none";
        }
    }};

    ${({ flexEnabled, xAlign, yAlign }) => flexEnabled && css`
            display: flex;
            align-items: ${yAlign};
            justify-items: ${xAlign};
        `
    }
`;

export const MaxToParent = styled.section`
    position: absolute;
    background-color: #FFF; //this will be changed
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;