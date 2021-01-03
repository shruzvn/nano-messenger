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

//temporary
const Activity = styled.div`
    background-color: ${({ theme }) => theme.main[0]};
    color: ${({ theme }) => theme.text[0]};
    transition-property: background-color, color;
    transition-duration: 300ms;
    width: 100%;
    height: 100%;
    padding: 1.4rem;
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

function Messenger(props) {
    const [currentActivity, setActivity] = useState("messages");

    const changeActivity = e => {
        setActivity(e.currentTarget.id);
    }

    return (
        <MainContainer>
            <Menu  {...props} />
            <Container>
                <Navigator onSelect={changeActivity} active={currentActivity} />
                <ActivityWrapper>
                    {children.map(child =>
                        <CSSTransition key={child.id} in={child.id === currentActivity} {...animationProps}>
                            <MaxToParent>
                                <Activity>
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