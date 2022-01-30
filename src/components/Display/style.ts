import { styled } from '@stitches/react'

/**
 * TB - TittleBar
 * SL - SelectionList
 * I - Instance
 */

export const Container = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'minmax(250px, 350px) auto',
    gridTemplateRows: '30px 40vh calc(60vh - 30px)',
    gridTemplateAreas: '\'TB TB\' \'SL I\' \'SL I\''
})
