import {useEffect, useState, useRef} from 'react';
import styled, { css } from 'styled-components';

import { Main } from '../../../../common/Containers';
import ReadStatus from './../ReadStatus';
import Profile from '../../../../util/components/Profile'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    figure{
        margin: 0 1rem 2rem 0;
        cursor: pointer;
    }
    margin-bottom: 1.2rem;
    &:last-of-type{
        margin-bottom: 0;
    }
`;

const StatusContainer = styled(Main).attrs({ flexEnabled: true, yAlign: "center" })`
    color: ${({ theme }) => theme.text[2]};
    font-size: .8rem;
    overflow: hidden;
    padding: .6rem 0;
    transition-property: color, opacity;
    width: ${({currentWidth})=> currentWidth + "px"};
`;

export const Bubble = styled(Main).attrs({ as: "div" })`
    padding: 1rem 1.2rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primaryInner};
    border-radius: 1.5rem;
    font-size: .9rem;
    margin-top: .5rem;
    max-width: 100%;
    min-width: 10rem;
    width: fit-content;
    &:first-of-type{
        margin-top: 0;
    }
`;

const Container = styled.div`
    max-width: 80%;
    display: flex;
    flex-direction: column;
    ${({ chatType }) => chatType === 1 ?
        css`
            margin-left: auto;
            align-items: flex-end;
            ${Bubble}:last-of-type{
                border-radius: 1.5rem 1.5rem .5rem 1.5rem;
            }
        ` : css`
            margin-right: auto;
            ${Bubble}{
                background-color: ${({ theme }) => theme.main[1]};
                color: ${({ theme }) => theme.text[0]};
                ${chatType !== 2 ? css`
                    &:first-of-type{
                        border-radius: .5rem 1.5rem 1.5rem 1.5rem;
                    }`
                : css`
                    :last-of-type{
                        border-radius: 1.5rem 1.5rem 1.5rem .5rem;
                    }`
            }
            }
        `
    }
    p{
        margin-bottom: .8rem;
        margin-left: .4rem;
        color: ${({ theme }) => theme.text[2]};
        transition: 200ms color;
        font-size: .9rem;
        font-weight: bold;
    }
`;

function MessageContainer(props) {
    const refToContainer = useRef(null);

    const [statusWidth, setStatusWidth] = useState("auto");
    
    useEffect(()=>{
        setStatusWidth(refToContainer.current.querySelector("div:last-of-type").offsetWidth)
    },[]);

    return (
        <Wrapper>
            {props.type === 2 && <Profile size="S" name={props.name} />}
            <Container ref={refToContainer} chatType={props.type}>
                {props.type === 2 && <p>{props.name}</p>}
                {props.children}
                <StatusContainer currentWidth={statusWidth}>
                    <span>{props.time}</span>
                    {props.type === 1 && <ReadStatus state={props.readState} />}
                </StatusContainer>
            </Container>
        </Wrapper>
    )
}

export default MessageContainer;