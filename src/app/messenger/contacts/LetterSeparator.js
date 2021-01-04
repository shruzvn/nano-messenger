import styled from 'styled-components';

const Container = styled.div`
    padding: 1rem 1.5rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.main[0]};
    color: ${({ theme }) => theme.primary};
    transition-property: background-color, color;
    transition-duration: 200ms;
    &:active{
        background-color: ${({ theme }) => theme.main[1]};
    }
`;

function LetterSeparator({ letter }) {
    return (
        <Container>
            <h3>
                {letter}
            </h3>
        </Container>
    )
}

export default LetterSeparator;