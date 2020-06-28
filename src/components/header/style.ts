import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100%;
    height: 40px;
    padding: 0px 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.p`
    color: #629DD1;
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
`;

export const Link = styled.a`
    transition: color 0.2s ease-in-out;
    color: #555f66;
    display: inline-block;
    text-decoration: none;
    &:hover {
        color: #629DD1;
    }
`