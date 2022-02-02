import { styled } from '@stitches/react'

export const Container = styled('a', {
    width: '145px',

    padding: '8px',
    margin: '10px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    textAlign: 'center',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '$contrast'
    },

    '&:visited': {
        backgroundColor: '$contrast'
    }
})

export const Date = styled('span', {
    color: '$text',
    fontSize: '13px',

    wordBreak: 'break-word'
})

export const Preview = styled('img', {
    marginBottom: '10px',
    width: '130px'
})
