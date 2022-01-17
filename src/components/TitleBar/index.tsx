import React from 'react'
import { VscChromeMinimize, VscChromeRestore, VscChromeClose } from 'react-icons/vsc'
import { Container, WindowTitle, IconsContainer, Icon } from './style'

export default function TitleBar() {

    const win = window.api.window

    return (
        <Container>
            <WindowTitle>Omni Launcher</WindowTitle>
            <IconsContainer>
                <Icon onClick={win.minimize}><VscChromeMinimize /></Icon>
                <Icon onClick={win.maximize}><VscChromeRestore /></Icon>
                <Icon onClick={win.close}><VscChromeClose /></Icon>
            </IconsContainer>
        </Container>
    )
}
