import { globalCss } from '@stitches/react'

const globalStyle = globalCss({
    '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
    body: { fontFamily: 'Arial, Helvetica, sans-serif' }
})

export default globalStyle
