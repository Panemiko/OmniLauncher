import React from 'react'
import {
    Container,
    Name,
    ActionsContainer,
    SettingsButton,
    SettingsButtonIcon,
    PlayButton,
    PlayButtonIcon
} from './style'

export default function InstanceInfo(props: InstanceInfoProps) {
    return (
        <React.Fragment>
            <Container css={{ backgroundImage: `url(${props.banner})` }}>
                <Name>{props.name}</Name>
                <ActionsContainer>
                    <SettingsButton><SettingsButtonIcon /></SettingsButton>
                    <PlayButton><PlayButtonIcon /></PlayButton>
                </ActionsContainer>
            </Container>
        </React.Fragment>
    )
}

export interface InstanceInfoProps {
    name: string
    banner: string
}
