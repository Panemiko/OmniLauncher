import React from 'react'
import {
    VscCircleLargeFilled,
    VscChromeMinimize,
    VscChromeMaximize,
    VscChromeClose
} from 'react-icons/vsc'
import {
    Container,
    WindowTitle,
    ActionsContainer,
    MacOsAction,
    DefaultAction
} from './style'
import useElectron from '../../hooks/useElectron'

export default function TitleBar() {

    const electron = useElectron()

    return (
        <Container>
            <ActionsContainer plataform="MacOs">
                <MacOsAction tabIndex={-1} action="close"><VscCircleLargeFilled onClick={electron.window.close} /></MacOsAction>
                <MacOsAction tabIndex={-1} action="minimize"><VscCircleLargeFilled onClick={electron.window.minimize} /></MacOsAction>
                <MacOsAction tabIndex={-1} action="maximize"><VscCircleLargeFilled /></MacOsAction>
            </ActionsContainer>
            <WindowTitle>Omni Launcher</WindowTitle>
            <ActionsContainer plataform="Default">
                <DefaultAction tabIndex={-1} onClick={electron.window.minimize}><VscChromeMinimize /></DefaultAction>
                <DefaultAction tabIndex={-1} onClick={electron.window.maximize}><VscChromeMaximize /></DefaultAction>
                <DefaultAction tabIndex={-1} action="close" onClick={electron.window.close}><VscChromeClose /></DefaultAction>
            </ActionsContainer>
        </Container>
    )
}
