import React from 'react'
import { Container, InstancesContainer, InstanceSeparator } from './style'
import GlobalSettingsButton from '../GlobalSettingsButton'
import InstanceSelection from '../InstanceSelection'

export default function SelectionList() {
    return (
        <Container>
            <GlobalSettingsButton />
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
