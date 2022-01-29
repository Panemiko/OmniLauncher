import { styled } from '@stitches/react'

export const Container = styled('a', {
    height: '60px',
    width: '100%',

    display: 'flex',
    alignItems: 'center',

    textAlign: 'start',

    '&:hover': {
        backgroundColor: '$tertiary',
        cursor: 'pointer'
    },

    variants: {
        active: {
            true: {
                backgroundColor: '$tertiary'
            }
        }
    },

    defaultVariants: {
        active: false
    }
})

export const Icon = styled('img', {
    height: '40px',
    width: '40px',

    margin: '0 20px',

    borderRadius: '5px'
})

export const Name = styled('span', {
    color: '$text',
    fontSize: '17px',
    fontWeight: 'normal'
})
