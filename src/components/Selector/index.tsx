import React from 'react'
import { Container, InstanceSeparator, SeparatorLine } from './style'
import SettingsButton from '../SettingsButton'
import InstanceSelection from '../InstanceSelection'

export default function Selector() {
    return (
        <Container>
            <SettingsButton />
            <InstanceSeparator>Instances</InstanceSeparator>
            <InstanceSelection
                icon="https://cdn.discordapp.com/attachments/860285578875502593/936464116414042163/placeholder.png"
                name="Minecraft 1.16.5"
            />
        </Container>
    )
}
