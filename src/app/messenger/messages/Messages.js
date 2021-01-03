import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ActivityMaker from '../../../util/components/ActivityMaker';

function Messages() {
    const mobileView = useSelector(state => state.mobileView);

    const [activityState, setActivityState] = useState(0);

    useEffect(()=>{
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
            <div style={{width: "100%", height: "100%"}} onClick={moveToNextActivity}>Your Messages List</div>
            <div style={{width: "100%", height: "100%"}} onClick={moveToNextActivity}>Your Selected Chat</div>
            <div>Your Selected Contact</div>
        </ActivityMaker>
    )

}

export default Messages;