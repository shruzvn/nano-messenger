// Containers that will be used across the application
// The code is quite understandable, so no further explanation is needed

import styled, { css } from 'styled-components';

export const Main = styled.section`
    position: relative;
    background-color: ${({ theme }) => theme.main[0]};
    transition-property: background-color, border-color;
    transition-duration: 200ms;
    border-width: 0.1rem;
    border-color: ${({ theme }) => theme.border};
    overflow: hidden;
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
            justify-content: ${xAlign};
        `
    }
`;

export const MaxToParent = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`;