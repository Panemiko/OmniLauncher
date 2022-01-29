import React from 'react'
import { Container } from './style'
import InstanceImage from '../InstanceImage'
import InstanceDescription from '../InstanceDescription'

export default function Instance() {
    return (
        <Container>
            <InstanceImage />
            <InstanceDescription />
        </Container>
    )
}
