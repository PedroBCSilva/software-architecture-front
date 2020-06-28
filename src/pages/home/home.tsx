import React from 'react'

import { Header, WorkingProgress } from '../../components/index';
import { Container } from './style';

export default function HomePage() {
    return (
        <Container>
            <Header />
            <WorkingProgress />
        </Container>
    )
}