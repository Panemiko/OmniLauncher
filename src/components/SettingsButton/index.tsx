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
                <Avatar src="https://cdn.discordapp.com/attachments/860285578875502593/936464116414042163/placeholder.png" />
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
