import React from 'react'
import { Container, Name } from './style'

export default function InstanceInfo(props: InstanceInfoProps) {
    return (
        <React.Fragment>
            <Container css={{ backgroundImage: `url(${props.banner})` }}>
                <Name>{props.name}</Name>
            </Container>
        </React.Fragment>
    )
}

export interface InstanceInfoProps {
    name: string
    banner: string
}
