import { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { Main, MaxToParent } from '../../common/Containers';
import Navigator from './Navigator';

const Container = styled(Main).attrs({as: "main", flexEnabled: true})`
    height: 100vh;
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

    const changeActivity = e=>{
        setActivity(e.currentTarget.id);
    }

    return (
        <Container>
            <Navigator onSelect={changeActivity} active={currentActivity} />
            <ActivityWrapper>
                {children.map(child =>
                    <CSSTransition in={child.id === currentActivity} {...animationProps}>
                        <MaxToParent>
                            {child.txt}
                        </MaxToParent>
                    </CSSTransition>
                )}
            </ActivityWrapper>
        </Container>
    )
}

export default Messenger;