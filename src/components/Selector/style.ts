import { styled } from '@stitches/react'

export const Container = styled('div', {
    width: '35%',
    maxWidth: '450px',
    minHeight: 'calc(100vh - 30px)',

    backgroundColor: '$darker'
})

export const InstanceSeparator = styled('h1', {
    margin: '10px 0',

    color: '$contrast',
    fontSize: '16px',
    textAlign: 'center'
})

export const SeparatorLine = styled('hr', {
    margin: '10px 15px',

    border: '1px solid $contrast'
})
