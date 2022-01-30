import React from 'react'
import { Container, Banner, Name } from './style'

export default function InstanceInfo(props: InstanceInfoProps) {
    return (
        <Container>
            <Banner src={props.banner} />
            <Name>{props.name}</Name>
        </Container>
    )
}

export interface InstanceInfoProps {
    name: string
    banner: string
}
