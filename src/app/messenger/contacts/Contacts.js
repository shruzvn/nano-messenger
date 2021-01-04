import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import ActivityMaker from '../../../util/components/ActivityMaker';
import InfoBox from '../../../util/components/InfoBox';
import Scrollbar from '../../../util/components/Scrollbar';
import { TruncateChar } from '../../../util/Tools';
import LetterSeparator from './LetterSeparator';

const FakeData = [
    { id: "alannaCobbet", name: "Alanna Cobbet", lastseen: "Online", img: true },
    { id: "austinCharles", name: "Austin Charles", lastseen: "yesterday", img: false },
    { id: "beverleyCastill", name: "Beverley Castill", lastseen: "2 Jan", img: true },
    { id: "danielBrown", name: "Daniel Brown", lastseen: "2 mins ago", img: true },
    { id: "jamesMegan", name: "James Megan", lastseen: "Online", img: true },
];

const getLetter = (x, y) => {
    const letterX = TruncateChar(x, 1).toUpperCase(),
        letterY = y ? TruncateChar(y, 1).toUpperCase() : null;
    return letterX !== letterY ? <LetterSeparator letter={letterX} /> : null;
}

function Contacts() {
    const mobileView = useSelector(state => state.mobileView);

    const [activityState, setActivityState] = useState(0);

    useEffect(() => {
        setActivityState(0);
    }, [mobileView])

    const moveToNextActivity = () => {
        setActivityState(activityState + 1);
    }

    const moveToPreviousActivity = () => {
        setActivityState(activityState - 1);
    }

    return (
        <ActivityMaker mobileMode={mobileView}
            activityState={activityState} onBack={moveToPreviousActivity}>
            <Scrollbar searchbar="people">
                {
                    FakeData.map((data, i) =>
                        <Fragment key={i}>
                            {getLetter(data.name, FakeData[i - 1] && FakeData[i - 1].name)}
                            <InfoBox onClick={moveToNextActivity} profile={{
                                img: data.img && "img/" + data.id + ".jpg",
                                name: data.name,
                                online: data.lastseen === "Online"
                            }}>
                                <h4>{data.name}</h4>
                                <p>{data.lastseen === "Online" ?
                                    "Online" : "Last seen " + data.lastseen}</p>
                            </InfoBox>
                        </Fragment>
                    )
                }
            </Scrollbar>
            <div>Your Selected Contact</div>
        </ActivityMaker>
    )

}

export default Contacts;