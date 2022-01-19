import styled from 'styled-components'

export const Container = styled.header`
    position: absolute;

    height: 30px;
    width: 100%;
    
    display: grid;
    align-items: center;
    grid-template-columns: 135px auto 135px;
    grid-template-areas: '- WindowTitle DefaultActionsContainer';

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

export const DefaultActionsContainer = styled.div`
    height: 100%;
    
    grid-area: DefaultActionsContainer;

    text-align: right;
`

export const DefaultAction = styled.button<DefaultActionProps>`
    height: 100%;
    width: 45px;

    display: ${props => (props.hidden) ? 'none' : ''};

    background: none;
    border: none;

    -webkit-app-region: none;

    svg {
        height: 16px;
        width: 16px;

        fill: ${props => props.theme.comment};
    }

    &:hover {
        svg {
            fill: ${props => props.theme.foreground};
        }

        background: ${props => (props.isClose) ? props.theme.red : props.theme.darker};
    }
`

export interface DefaultActionProps {
    hidden?: boolean
    isClose?: boolean
}
