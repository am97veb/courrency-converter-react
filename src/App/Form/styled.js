import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10% auto;
    max-width: 600px; 
    padding: 20px;
`;

export const FormFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: rgb(234, 233, 233);
    box-shadow: 5px 5px 14px -3px #000000;
    padding: 0 30px 20px;
`; 

export const FormLegend = styled.legend`
    background-color: black;
    border-radius: 10px;
    padding: 10px;
    color: whitesmoke;
`;

export const LabelText = styled.span`
    width: 200px;
    display: inline-block;
`;

export const FormField = styled.select`
    border-radius: 10px;
    width: 200px;
    padding: 5px;
`;
