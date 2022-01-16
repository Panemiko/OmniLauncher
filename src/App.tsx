import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/Global'
import Theme from './style/Theme'
import TitleBar from './components/TitleBar'

export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <TitleBar />
        </ThemeProvider>
    )
}
