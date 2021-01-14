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
    color: ${({theme})=> theme.text[1]};
    transition: 200ms color;
`;

const UnreadMessages = styled(Main).attrs({as: "div", flexEnabled: true, yAlign: "center"})`
    padding: 0 .35rem;
    height: 1.2rem;
    border-radius: 5rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primaryInner};
    font-size: .9rem;
    margin-left: auto;
    transition-property: background-color, color, width;
`;

function MessageBox({ onClick, name, isGroup, from, readState, message, time, profilePicture, unread, lastseen, id, active }) {
    return (
        <InfoBox id={id} onClick={onClick} active={active}
        profile={profilePicture ? { img: profilePicture, online: lastseen === "Online" } : { name, online: lastseen === "Online" }}>
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