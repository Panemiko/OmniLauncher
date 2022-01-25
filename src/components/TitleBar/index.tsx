import React, { useEffect } from 'react'
import {
    VscCircleLargeFilled,
    VscChromeMinimize,
    VscChromeMaximize,
    VscChromeRestore,
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

    async function handleMaximizeMac() {
        if (await electron.window.isMaximized()) electron.window.unmaximize()
        else electron.window.maximize()
    }

    useEffect(() => {

        loadActionPlataform()

        async function loadActionPlataform() {
            const plataform = await electron.os.getPlataform()
            console.log(`Detected plataform: ${plataform}`)

            const macActions = document.getElementById('macActions') as HTMLElement
            const defaultActions = document.getElementById('defaultActions') as HTMLElement

            if (plataform === 'darwin') {
                macActions.hidden = false
                defaultActions.hidden = true
            }
        }
    })

    return (
        <Container>
            <ActionsContainer hidden id="macActions" plataform="macos">
                <MacOsAction tabIndex={-1} action="close"><VscCircleLargeFilled onClick={electron.window.close} /></MacOsAction>
                <MacOsAction tabIndex={-1} action="minimize"><VscCircleLargeFilled onClick={electron.window.minimize} /></MacOsAction>
                <MacOsAction tabIndex={-1} action="maximize"><VscCircleLargeFilled onClick={handleMaximizeMac} /></MacOsAction>
            </ActionsContainer>
            <WindowTitle>Omni Launcher</WindowTitle>
            <ActionsContainer id="defaultActions" plataform="default">
                <DefaultAction tabIndex={-1} onClick={electron.window.minimize}><VscChromeMinimize /></DefaultAction>
                <DefaultAction tabIndex={-1} onClick={electron.window.maximize}><VscChromeMaximize /></DefaultAction>
                <DefaultAction tabIndex={-1} isClose onClick={electron.window.close}><VscChromeClose /></DefaultAction>
            </ActionsContainer>
        </Container>
    )
}
