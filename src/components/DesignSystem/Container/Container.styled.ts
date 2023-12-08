import styled from 'styled-components';

export const StyledMain = styled.main`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const StyledContainer = styled.div`
    background-color: #F7F7F8;
    flex: 1 1 0%;
`

export const StyledContain = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 0 16px;
    @media (min-width: 768px) { 
        gap: 32px;
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 768px) { 
        max-width: 768px;
    }

    @media (min-width: 820px) { 
        max-width: 820px;
    }

    @media (min-width: 1024px) { 
        max-width: 1024px;
    }

    @media (min-width: 1120px) { 
        max-width: 1120px;
    }
`