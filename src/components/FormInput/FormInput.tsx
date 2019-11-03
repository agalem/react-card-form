import React from "react";
import styled from "styled-components";

const Container = styled.div`

`;

const Label = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
    color: #1a3b5d;
    width: 100%;
    display: block;
    user-select: none;
`;

const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    padding: 5px 15px;
    background: none;
    color: #1a3b5d;
    font-family: "Source Sans Pro", sans-serif;
`;

//TODO add input validation -> only numbers and space every 4 number,
//TODO max length 16

const FormInput: React.FC = () => {
    return (
        <Container>
            <Label>Card Number</Label>
            <Input type="text"/>
        </Container>
    )
};

export default FormInput;