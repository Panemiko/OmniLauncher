import React from 'react'
import { Container, Avatar, UsernameContainer, Username, AccountType } from './style'

export default function AccountDisplay() {
    return (
        <Container>
            <Avatar src="avatar" />
            <UsernameContainer>
                <Username>Panemiko</Username>
                <AccountType>Mojang Account</AccountType>
            </UsernameContainer>
        </Container>
    )
}
