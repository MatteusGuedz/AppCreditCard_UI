import styled from 'styled-components/native';


export const Container = styled.View`
        width: ${({width}) => width ? width : '100%'};
    background-color: #bdbdbd50;
    border-radius: 8px;
    height: 60px;
    margin-top: 14px;

`;

export const TextInput = styled.TextInput``;
