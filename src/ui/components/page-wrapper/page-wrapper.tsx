import React from 'react'
import { Container } from './style'
import { Header } from '../index'

export default function PageWrapper(props: any): JSX.Element {
    return (
        <Container>
            <Header />
            {props.children}
        </Container>
    )
}