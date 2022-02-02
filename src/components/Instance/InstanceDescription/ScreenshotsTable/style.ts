import { styled } from '@stitches/react'

export const Container = styled('div', {
    height: '70%',

    padding: '20px'
})

export const ScreenshotsContainer = styled('div', {
    height: '100px',
    minHeight: '100%',

    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 145px)',
    gap: '10px',

    overflowY: 'auto'
})

export const Title = styled('h1', {
    marginBottom: '10px',

    color: '$text',
    fontWeight: 'normal',
    fontSize: '20px'
})
