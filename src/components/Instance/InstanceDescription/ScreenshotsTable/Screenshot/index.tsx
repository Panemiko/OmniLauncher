import React from 'react'
import { Container, Date, Preview } from './style'

export default function Screenshot(props: ScreenshotProps) {
    return (
        <Container>
            <Preview src="https://i.imgur.com/z26ZOUY.png" />
            <Date>{props.name}</Date>
        </Container>
    )
}

export interface ScreenshotProps {
    name: string
}
