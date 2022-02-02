import React from 'react'
import { Container, Icon, Name } from './style'

export default function InstanceSelection(props: InstanceSelectionProps) {
    return (
        <Container tabIndex={0} active={props.active}>
            <Icon src={props.icon} />
            <Name>{props.name}</Name>
        </Container>
    )
}

export interface InstanceSelectionProps {
    icon: string
    name: string
    active?: boolean
}
