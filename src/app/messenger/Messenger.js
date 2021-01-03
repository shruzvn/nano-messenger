import { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { Main, MaxToParent } from '../../common/Containers';
import Menu from './Menu';
import Navigator from './Navigator';

const MainContainer = styled(Main).attrs({ as: "main", flexEnabled: true })`
    height: 100vh;
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

const animationProps = {
    unmountOnExit: true,
    timeout: 300,
    classNames: "fade"
};

//temporary
const children = [
    { id: "messages", txt: "Your Messages" }, { id: "contacts", txt: "Your Contacts" },
    { id: "writeMessage", txt: "Write a new message" }, { id: "settings", txt: "App Settings" },
    { id: "info", txt: "Information about app" }
];

function Messenger() {
    const [currentActivity, setActivity] = useState("messages");

    const changeActivity = e => {
        setActivity(e.currentTarget.id);
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
                                {child.txt}
                            </MaxToParent>
                        </CSSTransition>
                    )}
                </ActivityWrapper>
            </Container>
        </MainContainer>
    )
}

export default Messenger;