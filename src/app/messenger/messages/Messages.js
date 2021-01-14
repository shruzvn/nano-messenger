import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ActivityMaker from '../../../util/components/ActivityMaker';
import Scrollbar from '../../../util/components/Scrollbar';
import MessageBox from './MessageBox';
import SelectedChat from './chat/SelectedChat';

const FakeData = [
    { id: "danielBrown", name: "Daniel Brown", message: "Be there soon", time: "2 Mins ago", unread: 1, lastseen: "2 Mins ago" },
    { id: "alannaCobbet", name: "Alanna Cobbet", message: "Arigato!", time: "5 Mins ago", from: "You", readState: false, lastseen: "1 Min ago" },
    { id: "violetPierpoint", name: "Violet Pirepoint", message: "Kinda", time: "1 Hour ago", from: "You", readState: true, lastseen: "Online" },
    { id: "gng", name: "Our Gang", message: "Well well well", time: "2 Hours ago", from: "Daniel Brown", isGroup: true, members: ["x","y","z"] },
];

function Messages() {
    const mobileView = useSelector(state => state.mobileView);

    const [activityState, setActivityState] = useState(0),
        [activeChat, selectChat] = useState(-1);

    useEffect(() => {
        setActivityState(0);
    }, [mobileView]);

    const moveToNextActivity = id => {
        selectChat(id);
        setActivityState(activityState + 1);
    }

    const moveToPreviousActivity = () => {
        setActivityState(activityState - 1);
    }

    return (
        <ActivityMaker mobileMode={mobileView}
            activityState={activityState} onBack={moveToPreviousActivity}>
            <Scrollbar searchbar="messages">
                {FakeData.map((data, i) =>
                    <MessageBox {...data} active={!mobileView && i === activeChat} key={data.id} id={i} onClick={moveToNextActivity} />
                )}
            </Scrollbar>
            <SelectedChat onBack={moveToPreviousActivity} mobileMode={mobileView} user={FakeData[activeChat]}/>
            <div>Your Selected Contact</div>
        </ActivityMaker>
    )

}

export default Messages;