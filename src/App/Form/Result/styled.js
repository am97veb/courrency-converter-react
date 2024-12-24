import styled from "styled-components";

export const ResultText = styled.span`
    margin: 0 5px 0 10px;
`;

export const Button = styled.button`
    background-color: black;
    color: whitesmoke;
    border-radius: 10px;
    padding: 10px;
    margin-top: 15px;
    font-weight: bold;
    border: none;

    &:hover {
    background-color: rgb(45, 45, 45);
    }

    &:active {
    background-color: rgb(97, 97, 97);
    }
`;