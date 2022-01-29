import { styled } from '@stitches/react'

/**
 * TB - TittleBar
 * SL - SelectionList
 * II - InstanceImage
 * ID - InstanceDescription
 */

export const Container = styled('div', {
    display: 'grid',
    gridTemplateColumns: '35% auto',
    gridTemplateRows: '30px 40% auto',
    gridTemplateAreas: '\'TB TB\' \'SL II\' \'SL ID\''
})
