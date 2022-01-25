import React from 'react'
import globalStyle from './style/Global'
import TitleBar from './components/TitleBar'

export default function App() {
    globalStyle()

    return (
        <TitleBar />
    )
}
