import styled from 'styled-components';

import { Main as Container } from '../../../../common/Containers';
import IconButton from '../../../../util/components/IconButton';

const props = {
    flexEnabled: true,
    yAlign: "flex-end",
    as: "div"
};

const TextArea = styled.textarea.attrs({ placeholder: "Type your message here...", rows: 1})`
    flex: 1;
    padding: 1.6rem 1.2rem;
    background-color: ${({ theme }) => theme.main[0]};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text[0]};
    transition-property: color, background-color;
    transition-duration: 200ms;
    resize: none;
    overflow: hidden;
    &::placeholder{
        color: ${({ theme }) => theme.text[2]};
    }
`;

function MessageInput() {
    const changeHandler = e=>{
        const {target} = e;  
        target.style.height = "";
        target.style.height = target.scrollHeight + "px";
    }

    return (
        <Container {...props} borderDirection="up">
            <TextArea onChange={changeHandler}  />
            <IconButton style={{margin: "0 0 .7rem .3rem"}} type={1} icon="emoji_emotions"/>
            <IconButton style={{margin: "0 0 .7rem .3rem"}} type={1} icon="image"/>
            <IconButton style={{margin: "0 1.2rem .7rem 1rem"}} type={3} icon="send"/>
        </Container>
    )
}

export default MessageInput;