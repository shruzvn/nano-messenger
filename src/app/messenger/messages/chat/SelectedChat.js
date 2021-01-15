import styled from 'styled-components';

import TopBar from './TopBar';
import MessageInput from './MessageInput';
import MessagesArea from './MessagesArea';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

function SelectedChat({ user, mobileMode, onBack }) {
    return (
        <Container>
            {user &&
                <>
                    <TopBar isGroup={user.isGroup}
                        name={user.name}
                        backEnabled={mobileMode}
                        onBack={onBack}
                        online={user.lastseen === "Online"}
                        bottom={user.isGroup ? user.members.length + " Members" :
                            user.lastseen === "Online" ? "Online" : "Last seen " + user.lastseen} />
                    <MessagesArea />
                    <MessageInput />
                </>
            }
        </Container>
    )
}

export default SelectedChat;