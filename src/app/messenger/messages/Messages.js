import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ActivityMaker from '../../../util/components/ActivityMaker';
import Scrollbar from '../../../util/components/Scrollbar';
import MessageBox from './MessageBox';
import SelectedChat from './chat/SelectedChat';

import { Users, Conversations } from '../../data/Database';

const createMessageBox = (data) => {
    const lastMessage = data.conversation[data.conversation.length - 1],
        isGroup = data.participants.length > 2,
        user = !isGroup && Users[data.participants[1]];
    return {
        id: data.id,
        name: isGroup ? data.name : user.firstname + " " + user.lastname, 
        message: lastMessage.messages[lastMessage.messages.length - 1],
        date: lastMessage.date,
        isGroup,
        readState: lastMessage.read,
        lastseen: !isGroup && user.lastseen,
        key: data.id,
        from: lastMessage.from === "1" ?  "You" : isGroup ? 
             Users[lastMessage.from].firstname + " "+  Users[lastMessage.from].lastname : undefined
    };
};

function Messages() {
    const mobileView = useSelector(state => state.mobileView);

    const [activityState, setActivityState] = useState(0),
        [activeChat, selectChat] = useState(-1);

    useEffect(() => {
        setActivityState(0);
    }, [mobileView]);

    const selectChatHandler = id => {
        selectChat(id);
        setActivityState(1);
    }

    const moveToPreviousActivity = () => {
        setActivityState(activityState - 1);
    }

    return (
        <ActivityMaker mobileMode={mobileView}
            activityState={activityState} onBack={moveToPreviousActivity}>
            <Scrollbar searchbar="messages">
                {Conversations.map(data =>
                    <MessageBox {...createMessageBox(data)} 
                        active={!mobileView && data.id === activeChat} onClick={selectChatHandler} />
                )}
            </Scrollbar>
            <SelectedChat onBack={moveToPreviousActivity} mobileMode={mobileView} selected={activeChat} />
            <div/>
        </ActivityMaker>
    )

}

export default Messages;