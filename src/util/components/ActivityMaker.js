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
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
`;

const Wrapper = styled(Main)`
    ${({ enableTransition }) => enableTransition && css`
        transition-property: background-color, border-color, transform;
    `}
    will-change: transform;
    width: 100%;
    height: 100%;
`;

let separateMouseDownAndTouchStarts = 0;

function Activity({ children, onExit, borderDirection, disableSwap }) {
    const ReferenceToContainer = useRef(null);

    const [defaultPoints, initDefualtPoints] = useState(null),
        [point, setPoint] = useState(0),
        [swipping, enableSwipping] = useState(null);

    useEffect(() => {
        if (!disableSwap) {
            window.addEventListener("mousedown", swipStarts, false);
            window.addEventListener("touchstart", swipStarts, false);
        } else {
            window.removeEventListener("mousedown", swipStarts, false);
            window.removeEventListener("touchstart", swipStarts, false);
        }
        return () => {
            window.removeEventListener("mousedown", swipStarts, false);
            window.removeEventListener("touchstart", swipStarts, false);
            swipEnds();
        }
        //eslint-disable-next-line
    }, [disableSwap]);

    useEffect(() => {
        if (defaultPoints) {
            enableSwipping(true);
            if (defaultPoints.isTouchScreen) {
                window.addEventListener("touchmove", swip, false);
                window.addEventListener("touchend", swipEnds, false);
                window.addEventListener("touchcancel", swipEnds, false);
                separateMouseDownAndTouchStarts++;
            } else {
                window.addEventListener("mousemove", swip, false);
                window.addEventListener("mouseup", swipEnds, false);
            }
        }
        //eslint-disable-next-line
    }, [defaultPoints]);

    useEffect(() => {
        if (!swipping) {
            if (point > 100)
                onExit && onExit();
            else
                setPoint(0);
        }
        //eslint-disable-next-line
    }, [swipping]);

    const swipStarts = e => {
        let clientX, clientY, isTouchScreen = false;
        const { target } = e;
        if (e.changedTouches) {
            clientX = e.changedTouches[0].clientX;
            clientY = e.changedTouches[0].clientY;
            isTouchScreen = true;
        }
        else {
            if (separateMouseDownAndTouchStarts > 0) {
                separateMouseDownAndTouchStarts = 0;
                return false;
            }
            clientX = e.clientX;
            clientY = e.clientY;
            
        }
        if (ReferenceToContainer.current.contains(target)) {
            if (!isTouchScreen)
                e.preventDefault();
            initDefualtPoints({ x: clientX, y: clientY, isTouchScreen });
        }
    };

    const swip = (e) => {
        let clientX, clientY;
        if (e.changedTouches) {
            clientX = e.changedTouches[0].clientX;
            clientY = e.changedTouches[0].clientY;
            separateMouseDownAndTouchStarts = 0;
        }
        else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const diff = Math.abs(clientY - defaultPoints.y),
            calculatedPoint = Math.round(clientX - defaultPoints.x);
        if ((diff > 10 && calculatedPoint < 50) || calculatedPoint < 0){
            swipEnds();
            return false;
        }
        setPoint(calculatedPoint);
    };

    const swipEnds = () => {
        window.removeEventListener("mousemove", swip, false);
        window.removeEventListener("touchmove", swip, false);
        window.removeEventListener("mouseup", swipEnds, false);
        window.removeEventListener("touchend", swipEnds, false);
        window.removeEventListener("touchcancel", swipEnds, false);
        enableSwipping(false);
        initDefualtPoints(null);
    };

    return (
        <Container borderDirection={borderDirection}>
            <Wrapper style={{
                transform: `translateX(${point}px)`
            }} enableTransition={!swipping} ref={ReferenceToContainer}>
                {children}
            </Wrapper>
        </Container>
    )
}

const animationProps = {
    unmountOnExit: true,
    timeout: 200,
    classNames: "xSlide"
};

function ActivityMaker({ children, activityState, onBack, mobileMode }) {

    return (
        <>
            {children.map((child, i) =>
                i > 0 ?
                    mobileMode ?
                        <CSSTransition key={i} in={activityState > i - 1} {...animationProps}>
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