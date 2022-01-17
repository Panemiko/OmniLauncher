import styled from 'styled-components'

export const Container = styled.header`
    position: absolute;

    height: 30px;
    width: 100%;
    
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: '- WindowTitle IconsContainer';

    background: ${props => props.theme.darkest};

    -webkit-user-select: none; 
    -webkit-app-region: drag;
`

export const WindowTitle = styled.h1`
    grid-area: WindowTitle;

    color: ${props => props.theme.comment};
    text-align: center;
    font-size: 12px;
`

export const IconsContainer = styled.div`
    height: 100%;
    
    grid-area: IconsContainer;

    text-align: right;
`

export const Icon = styled.button`
    height: 100%;
    width: 35px;

    background: none;
    border: none;
    color: ${props => props.theme.comment};

    -webkit-app-region: none;

    :hover {
        background: ${props => props.theme.darker};
    }
`
