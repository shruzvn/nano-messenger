import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { Main } from '../../common/Containers';

const Container = styled(Main)`
    @media (max-width: 1280px){
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: transparent;
    }
`;

const Wrapper = styled(Main)`
    ${({ enableTransition }) => enableTransition && css`
        transition-property: background-color, border-color, transform;
    `}
    will-change: transform;
    width: 100%;
    min-height: 100%;
`;

function Activity({ children, onExit, borderDirection, disableSwap, onClick }) {
    const ReferenceToContainer = useRef(null);

    const [defaultPoint, initDefualtPoint] = useState(null),
        [point, setPoint] = useState(0),
        [swapping, enableSwapping] = useState(null);

    useEffect(() => {
        if (!disableSwap) {
            window.addEventListener("mousedown", swapStarts, false);
            window.addEventListener("touchstart", swapStarts, false);
        } else {
            window.removeEventListener("mousedown", swapStarts, false);
            window.removeEventListener("touchstart", swapStarts, false);
        }
        return () => {
            window.removeEventListener("mousedown", swapStarts, false);
            window.removeEventListener("touchstart", swapStarts, false);
            swapEnds();
        }
        //eslint-disable-next-line
    }, [disableSwap]);

    useEffect(() => {
        if (defaultPoint) {
            enableSwapping(true);
            if (defaultPoint.isTouchScreen) {
                window.addEventListener("touchmove", swap, false);
                window.addEventListener("touchend", swapEnds, false);
                window.addEventListener("touchcancel", swapEnds, false);
            } else {
                window.addEventListener("mousemove", swap, false);
                window.addEventListener("mouseup", swapEnds, false);
            }
        }
        //eslint-disable-next-line
    }, [defaultPoint]);

    useEffect(() => {
        if (!swapping) {
            if (point > 120)
                onExit && onExit();
            else
                setPoint(0);
        }
        //eslint-disable-next-line
    }, [swapping])

    const swapStarts = e => {
        let clientX, isTouchScreen = false;
        const { target } = e;
        if (e.changedTouches) {
            clientX = e.changedTouches[0].clientX;
            isTouchScreen = true;
        }
        else {
            clientX = e.clientX;
        }
        if (ReferenceToContainer.current.contains(target)) {
            if (!isTouchScreen)
                e.preventDefault();
            initDefualtPoint({ x: clientX, isTouchScreen });
        }
    }

    const swap = (e) => {
        let clientX;
        if (e.changedTouches)
            clientX = e.changedTouches[0].clientX;
        else
            clientX = e.clientX;
        setPoint(Math.round(clientX - defaultPoint.x));
    }

    const swapEnds = () => {
        window.removeEventListener("mousemove", swap, false);
        window.removeEventListener("touchmove", swap, false);
        window.removeEventListener("mouseup", swapEnds, false);
        window.removeEventListener("touchend", swapEnds, false);
        window.removeEventListener("touchcancel", swapEnds, false);
        enableSwapping(false);
        initDefualtPoint(null);
    }

    return (
        <Container borderDirection={borderDirection}>
            <Wrapper onClick={onClick} style={{
                transform: `translateX(${point}px)`
            }} enableTransition={!swapping} ref={ReferenceToContainer}>
                {children}
            </Wrapper>
        </Container>
    )
}

const animationProps = {
    unmountOnExit: true,
    timeout: 300,
    classNames: "xSlide"
};

function ActivityMaker({ children, activityState, onBack, mobileMode }) {

    return (
        <>
            {children.map((child, i) =>
                i > 0 ?
                    mobileMode ?
                        <CSSTransition key={i} in={activityState > i-1} {...animationProps}>
                            <Activity
                                onExit={onBack}>
                                {child}
                            </Activity>
                        </CSSTransition>
                        :
                        <Activity
                            key={i}
                            borderDirection={i < children.length - 1 && "right"}
                            disableSwap>
                            {child}
                        </Activity>
                    :
                    <Main key={i} borderDirection={!mobileMode && "right"}>
                        {child}
                    </Main>
            )}
        </>
    )

}

export default ActivityMaker;