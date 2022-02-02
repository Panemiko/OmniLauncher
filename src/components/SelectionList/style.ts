import { styled } from '@stitches/react'

export const Container = styled('div', {
    gridArea: 'SL',

    backgroundColor: '$secondary'
})

export const InstancesContainer = styled('div', {
    height: '100px',
    minHeight: '100%',
    width: '100%',

    overflowY: 'hidden',

    '&:hover': {
        overflow: 'auto'
    }
})

export const InstanceSeparator = styled('h1', {
    margin: '10px 0',

    color: '$contrast',
    fontSize: '16px',
    textAlign: 'center'
})

export const SeparatorLine = styled('hr', {
    border: '1px solid $contrast'
})
