import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { Main } from '../../common/Containers';
import Profile from './Profile';
import IconButton from './IconButton';

const Group = styled(Main).attrs({ as: "div", yAlign: "center", flexEnabled: true })`
    background-color: transparent;
    h4,p{
        transition: 200ms color;
    }
    h4{
        color: ${({ theme }) => theme.text[0]};
    }
    p{
        color: ${({ theme }) => theme.text[3]};
        font-size: .9rem;
    }
`;

const DeleteContainer = styled(Main).attrs({ as: "div", yAlign: "center", xAlign: "flex-end", flexEnabled: true })`
    padding: 1.2rem;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 98%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.delete};
    color: ${({ theme }) => theme.primaryInner};
    i{
        font-size: 1.4rem;
    }
`;

const Container = styled(Group)`
    padding: 1.2rem;
    height: 6rem;
    background-color: ${({ theme, active }) => active ? theme.main[1] : theme.main[0]};
    cursor: pointer;
    transition-property: background-color, color, border-radius;
    border-radius: ${({ swipEnabled }) => swipEnabled ? "0 1rem 1rem 0" : "0"};
    &:active{
        background-color: ${({ theme }) => theme.main[1]};
    }
    ${Group}:first-of-type{
        margin-bottom: .6rem;
    }
    ${({ enableTransition }) => enableTransition && css`
        transition-property: background-color, border-color, transform;
    `}
`;

let separateMouseDownAndTouchStarts = 0;

function InfoBox({ children, profile, active, disableSwip, onDelete, onClick, id, backEnabled, onBack }) {
    const [defaultPoints, initDefualtPoints] = useState(null),
        [point, setPoint] = useState({ diff: 0, point: 0 }),
        [swipping, enableSwipping] = useState(null);

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
        if (swipping === false) {
            if (point.point === 0 && point.diff < 10)
                onClick && onClick(id);
            else if (-point > 200)
                console.log("Delete");
            swipEnds();
            setPoint({ diff: 0, point: 0 });
        }
        //eslint-disable-next-line
    }, [swipping]);

    const swipStarts = e => {
        if (!disableSwip) {
            let clientX, clientY, isTouchScreen = false;
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
                e.preventDefault();
            }
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
        let diff = Math.abs(clientY - defaultPoints.y),
            calculatedPoint = Math.round(clientX - defaultPoints.x);
        if ((diff > 10 && calculatedPoint > 50) || calculatedPoint > 0)
            calculatedPoint = 0;
        setPoint({ point: calculatedPoint, diff });
    };

    const swipEnds = () => {
        window.removeEventListener("mousemove", swip, false);
        window.removeEventListener("touchmove", swip, false);
        window.removeEventListener("mouseup", swipEnds, false);
        window.removeEventListener("touchend", swipEnds, false);
        window.removeEventListener("touchcancel", swipEnds, false);
        initDefualtPoints(null);
        enableSwipping(false);
    };

    return (
        <div style={{ position: "relative" }}>
            {!disableSwip &&
                <DeleteContainer>
                    <i className="material-icons-outlined">delete</i>
                </DeleteContainer>
            }
            <Container onTouchStart={swipStarts} onMouseDown={swipStarts}
                swipEnabled={point.point < 0}
                enableTransition={!swipping}
                style={{ transform: "translateX(" + point.point + "px)" }}
                onClick={disableSwip && onClick}
                id={id}
                active={active}>
                {
                    backEnabled &&
                    <IconButton style={{ margin: "0 1rem 0 -.5rem" }} onClick={onBack} icon="keyboard_backspace" type={1} />
                }
                {profile && <Profile {...profile} />}
                <div style={{ flex: 1, marginLeft: profile ? "1rem" : 0 }}>
                    <Group>
                        {children[0]}
                    </Group>
                    {children[1] &&
                        <Group>
                            {children[1]}
                        </Group>
                    }
                </div>
            </Container>
        </div>
    )
}

export default InfoBox;