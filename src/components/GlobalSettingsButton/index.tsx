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

export default function GlobalSettingsButton() {
    return (
        <Container>
            <AccountContainer>
                <Avatar src="https://i.imgur.com/z26ZOUY.png" />
                <UsernameContainer>
                    <Username>Username</Username>
                    <AccountType>Mojang Account</AccountType>
                </UsernameContainer>
            </AccountContainer>
            <SettingsContainer>
                <SettingsIcon />
            </SettingsContainer>
        </Container>
    )
}
