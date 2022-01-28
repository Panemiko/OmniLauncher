import React from 'react'
import { Container, Icon, Name } from './style'

export default function InstanceSelection(props: InstanceSelectionProps) {
    return (
        <Container>
            <Icon src={props.icon} />
            <Name>{props.name}</Name>
        </Container>
    )
}

export interface InstanceSelectionProps {
    icon: string
    name: string
}
