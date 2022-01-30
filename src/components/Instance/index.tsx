import React from 'react'
import { Container } from './style'
import InstanceImage from '../InstanceImage'
import InstanceDescription from '../InstanceDescription'

export default function Instance() {
    return (
        <Container>
            <InstanceImage name='Instance Name' banner='https://i.imgur.com/z26ZOUY.png' />
            <InstanceDescription />
        </Container>
    )
}
