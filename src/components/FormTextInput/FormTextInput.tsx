import React, { useState } from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";
import { CARD_TYPES } from "../../utils/cardTypes";

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
    margin-bottom: 20px;
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

type FormTextInputProps = {
    readonly type: string,
    readonly label: string,
    readonly maxLength?: number
}

const FormTextInput = (props: FormTextInputProps) => {
    const [maxLength, setMaxLength] = useState(props.maxLength ? props.maxLength : 16);
    const [{cardCompany}, dispatch]: any = useStateValue();
    const {type, label} = props;

    const handleChange = (e: any): void => {
        if (type === 'CardNumber') {
            handleCardNumber(e);
        } else if (type === 'CardName') {
            handleCardName(e);
        } else if (type === 'CardCVV') {
            handleCardCvv(e);
        }
    };

    const handleCardCvv = (e:any): void => {
        console.log("Card CVV");
    };

    const showCardBack = () => {
        if (type === 'CardCVV') {
            dispatch({
                type: 'setBackVisible',
                isBackVisible: true
            })
        }
    };

    const hideCardBack = () => {
        if (type === 'CardCVV') {
            dispatch({
                type: 'setBackVisible',
                isBackVisible: false
            })
        }
    };

    const handleCardName = (e: any): void => {
        let newCardName = e.target.value;
        if (/\d/.test(newCardName)) {
            console.log("Zawiera cyfry");
            return;
        }
        dispatch({
            type: 'changeCardName',
            newCardName
        });
    };

    const handleCardNumber = (e:any): void => {
        let newCardNumber = e.target.value.replace(/\s/g, '');

        if (newCardNumber.length > 16) {
            console.log("Za długi input");
            e.target.value = e.target.value.slice(0, 16);
            newCardNumber = e.target.value;
        }

        if (isNaN(newCardNumber)) {
            console.log("Is not a number");
            return;
        }

        findCardCompany(newCardNumber);
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

        //send data to react context
        dispatch({
            type: 'changeCardNumber',
            newCardNumber
        });
    };

    const findCardCompany = (cardNumber: string) : void => {
        const firstDigit: number = parseInt(cardNumber[0]);
        let newCardCompany: string = '';
        let newMaxLength: number = 16;

        if (cardNumber === '') {
            newCardCompany = CARD_TYPES.amex.name;
            newMaxLength = CARD_TYPES.amex.length;
        }

        if (firstDigit === 3) {

        } else  if (firstDigit === 4) {
            newCardCompany = CARD_TYPES.visa.name;
            newMaxLength = CARD_TYPES.visa.length;
        }

        if (cardCompany !== newCardCompany) {
            setMaxLength(newMaxLength);

            dispatch({
                type: 'changeCardCompany',
                newCardCompany
            });
        }
    };

    return (
        <Container>
            <Label>
                <LabelText>{label}</LabelText>
                <Input type="text" onChange={e => handleChange(e)} maxLength={maxLength + 3} onFocus={() => showCardBack()} onBlur={() => hideCardBack()}/>
            </Label>
        </Container>
    )
};

export default FormTextInput;