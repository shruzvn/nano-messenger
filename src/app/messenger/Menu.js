import styled from 'styled-components';

import { Main } from '../../common/Containers';
import IconButton from '../../util/components/IconButton';

const Container = styled(Main).attrs({ as: "menu", flexEnabled: true, borderDirection: "down" })`
    padding: 1.4rem;
`;

const RightGroup = styled(Main).attrs({ as: "div", flexEnabled: true })`
    margin-left: auto;
    div:first-of-type{
        margin-right: 1rem;
    }
`;

function Menu() {
    return (
        <Container>
            <RightGroup>
                <IconButton icon="power_settings_new" type={1}/>
                <IconButton icon="dark_mode" type={2}/>
            </RightGroup>
        </Container>
    )
}

export default Menu;