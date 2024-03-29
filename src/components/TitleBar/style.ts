import { styled } from '@stitches/react'

export const Container = styled('header', {
    height: '30px',
    width: '100%',

    gridArea: 'TB',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '135px auto 135px',
    gridTemplateAreas: '\'MacOsActions WindowTitle DefaultActions\'',

    backgroundColor: '$primary',

    userSelect: 'none',
    appRegion: 'drag'
})

export const WindowTitle = styled('h1', {
    gridArea: 'WindowTitle',

    color: '$contrast',
    textAlign: 'center',
    fontSize: '12px'
})

export const ActionsContainer = styled('div', {
    height: '100%',

    variants: {
        plataform: {
            MacOs: {
                marginLeft: '10px',
                gridArea: 'MacOsActions',
                textAlign: 'left'
            },
            Default: {
                gridArea: 'DefaultActions',
                textAlign: 'right'
            }
        },
        hidden: {
            true: {
                display: 'none'
            },
            false: {
                display: 'block'
            }
        }
    },

    defaultVariants: {
        plataform: 'Default',
        hidden: true
    }
})

export const MacOsAction = styled('button', {
    height: '100%',
    width: '20px',

    background: 'none',
    border: 'none',

    '& svg': {
        height: '12px',
        width: '12px',

        appRegion: 'no-drag'
    },

    '& svg:hover': {
        filter: 'brightness(90%)'
    },

    variants: {
        action: {
            close: {
                '& svg': {
                    fill: '$red'
                }
            },
            minimize: {
                '& svg': {
                    fill: '$yellow'
                }
            },
            maximize: {
                '& svg': {
                    fill: '$green'
                }
            }
        }
    }
})

export const DefaultAction = styled('button', {
    height: '100%',
    width: '45px',

    background: 'none',
    border: 'none',

    appRegion: 'no-drag',

    '& svg': {
        height: '16px',
        width: '16px',

        fill: '$contrast'
    },

    '&:hover svg': {
        fill: '$text'
    },

    variants: {
        hidden: {
            true: {
                display: 'none'
            }
        },
        action: {
            close: {
                '&:hover': {
                    background: '$red'
                }
            },
            default: {
                '&:hover': {
                    background: '$secondary'
                }
            }
        }
    },

    defaultVariants: {
        action: 'default',
        hidden: false
    }
})
