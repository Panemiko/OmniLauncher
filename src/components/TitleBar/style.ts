import styled from 'styled-components'

export const Container = styled.header`
    position: absolute;

    height: 30px;
    width: 100%;
    
    display: grid;
    align-items: center;
    grid-template-columns: 135px auto 135px;
    grid-template-areas: 'MacOsActionsContainer WindowTitle DefaultActionsContainer';

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

export const ActionsContainer = styled.div<ActionsContainerProps>`
    height: 100%;
    ${props => { if (props.plataform === 'macos') return 'margin-left: 10px;' }}

    display: ${props => (props.hidden) ? 'none' : 'block'};
    grid-area: ${props => (props.plataform === 'macos')
        ? 'MacOsActionsContainer'
        : 'DefaultActionsContainer'
    };

    text-align: ${props => (props.plataform === 'macos') ? 'left' : 'right'};
`

export const MacOsAction = styled.button<MacOsActionProps>`
    height: 100%;
    width: 20px;

    background: none;
    border: none;
    
    svg {
        height: 12px;
        width: 12px;
        
        -webkit-app-region: none;
        
        fill: ${props => {
        if (props.action === 'close') return props.theme.red
        else if (props.action === 'minimize') return props.theme.yellow
        else return props.theme.green
    }};
    }
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

export interface ActionsContainerProps {
    plataform: 'macos' | 'default'
    hidden?: boolean
}

export interface MacOsActionProps {
    action: 'close' | 'minimize' | 'maximize'
}

export interface DefaultActionProps {
    hidden?: boolean
    isClose?: boolean
}
