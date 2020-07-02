import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;
`

export const RegisterButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

export const ReturnToLoginLink = styled.a`
    background-color: #629DD1;
    border: none;
    color: white;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;