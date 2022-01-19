import React from 'react'
import { VscChromeMinimize, VscChromeMaximize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc'
import { Container, WindowTitle, DefaultActionsContainer, DefaultAction } from './style'
import useElectron from '../../hooks/useElectron'
import useEventListener from '../../hooks/useEventListener'

export default function TitleBar() {

    const electron = useElectron()

    return (
        <Container>
            <WindowTitle>Omni Launcher</WindowTitle>
            <DefaultActionsContainer>
                <DefaultAction tabIndex={-1} onClick={electron.window.minimize}><VscChromeMinimize /></DefaultAction>
                <DefaultAction tabIndex={-1} onClick={electron.window.maximize}><VscChromeMaximize /></DefaultAction>
                <DefaultAction tabIndex={-1} isClose onClick={electron.window.close}><VscChromeClose /></DefaultAction>
            </DefaultActionsContainer>
        </Container>
    )
}
