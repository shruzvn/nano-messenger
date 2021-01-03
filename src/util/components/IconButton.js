import styled, { css } from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { Main } from '../../common/Containers';

const Button = styled(Main).attrs({ as: "div", flexEnabled: true, xAlign: "center", yAlign: "center" })`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
    transition-property: background-color, color, transform;
    transition-duration: 200ms;
    overflow: hidden;

    //select the correct icon color based on the given type and active state
    color: ${({ theme, type, active }) => type === 3 ? theme.primaryInner : (type === 1 && active) ? theme.primary : theme.icon};
    background-color: ${({ theme, type }) => {
        switch (type) {
            case 3:
                return theme.primary;
            case 2:
                return theme.main[2];
            default:
                return "transparent";
        }
    }};

    //don't show hover and active effects if the disableEffects prop is false
    ${({ disableEffects }) =>
        !disableEffects && css`
            &:active{
                transform: scale(.9);
            }
        `
    }

    i{
        font-size: 1.4rem;
    }
`;

function IconButton(props) {
    return (
        <Button {...props} >
            {typeof props.icon !== "string" ?
                <SwitchTransition mode="out-in">
                    <CSSTransition key={props.animationState} classNames="fadeToUp" addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}>
                        <i className="material-icons-outlined">
                            {props.animationState ? props.icon[0] : props.icon[1]}
                        </i>
                    </CSSTransition>
                </SwitchTransition>
                :
                <i className="material-icons-outlined">{props.icon}</i>
            }
        </Button>
    )
}

export default IconButton;