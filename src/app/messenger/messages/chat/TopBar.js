import styled from 'styled-components';

import InfoBox from '../../../../util/components/InfoBox';
import { Main as Container } from '../../../../common/Containers';

const GroupIcon = styled.i.attrs({ className: "material-icons-outlined" })`
    margin-right: .5rem;
    font-size: 1.2rem;
    color: ${({theme})=> theme.text[1]};
    transition: 200ms color;
`;

function TopBar({isGroup, name, bottom, online, backEnabled, onBack, profile}) {
    return (
        <Container as="div" borderDirection="down" >
            <InfoBox profile={profile} backEnabled={backEnabled} onBack={onBack} disableSwip>
                <>
                    {isGroup && <GroupIcon>group</GroupIcon>}
                    <h4>{name}</h4>
                </>
                <p>{bottom}</p>
            </InfoBox>
        </Container>
    )
}

export default TopBar;