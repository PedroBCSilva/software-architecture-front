import React from 'react';
import { Container, Title, LinksContainer } from './style';
import { HeaderLinks, LoggedUserHeaderLinks, LinkType } from './header-links';
import { Link } from 'react-router-dom'
import * as map from './header-map'
import { connect } from 'react-redux'
import { User } from '../../../types/user'

const renderLinks = function (links: LinkType[]) {
    return links.map((link, index) => {
        return <Link className="link-style" to={link.link} key={index}>{link.name}</Link>
    })
}

interface HeaderProps {
    loggedUser: User
}

function Header(props: HeaderProps): JSX.Element {
    const links = props.loggedUser ? LoggedUserHeaderLinks : HeaderLinks
    return (
        <Container>
            <Title>Seja bem vindo a Nutrição ABC</Title>
            <LinksContainer>
                {renderLinks(links)}
            </LinksContainer>
        </Container>
    )
}

export default connect(map.mapStateToProps, map.mapActionsToProps)(Header)