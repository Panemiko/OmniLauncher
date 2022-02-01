import { styled } from '@stitches/react'
import { MdPlayArrow } from 'react-icons/md'

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
    color: '$text'
})

export const ActionsContainer = styled('div', {

})

export const PlayButton = styled('button', {
    height: '45px',
    width: '45px',

    marginRight: '10px',

    backgroundColor: '$green',
    border: 'none',
    borderRadius: '50%',

    '&:hover': {
        filter: 'brightness(110%)',
        cursor: 'pointer'
    }
})

export const PlayButtonIcon = styled(MdPlayArrow, {
    height: '20px',
    width: '20px',

    fill: '$text'
})
