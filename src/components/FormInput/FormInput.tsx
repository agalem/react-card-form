import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";

const Container = styled.div`
    width: 100%;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #1a3b5d;
    width: 100%;
    display: block;
    user-select: none;
`;

const LabelText = styled.span`
    display: inline-block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    max-width: 100% !important;
    width: calc(100% - 32px);
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

type FormInputProps = {
    readonly type?: string,
}

const FormInput = (props: FormInputProps) => {
    const [data, dispatch]: any = useStateValue();

    const handleChange = (e: any) => {

        let newCardNumber = e.target.value.replace(/\s/g, '');

        if(newCardNumber.length > 16) {
            console.log("Za długi input");
            e.target.value = e.target.value.slice(0, 16);
            newCardNumber = e.target.value;
        }

        if(isNaN(newCardNumber)) {
            console.log("Is not a number");
            return;
        }

        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

        //send data to react context
        dispatch({
            type: 'changeCardNumber',
            newCardNumber
        });
    };

    return (
        <Container>
            <Label>
                <LabelText>Card Number</LabelText>
                <Input type="text" onChange={e => handleChange(e)} maxLength={19}/>
            </Label>
        </Container>
    )
};

export default FormInput;