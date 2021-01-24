import styled, { css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { Main } from '../../common/Containers';
import { TruncateChar } from '../Tools';

const Wrapper = styled.figure`
    background-color: ${({ theme, selected }) => selected ? theme.primary : theme.main[2]};
    width: ${({ size }) => size === "L" ? "6rem" : size==="S" ? "3.1rem" : "3.5rem"};
    height: ${({ size }) => size === "L" ? "6rem" : size==="S" ? "3.1rem" : "3.5rem"};
    font-size: ${({ size }) => size === "L" ? "2.2rem" : size==="S" ? "1.1rem" : "1.2rem"};
    border-radius: 50%;
    transition: 200ms background-color;
`;

const Container = styled(Main).attrs({ as: "div", xAlign: "center", yAlign: "center", flexEnabled: true })`
    background-color: ${({ theme }) => theme.main[2]};
    color: ${({ theme }) => theme.icon};
    font-weight: bold;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    overflow: visible;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    i{
        font-size: 1.4rem;
    }

    ${({ selectable, selected }) => selectable && css`
        transition-property: transform, background-color;
        transform-origin: center;
        transform: ${selected ? "scale(.9) translate(.03rem, .03rem)" : "none"};
        border: .2rem solid;
        border-color: ${({ theme }) => selected ? theme.main[0] : "transparent"};
    `}
`;

const OnlineDot = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transition-property: background-color, border-color;
    transition-duration: 200ms;
    background-color: ${({ theme }) => theme.secondary};
    position: absolute;
    bottom: 0;
    right: 0;
    border: .2rem solid ${({ theme }) => theme.main[0]};
`;

const Selected = styled(OnlineDot)`
    width: 1.5rem;
    height: 1.5rem;
    bottom: -.4rem;
    right: -.4rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primaryInner};
    border-color: ${({ theme }) => theme.main[0]};
    i{
        transform: translateY(.05rem);
        font-size: 1.1rem;
    }
`;

function Profile({ img, name, online, icon, selectable, selected, size }) {
    return (
        <Wrapper size={size} selected={selected}>
            <Container selectable={selectable} selected={selected}>
                {
                    icon ?
                        <i className="material-icons-outlined">{icon}</i>
                        :
                        img ?
                            <img alt={name} src={img} />
                            :
                            TruncateChar(name, 1)
                }
                <CSSTransition classNames="popFade" unmountOnExit timeout={200} in={selectable ? selected : online}>
                    {
                        selectable ? 
                        <Selected><i className="material-icons-outlined">done</i></Selected>
                        :
                        <OnlineDot/>
                    }
                </CSSTransition>
            </Container>
        </Wrapper>
    )
}

export default Profile;