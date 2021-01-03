import styled from 'styled-components';

import { Main } from '../../common/Containers';
import IconButton from '../../util/components/IconButton';

const Container = styled(Main).attrs({
    flexEnabled: true, xAlign: "center", yAlign: "center", borderDirection: "right"
})`
    padding: 1.4rem;
    flex-direction: column;
    div{
        margin-top: 2rem;
        &:first-of-type{
            margin-top: 0;
        }
    }
    @media (max-width: 1280px){
        flex-direction: row;
        border-style: solid none none;
        div{
            margin-top: 0;
            margin-left: 2rem;
            &:first-of-type{
                margin-left: 0;
            }
        }
    }
`;

const Buttons = [
    { id: "messages", icon: "message" },
    { id: "contacts", icon: "contacts" },
    { id: "writeMessage", icon: "create", primary: true },
    { id: "settings", icon: "settings" },
    { id: "info", icon: "info" },
]

function Navigator({ onSelect, active }) {
    return (
        <Container>
            {Buttons.map(({ id, icon, primary }) =>
                <IconButton onClick={onSelect} active={active === id} id={id} key={id} type={primary ? 3 : 1} icon={icon} />
            )}
        </Container>
    )
}

export default Navigator;