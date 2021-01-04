import { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { Main, MaxToParent } from '../../common/Containers';
import Menu from './Menu';
import Navigator from './Navigator';
import Messages from './messages/Messages';
import Contacts from './contacts/Contacts';

const MainContainer = styled(Main).attrs({ flexEnabled: true })`
    height: 100%;
    flex-direction: column;
`;

const Container = styled(Main).attrs({ flexEnabled: true })`
    flex: 1;
    @media (max-width: 1280px){
        flex-direction: column-reverse;
    }
`;

const ActivityWrapper = styled(Main)`
    flex: 1;
`;

//temporary
const Activity = styled.div`
    background-color: ${({ theme }) => theme.main[0]};
    color: ${({ theme }) => theme.text[0]};
    transition-property: background-color, color;
    transition-duration: 300ms;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: ${({ gridCols }) => gridCols};
    @media (max-width: 1280px){
        grid-template-columns: 1fr;
    }
`;

const animationProps = {
    unmountOnExit: true,
    timeout: 300,
    classNames: "zoomFade"
};

//temporary
const children = [
    { id: "messages", txt: <Messages />, grid: "24% 1fr 20%" },
    { id: "contacts", txt: <Contacts />, grid: "24% 1fr" },
    { id: "settings", txt: "App Settings", grid: "1fr" },
    { id: "info", txt: "Information about app", grid: "1fr" }
];

function Messenger() {
    const [currentActivity, setActivity] = useState("messages");

    const changeActivity = e => {
        const { id } = e.currentTarget;
        if (id !== "writeMessage")
            setActivity(id);
    }

    return (
        <MainContainer>
            <Menu />
            <Container>
                <Navigator onSelect={changeActivity} active={currentActivity} />
                <ActivityWrapper>
                    {children.map(child =>
                        <CSSTransition key={child.id} in={child.id === currentActivity} {...animationProps}>
                            <MaxToParent>
                                <Activity gridCols={child.grid}>
                                    {child.txt}
                                </Activity>
                            </MaxToParent>
                        </CSSTransition>
                    )}
                </ActivityWrapper>
            </Container>
        </MainContainer>
    )
}

export default Messenger;