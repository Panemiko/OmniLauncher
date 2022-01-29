import React from 'react'
import { Container } from './style'
import TitleBar from '../TitleBar'
import SelectionList from '../SelectionList'
import Instance from '../Instance'

export default function Display(props: DisplayProps) {
    return (
        <Container className={props.theme}>
            <TitleBar />
            <SelectionList />
            <Instance />
        </Container>
    )
}

export interface DisplayProps {
    theme: any
}
