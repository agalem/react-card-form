import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CVV_LENGTH} from "../../utils/cardTypes";
import {ERROR_MSGS} from "../../utils/errorMsgs";

import FormInput from "../FormTextInput/FormTextInput";
import FormTextInput from "../FormTextInput/FormTextInput";
import FormDateSelects from "../FormDateSelects/FormDateSelects";

const FormContainer = styled.form`
    margin-top: 30px;
    width: 100%;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px 100px;
    
    @media only screen and (min-width: 700px) {
        grid-template-columns: 60% 40%;
        grid-template-rows: 100px;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 55px;
    background: ${props => props.theme.button.background};
    border: none;
    border-radius: ${props => props.theme.button.radius};
    font-size: ${props => props.theme.button.fontsize};
    font-weight: ${props => props.theme.button.fontWeight};
    font-family: ${props => props.theme.button.fontFamily};
    box-shadow: ${props => props.theme.button.boxShadow};
    color: ${props => props.theme.button.color};
    margin-top: 20px;
    cursor: pointer;
`;

const Form: React.FC = () => {
    const [{cardCvv, cardMonth, cardYear, cardNumber, cardName, formErrors}]: any = useStateValue();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const formValidity = {
            cardName: true,
            cardNumber: true,
            cardCvv: true,
            cardYear: true,
            cardMonth: true
        };

        console.log(formErrors);
        if(formErrors.CardName.length !== 0) {
            for (let errorText of formErrors.CardName) {
                toast.error(errorText);
            }
            if (formValidity.cardName) {
                formValidity.cardName = false
            }
        }
        if(formErrors.CardNumber.length !== 0) {
            for (let errorText of formErrors.CardNumber) {
                toast.error(errorText);
            }
            if (formValidity.cardNumber) {
                formValidity.cardNumber = false
            }
        }
        if(cardNumber.length === 0) {
            toast.error(ERROR_MSGS.cardNumer.nongiven);
            if (formValidity.cardNumber) {
                formValidity.cardNumber = false
            }
        }
        if (cardName.length === 0) {
            toast.error(ERROR_MSGS.cardName.nongiven);
            if (formValidity.cardName) {
                formValidity.cardName = false
            }
        }
        if (cardCvv.length === 0) {
            toast.error(ERROR_MSGS.cardCvv.nongiven);
            if (formValidity.cardCvv) {
                formValidity.cardCvv = false;
            }
        }
        if (cardCvv.length !== 0 && cardCvv.length !== CVV_LENGTH) {
            toast.error(ERROR_MSGS.cardCvv.invalid);
            if (formValidity.cardCvv) {
                formValidity.cardCvv = false;
            }
        }
        if(cardMonth === "MM"){
            toast.error(ERROR_MSGS.cardMonth.nongiven);
            if (formValidity.cardMonth) {
                formValidity.cardMonth = false;
            }
        }
        if(cardYear === "YY") {
            toast.error(ERROR_MSGS.cardYear.nongiven);
            if (formValidity.cardYear) {
                formValidity.cardYear = false;
            }
        }

        if (formValidity.cardName && formValidity.cardNumber &&
        formValidity.cardYear && formValidity.cardMonth && formValidity.cardCvv) {
            toast.success("All data is valid 💪")
        }

    };

    return (
        <FormContainer>
            <FormInput type={'CardNumber'} label={'Card Number'}/>
            <FormInput type={'CardName'} label={'Card Name'} maxLength={80}/>
            <Row>
                <FormDateSelects />
                <FormTextInput type={'CardCVV'} label={'CVV'} maxLength={3}/>
            </Row>
            <Button disabled={false} type={'submit'} onClick={(e) => handleSubmit(e)}>Submit</Button>
            <ToastContainer position="bottom-right"/>
        </FormContainer>
    )
};

export default Form;