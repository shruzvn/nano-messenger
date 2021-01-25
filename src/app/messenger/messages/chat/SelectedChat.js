import styled from 'styled-components';

import TopBar from './TopBar';
import MessageInput from './MessageInput';
import MessagesArea from './MessagesArea';
import { getRelativeTime } from './../../../../util/Time';

import { Users, Conversations } from '../../../data/Database';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const createSelectedChat = (selected) => {
    const data = Conversations[selected],
        isGroup = data.participants.length > 2,
        user = !isGroup && Users[data.participants[1]];   
    return {
        isGroup,
        name: isGroup ? data.name : user.firstname + " " + user.lastname,
        profile: {
            name: isGroup ? data.name :user.firstname,
            online: !isGroup && user.lastseen === "Online",
        },
        bottom: isGroup ? data.participants.length + " Members" :
            user.lastseen === "Online" ? "Online" : "Last seen " + getRelativeTime(user.lastseen)
    }
};

function SelectedChat({ selected, mobileMode, onBack }) {
    return (
        <Container>
            {selected !== -1 &&
                <>
                    <TopBar  {...createSelectedChat(selected)} backEnabled={mobileMode} onBack={onBack} />
                    <MessagesArea selected={selected} />
                    <MessageInput />
                </>
            }
        </Container>
    )
}

export default SelectedChat;