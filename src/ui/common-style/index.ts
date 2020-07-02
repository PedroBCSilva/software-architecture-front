import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: white;
    background: white;
    padding: 5px 10px;
`;

export const FormTitle = styled.h5`
    font-size: 30px;
    margin: 0;
`;

export const FormLabel = styled.label`
    display: block;
    margin: 5px 0px;
`;

export const FormInput = styled.input`
    display: block;
    margin: 5px 0px;
    width: 100%;
    height: 30px;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
`;