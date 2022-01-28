import React, { useEffect, useState } from 'react'
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
    const [isMacAction, setIsMacAction] = useState(false)
    const [isMax, setIsMax] = useState(false)

    electron.window.onMaximizeUpdate(updateDefaultMaximize)

    useEffect(() => {
        loadActionByPlataform()
        updateDefaultMaximize()
    }, [])

    async function maximizeUpdate() {
        if (await electron.window.isMaximized()) electron.window.unmaximize()
        else electron.window.maximize()
    }

    async function loadActionByPlataform() {
        const isMac = ((await electron.os.getPlataform()) === 'darwin')
        setIsMacAction(isMac)
    }

    async function updateDefaultMaximize() {
        const isMaximized = await electron.window.isMaximized()
        setIsMax(isMaximized)
    }

    return (
        <Container>
            <ActionsContainer hidden={!isMacAction} plataform="MacOs">
                <MacOsAction tabIndex={-1} action="close">
                    <VscCircleLargeFilled onClick={electron.window.close} />
                </MacOsAction>
                <MacOsAction tabIndex={-1} action="minimize">
                    <VscCircleLargeFilled onClick={electron.window.minimize} />
                </MacOsAction>
                <MacOsAction tabIndex={-1} action="maximize">
                    <VscCircleLargeFilled onClick={maximizeUpdate} />
                </MacOsAction>
            </ActionsContainer>
            <WindowTitle>Omni Launcher</WindowTitle>
            <ActionsContainer hidden={isMacAction} plataform="Default">
                <DefaultAction tabIndex={-1} onClick={electron.window.minimize}>
                    <VscChromeMinimize />
                </DefaultAction>
                <DefaultAction hidden={isMax} tabIndex={-1} onClick={electron.window.maximize}>
                    <VscChromeMaximize />
                </DefaultAction>
                <DefaultAction hidden={!isMax} tabIndex={-1} onClick={electron.window.unmaximize}>
                    <VscChromeRestore />
                </DefaultAction>
                <DefaultAction tabIndex={-1} action="close" onClick={electron.window.close}>
                    <VscChromeClose />
                </DefaultAction>
            </ActionsContainer>
        </Container>
    )
}
