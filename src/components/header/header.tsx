import React from 'react';
import { Container, Title, LinksContainer, Link } from './style';
import { HeaderLinks } from './header-links';

const renderLinks = function () {
    return HeaderLinks.map((link, index) =>{
    return <Link href={link.link} key={index}>{link.name}</Link>
    })
}

export default function Header(): JSX.Element {
    return (
        <Container>
            <Title>Seja bem vindo a Nutrição ABC</Title>
            <LinksContainer>
                {renderLinks()}
            </LinksContainer>
        </Container>
    )
}