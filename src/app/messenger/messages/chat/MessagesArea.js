import {useEffect, useState} from 'react';
import styled from 'styled-components';

import MessageBubble, { Bubble } from './MessageBubble';

import {Conversations, Users} from '../../../data/Database';
import { getTime } from './../../../../util/Time';

const Container = styled.div`
    flex: 1;
    padding: 1.2rem;
    overflow: hidden;
`;

const createMessageBubble = (data, selected)=>{
    const parentData = Conversations[selected],
        isGroup = parentData.participants.length > 2;
    return {
        time: getTime(data.date),
        name: isGroup && Users[data.from].firstname + " " + Users[data.from].lastname,
        type: data.from === "1" ? 1 : isGroup ? 2 : 0,
        online: isGroup && Users[data.from].lastseen === "Online",
        readState: data.read ? 1 : 0,
    }
};

function MessagesArea({selected}) {
    const [messages, editMessages] = useState([]);
    
    useEffect(()=>{
        editMessages([...Conversations[selected].conversation]);
    }, [selected]);

    return (
        <Container>
            {messages.map(data=>
                <MessageBubble key={data.id} {...createMessageBubble(data, selected)}>
                    {data.messages.map((msg, j)=> <Bubble key={data.id+j}>{msg}</Bubble>)}
                </MessageBubble>
            )}
        </Container>
    )
}

export default MessagesArea;