import { styled } from '@stitches/react'
import { IoMdSettings } from 'react-icons/io'

export const BaseButton = styled('button', {
    height: '100%',

    background: 'none',
    border: 'none',

    '&:hover': {
        backgroundColor: '$tertiary',
        cursor: 'pointer'
    }
})

export const Container = styled('div', {
    height: '70px',
    width: '100%',

    display: 'flex'
})

export const AccountContainer = styled(BaseButton, {
    width: 'calc(100% - 70px)',

    display: 'flex',
    alignItems: 'center'
})

export const Avatar = styled('img', {
    height: '42px',
    width: '42px',
    margin: '10px 20px',

    borderRadius: '10px',

    pointerEvents: 'none'
})

export const UsernameContainer = styled('div', {
    height: 'fit-content',
    width: 'calc(100% - 42px)',

    textAlign: 'left',

    userSelect: 'none'
})

export const Username = styled('h1', {
    color: '$text',
    fontSize: '18px',
    fontWeight: 'normal'
})

export const AccountType = styled('h2', {
    color: '$contrast',
    fontSize: '14px'
})

export const SettingsContainer = styled(BaseButton, {
    width: '70px'
})

export const SettingsIcon = styled(IoMdSettings, {
    height: '30px',
    width: '30px',
    margin: 'auto',

    fill: '$text'
})
