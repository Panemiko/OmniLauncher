import React from 'react'
import { Container } from './style'
import InstanceInfo from './InstanceInfo'
import InstanceDescription from './InstanceDescription'

export default function Instance() {
    return (
        <Container>
            <InstanceInfo name='Instance Name' banner='https://i.imgur.com/z26ZOUY.png' />
            <InstanceDescription />
        </Container>
    )
}
