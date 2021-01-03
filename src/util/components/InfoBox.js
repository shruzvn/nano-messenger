import styled from 'styled-components';

import { Main } from '../../common/Containers';
import Profile from './Profile';

const Group = styled(Main).attrs({ as: "div", yAlign: "center", flexEnabled: true })`
    background-color: transparent;
    h4,p{
        transition: 200ms color;
    }
    h4{
        color: ${({ theme }) => theme.text[0]};
    }
    p{
        color: ${({ theme }) => theme.text[3]};
        font-size: .9rem;
    }
`;

const Container = styled(Group)`
    padding: ${({ size }) => size === "S" ? "1.5rem 1.1rem" : "1.5rem 1.4rem"};
    background-color: ${({ theme, acitve }) => acitve ? theme.main[2] : theme.main[0]};
    cursor: pointer;
    &:active{
        background-color: ${({theme})=> theme.main[1]};
    }
    ${Group}:first-of-type{
        margin-bottom: .6rem;
    }
`;

function InfoBox({ children, profile, onClick }) {
    return (
        <Container onClick={onClick}>
            <Profile {...profile} />
            <div style={{ flex: 1, marginLeft: "1rem" }}>
                <Group>
                    {children[0]}
                </Group>
                <Group>
                    {children[1]}
                </Group>
            </div>
        </Container>
    )
}

export default InfoBox;