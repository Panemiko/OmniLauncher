import { styled } from '@stitches/react'

export const Container = styled('div', {
    width: '100%',

    padding: '18px',

    display: 'flex',
    alignItems: 'flex-end',

    backgroundColor: '$tertiary',
    backgroundSize: '100% 100%',

    aspectRatio: '8 / 3'
})

export const Name = styled('h1', {
    color: '$text'
})
