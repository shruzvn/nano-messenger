import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ActivityMaker from '../../../util/components/ActivityMaker';
import Scrollbar from '../../../util/components/Scrollbar';
import MessageBox from './MessageBox';

const FakeData = [
    { id: "danielBrown", name: "Daniel Brown", message: "Be there soon", time: "2 Mins ago", unread: 1 },
    { id: "alannaCobbet", name: "Alanna Cobbet", message: "Arigato!", time: "5 Mins ago", from: "You", readState: false },
    { id: "violetPierpoint", name: "Violet Pirepoint", message: "Kinda", time: "1 Hour ago", from: "You", readState: true, online: true },
    { id: "gng", name: "Our Gang", message: "Well well well", time: "2 Hours ago", from: "Daniel Brown", isGroup: true},
];

function Messages() {
    const mobileView = useSelector(state => state.mobileView);

    const [activityState, setActivityState] = useState(0);

    useEffect(() => {
        setActivityState(0);
    }, [mobileView]);

    const moveToNextActivity = () => {
        setActivityState(activityState + 1);
    }

    const moveToPreviousActivity = () => {
        setActivityState(activityState - 1);
    }

    return (
        <ActivityMaker mobileMode={mobileView}
            activityState={activityState} onBack={moveToPreviousActivity}>
            <Scrollbar searchbar="messages">
                {FakeData.map(data =>
                    <MessageBox key={data.id} onClick={moveToNextActivity} {...data}/>
                )}
            </Scrollbar>
            <div>Your Selected Contact</div>
            <div>Your Selected Contact</div>
        </ActivityMaker>
    )

}

export default Messages;