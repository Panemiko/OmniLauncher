import React from 'react'
import { Container, WindowTitle } from './style'

export default function TitleBar() {

    function close() {
        console.log('closing')
        window.main.window.close()
    }

    return (
        <>
            <Container>
                <WindowTitle>Omni Launcher</WindowTitle>
            </Container>
            <button onClick={close}>aaaaa</button>
        </>
    )
}
