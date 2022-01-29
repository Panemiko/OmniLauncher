import React from 'react'
import globalStyle from './style/Global'
import Theme from './style/Theme'
import Display from './components/Display'

export default function App() {
    globalStyle()

    return (
        <Display theme={Theme} />
    )
}
