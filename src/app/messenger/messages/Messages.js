import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ActivityMaker from '../../../util/components/ActivityMaker';
import InfoBox from '../../../util/components/InfoBox';
import Scrollbar from '../../../util/components/Scrollbar';
import ReadStatus from './ReadStatus';

const MessageTime = styled.div`
    font-size: .9rem;
    color: ${({ theme }) => theme.text[1]};
    margin: 0 0 0 auto;
`;

const From = styled(MessageTime)`
    margin: 0 .3rem 0 0;
`;

const FakeData = [
    { id: "danielBrown", name: "Daniel Brown", lastMsg: "Be there soon", time: "2 Mins ago" },
    { id: "alannaCobbet", name: "Alanna Cobbet", lastMsg: "Arigato!", time: "5 Mins ago", fromYou: true, readState: false },
    { id: "violetPierpoint", name: "Violet Pirepoint", lastMsg: "Kinda", time: "1 Hour ago", fromYou: true, readState: true, online: true },
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
            <Scrollbar searchbar>
                {FakeData.map(data =>
                    <InfoBox onClick={moveToNextActivity} key={data.id}
                        profile={{ name: data.name, img: "img/" + data.id + ".jpg", online: data.online }}>
                        <>
                            <h4>{data.name}</h4>
                            <MessageTime>{data.time}</MessageTime>
                        </>
                        <>
                            {data.fromYou && <From>You:</From>}
                            <p>{data.lastMsg}</p>
                            {data.fromYou && <ReadStatus state={data.readState} />}
                        </>
                    </InfoBox>
                )}
            </Scrollbar>
            <div>Your Selected Contact</div>
            <div>Your Selected Contact</div>
        </ActivityMaker>
    )

}

export default Messages;