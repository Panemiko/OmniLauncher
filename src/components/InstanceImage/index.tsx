import React from 'react'
import { Container, Banner, Name } from './style'

export default function InstanceImage(props: InstanceImageProps) {
    return (
        <Container>
            <Banner src={props.banner}/>
            <Name>{props.name}</Name>
        </Container>
    )
}

export interface InstanceImageProps {
    name: string
banner: string
}
