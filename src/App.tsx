import React from 'react'
import globalStyle from './style/Global'
import Theme from './style/Theme'
import TitleBar from './components/TitleBar'

export default function App() {
    globalStyle()

    return (
        <div className={Theme}>
            <TitleBar />
        </div>
    )
}
