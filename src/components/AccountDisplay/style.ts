import { styled } from '@stitches/react'

export const Container = styled('button', {
    height: '80px',
    width: '100%',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    background: 'none',
    border: 'none',
    userSelect: 'none',

    '&:hover': {
        backgroundColor: '$dark',
        cursor: 'pointer'
    }
})

export const Avatar = styled('img', {
    height: '42px',
    width: '42px',
    margin: '10px 20px',

    borderRadius: '10px',

    pointerEvents: 'none'
})

export const UsernameContainer = styled('div', {
    textDecoration: 'none',
    textAlign: 'left'
})

export const Username = styled('h1', {
    color: '$text',
    fontSize: '18px'
})

export const AccountType = styled('h2', {
    color: '$contrast',
    fontSize: '14px'
})
