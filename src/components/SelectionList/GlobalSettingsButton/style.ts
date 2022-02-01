import { styled } from '@stitches/react'
import { MdSettings } from 'react-icons/md'

export const Container = styled('div', {
    height: '70px',
    width: '100%',

    padding: '0 20px',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&:hover': {
        background: '$tertiary',
        cursor: 'pointer'
    }
})

export const AccountContainer = styled('a', {
    display: 'flex',
    alignItems: 'center'
})

export const Avatar = styled('img', {
    height: '42px',
    width: '42px',

    marginRight: '20px',

    borderRadius: '10px',

    pointerEvents: 'none'
})

export const UsernameContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    textAlign: 'left',

    userSelect: 'none'
})

export const Username = styled('span', {
    color: '$text',
    fontSize: '18px',
    fontWeight: 'normal'
})

export const AccountType = styled('span', {
    color: '$contrast',
    fontSize: '14px'
})

export const SettingsContainer = styled('a', {
    height: '32px',
    width: '32px',

    padding: '3px',

    '&:hover svg': {
        fill: '$text'
    }
})

export const SettingsIcon = styled(MdSettings, {
    height: '26px',
    width: '26px',

    fill: '$contrast'
})
