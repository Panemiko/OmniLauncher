import styled from 'styled-components'

export const Container = styled.header`
    height: 30px;
    width: 100%;
    background: ${props => props.theme.background};
    -webkit-user-select: none;
    -webkit-app-region: drag;
`

export const WindowTitle = styled.h1`
    color: ${props => props.theme.comment};
    text-align: center;
    font-size: 16px;
    margin: auto;
`
