import { styled } from '@stitches/react'
import { MdPlayArrow, MdSettings } from 'react-icons/md'

export const Container = styled('div', {
    width: '100%',

    padding: '18px',

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    backgroundColor: '$tertiary',
    backgroundSize: '100% 100%',
    boxShadow: '0px -250px 80px -150px rgba(0,0,0,0.50) inset',

    aspectRatio: '8 / 3'
})

export const Name = styled('h1', {
    color: '$text',
    fontWeight: 'normal'
})

export const ActionsContainer = styled('div', {})

export const SettingsButton = styled('button', {
    height: '40px',
    width: '40px',

    padding: 'auto',
    marginRight: '12px',

    background: 'none',
    border: 'none',
    borderRadius: '50%',

    '&:hover svg': {
        filter: 'brightness(80%)',
        cursor: 'pointer'
    }
})

export const SettingsButtonIcon = styled(MdSettings, {
    height: '35px',
    width: '35px',

    fill: '$text'
})

export const PlayButton = styled('button', {
    height: '45px',
    width: '45px',

    backgroundColor: '$green',
    border: 'none',
    borderRadius: '50%',

    '&:hover': {
        filter: 'brightness(90%)',
        cursor: 'pointer'
    }
})

export const PlayButtonIcon = styled(MdPlayArrow, {
    height: '40px',
    width: '40px',

    fill: '$text'
})
