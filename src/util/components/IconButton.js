import styled, { css } from 'styled-components';

import {Main} from '../../common/Containers';

const Button = styled(Main).attrs({as: "div", flexEnabled: true, xAlign: "center", yAlign: "center"})`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
    transition-property: background-color, color, transform;
    background-color: ${({ theme, type }) => {
        switch (type) {
            case 3:
                return theme.primary;
            case 2:
                return theme.main[2];
            default:
                return "transparent";
        }
    }};

    //don't show hover and active effects if the disableEffects prop is false
    ${({ disableEffects }) =>
        !disableEffects && css`
            &:active{
                transform: scale(.9);
            }
        `
    }

    //select the correct icon color based on the given type
    i{
        font-size: 1.4rem;
        color: ${({ theme, type }) => type === 3 ? theme.primaryInner : theme.icon};
    }
`;

function IconButton({type, icon, disableEffects}){
    return(
        <Button type={type} disableEffects={disableEffects}>
            <i className="material-icons-outlined">{icon}</i>
        </Button>
    )
}

export default IconButton;