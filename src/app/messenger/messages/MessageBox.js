import styled from 'styled-components';

import InfoBox from '../../../util/components/InfoBox';
import ReadStatus from './ReadStatus';
import {Main} from '../../../common/Containers';

const MessageTime = styled.div`
    font-size: .9rem;
    color: ${({ theme }) => theme.text[1]};
    margin: 0 0 0 auto;
`;

const From = styled(MessageTime)`
    margin: 0 .3rem 0 0;
`;

const GroupIcon = styled.i.attrs({ className: "material-icons-outlined" })`
    margin-right: .5rem;
    font-size: 1.2rem;
`;

const UnreadMessages = styled(Main).attrs({as: "div", flexEnabled: true, yAlign: "center"})`
    padding: 0 .35rem;
    height: 1.2rem;
    border-radius: 5rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primaryInner};
    font-size: .8rem;
    margin-left: auto;
    transition-property: background-color, color, width;
`;

function MessageBox({ onClick, name, isGroup, from, readState, message, time, profilePicture, unread, online }) {
    return (
        <InfoBox onClick={onClick} profile={profilePicture ? { img: profilePicture, online } : { name, online }}>
            <>
                {isGroup && <GroupIcon>group</GroupIcon>}
                <h4>{name}</h4>
                <MessageTime>{time}</MessageTime>
            </>
            <>
                {from && <From>{from}:</From>}
                <p>{message}</p>
                {from === "You" ? <ReadStatus state={readState} /> :
                    unread && <UnreadMessages>{unread}</UnreadMessages>}
            </>
        </InfoBox>
    )
}

export default MessageBox;