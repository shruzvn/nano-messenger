import styled from 'styled-components';

import MessageBubble, { Bubble } from './MessageBubble';

const Container = styled.div`
    flex: 1;
    padding: 1.2rem;
`;

function MessagesArea() {
    return (
        <Container>
            <MessageBubble time="12:00" name="Justin Dust" type={2}>
                <Bubble>Hi</Bubble>
            </MessageBubble>
            <MessageBubble time="12:02" name="Alanna Cobbett" type={2}>
                <Bubble>Hello</Bubble>
                <Bubble>How are you?</Bubble>
            </MessageBubble>
            <MessageBubble time="12:00" name="Justin Dust" type={2}>
                <Bubble>Fine what about you?</Bubble>
            </MessageBubble>
            <MessageBubble type={1} readState={1} time="11:20">
                <Bubble>Hi Justin, we missed you. <br/> Where were you?</Bubble>
            </MessageBubble>
        </Container>
    )
}

export default MessagesArea;