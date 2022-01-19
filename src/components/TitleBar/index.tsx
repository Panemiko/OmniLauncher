import React from 'react'
import { VscChromeMinimize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc'
import { Container, WindowTitle, DefaultActionsContainer, DefaultActions } from './style'

export default function TitleBar() {

    const win = window.api.window

    return (
        <Container>
            <WindowTitle>Omni Launcher</WindowTitle>
            <DefaultActionsContainer>
                <DefaultActions onClick={win.minimize}><VscChromeMinimize /></DefaultActions>
                <DefaultActions onClick={win.maximize}><VscChromeRestore /></DefaultActions>
                <DefaultActions onClick={win.close}><VscChromeClose /></DefaultActions>
            </DefaultActionsContainer>
        </Container>
    )
}
