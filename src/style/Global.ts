import { globalCss } from '@stitches/react'

const globalStyle = globalCss({
    '*': {
        margin: 0,
        padding: 0,

        boxSizing: 'border-box',

        '&::-webkit-scrollbar': {
            width: '5px'
        },

        '&::-webkit-scrollbar-track': {
            backgroundColor: 'none'
        },

        '&::-webkit-scrollbar-thumb': {
            background: '$contrast'
        }
    },

    body: {
        fontFamily: 'Arial, Helvetica, sans-serif',

        overflow: 'hidden'
    }
})

export default globalStyle
