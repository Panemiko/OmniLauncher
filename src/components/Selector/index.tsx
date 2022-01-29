import React from 'react'
import { Container, InstancesContainer, InstanceSeparator } from './style'
import SettingsButton from '../SettingsButton'
import InstanceSelection from '../InstanceSelection'

export default function Selector() {
    return (
        <Container>
            <SettingsButton />
            <InstanceSeparator>Instances</InstanceSeparator>
            <InstancesContainer>
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
                <InstanceSelection icon="https://i.imgur.com/z26ZOUY.png" name="Instance Name" />
            </InstancesContainer>
        </Container>
    )
}
