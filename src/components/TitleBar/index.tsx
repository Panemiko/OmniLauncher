import React from 'react'
import { VscChromeMinimize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc'
import { Container, WindowTitle, DefaultActionsContainer, DefaultAction } from './style'

export default function TitleBar() {

    const win = window.api.window

    return (
        <Container>
            <WindowTitle>Omni Launcher</WindowTitle>
            <DefaultActionsContainer>
                <DefaultAction onClick={win.minimize}><VscChromeMinimize /></DefaultAction>
                <DefaultAction onClick={win.maximize}><VscChromeRestore /></DefaultAction>
                <DefaultAction isClose onClick={win.close}><VscChromeClose /></DefaultAction>
            </DefaultActionsContainer>
        </Container>
    )
}
