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

const Container = styled(Main)`
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
            <Container flexEnabled>
                <Navigator onSelect={changeActivity} active={currentActivity} />
                <Container>
                    {children.map(child =>
                        <CSSTransition in={child.id === currentActivity} {...animationProps}>
                            <MaxToParent>
                                {child.txt}
                            </MaxToParent>
                        </CSSTransition>
                    )}
                </Container>
            </Container>
        </MainContainer>
    )
}

export default Messenger;