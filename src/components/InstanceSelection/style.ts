import { styled } from '@stitches/react'

export const Container = styled('button', {
    height: '60px',
    width: '100%',

    display: 'flex',
    alignItems: 'center',

    background: 'none',
    border: 'none',

    textAlign: 'start',

    '&:hover': {
        backgroundColor: '$dark',
        cursor: 'pointer'
    }
})

export const Icon = styled('img', {
    height: '50px',
    width: '50px',
    margin: '0 17px',

    borderRadius: '5px'
})

export const Name = styled('h1', {
    fontSize: '17px',
    color: '$text',
    fontWeight: 'normal'
})
