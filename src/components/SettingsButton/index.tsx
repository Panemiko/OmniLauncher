import React from 'react'
import {
    Container,
    AccountContainer,
    Avatar,
    UsernameContainer,
    Username,
    AccountType,
    SettingsContainer,
    SettingsIcon
} from './style'

export default function SettingsButton() {
    return (
        <Container>
            <AccountContainer>
                <Avatar src="https://cdn.discordapp.com/avatars/474312756451868673/44ed5236543d1b367c237e2adcc8af77.png?size=2048" />
                <UsernameContainer>
                    <Username>Panemiko</Username>
                    <AccountType>Mojang Account</AccountType>
                </UsernameContainer>
            </AccountContainer>
            <SettingsContainer>
                <SettingsIcon />
            </SettingsContainer>
        </Container>
    )
}
