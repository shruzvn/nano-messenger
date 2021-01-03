import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const Icon = styled.i.attrs({className: "material-icons-outlined"})`
    color: ${({theme})=> theme.secondary};
    font-size: 1.2rem;
    margin-left: auto;
`;

function ReadStatus({state}) {
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition key={state} classNames="fadeToUp" addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
            }}>
                <Icon>
                    {state ? "done_all" : "done" }
                </Icon>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default ReadStatus;