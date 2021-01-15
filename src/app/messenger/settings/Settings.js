import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ActivityMaker from '../../../util/components/ActivityMaker';
import Scrollbar from '../../../util/components/Scrollbar';
import InfoBox from '../../../util/components/InfoBox';

const FakeData = [
    { id: "account", title: "Account", icon: "person", des: "Your account and profile" },
    { id: "genreal", title: "General", icon: "build", des: "Main app settings" },
    { id: "appearance", title: "Appearance", icon: "palette", des: "Look and feel of the app" },
    { id: "security", title: "Privacy and security", icon: "lock", des: "Security of your account" },
    { id: "notfications", title: "Notifications", icon: "notifications", des: "Manage notifications" },
];

function Settings() {
    const mobileView = useSelector(state => state.mobileView);

    const [activityState, setActivityState] = useState(0),
        [activeSettings, selectSettings] = useState(-1);

    useEffect(() => {
        setActivityState(0);
    }, [mobileView]);

    const selectSettingsHandler = e => {
        selectSettings(parseInt(e.currentTarget.id));
        setActivityState(1);
    }

    const moveToPreviousActivity = () => {
        setActivityState(activityState - 1);
    }

    return (
        <ActivityMaker mobileMode={mobileView}
            activityState={activityState} onBack={moveToPreviousActivity}>
            <Scrollbar searchbar="settings">
                {FakeData.map((data, i) =>
                    <InfoBox
                        disableSwip
                        profile={{icon: data.icon}}
                        active={!mobileView && i === activeSettings}
                        key={data.id} 
                        id={i}
                        onClick={selectSettingsHandler}>
                        <h4>{data.title}</h4>
                        <p>{data.des}</p>
                    </InfoBox>
                )}
            </Scrollbar>
            <div>Your Selected Settings</div>
        </ActivityMaker>
    )

}

export default Settings;