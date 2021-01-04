import styled, { css } from 'styled-components';

const Container = styled.div`
    position: relative;
    height: 100%;
`;

const ScrollContainer = styled(Container)`
    ${({ searchbar }) => searchbar && css`
        padding-top: 6.6rem;
    `}
`;

const SearchContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
`;

const Searchbar = styled.div`
    padding: 1.5rem 1.5rem 0;
    background-color: ${({ theme }) => theme.main[0]};
    box-shadow: 0 .5rem 1rem ${({ theme }) => theme.main[0]};
    transition-property: box-shadow, background-color;
    transition-duration: 200ms;
    position: relative;
    width: 100%;
    i{
        transition: color 200ms;
        position: absolute;
        left: 2.5rem;
        bottom: 1.05rem;
        font-size: 1.3rem;
        color: ${({ theme }) => theme.text[2]};
    }
`;

const SearchInput = styled.input`
    border-radius: 0.7rem;
    width: 100%;
    padding: 1.2rem 1.2rem 1.2rem 3rem;
    background-color: ${({ theme }) => theme.main[1]};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text[0]};
    transition-property: color, background-color;
    transition-duration: 200ms;
    &::placeholder{
        color: ${({ theme }) => theme.text[2]};
    }
    &:focus{
        background-color: ${({ theme }) => theme.main[2]};
    }
`;

function Scrollbar({ children, searchbar }) {
    return (
        <Container>
            <ScrollContainer searchbar={searchbar}>
                {children}
            </ScrollContainer>
            {searchbar &&
                <SearchContainer>
                    <Searchbar>
                        <SearchInput placeholder={"Search in " + searchbar + "..."} />
                        <i className="material-icons-outlined">search</i>
                    </Searchbar>
                </SearchContainer>
            }
        </Container>
    )
}

export default Scrollbar;