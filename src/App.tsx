import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/Global'
import Theme from './style/Theme'

export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <h1>Hello World</h1>
        </ThemeProvider>
    )
}
