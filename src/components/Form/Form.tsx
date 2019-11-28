import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CVV_LENGTH} from "../../utils/cardTypes";

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
    background: ${props => props.disabled ? '#d3d3d3' : '#2364d2'};
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
    font-family: "Source Sans Pro", sans-serif;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
`;

const Form: React.FC = () => {
    const [{cardCompany, cardCvv, cardMonth, cardYear, cardNumber, cardNumberLength, cardName, formErrors}]: any = useStateValue();



    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formErrors);
        if(formErrors.CardName.length !== 0) {
            for (let errorText of formErrors.CardName) {
                toast.error(errorText);
            }
        }
        if(formErrors.CardNumber.length !== 0) {
            for (let errorText of formErrors.CardNumber) {
                toast.error(errorText);
            }
        }
        if (cardCvv.length !== CVV_LENGTH) {
            toast.error("Nieprawidłowy numer cvv");
        }
        if(cardMonth === "MM"){
            toast.error("Nie wybrano miesiąca ważności");
        }
        if(cardYear === "YY") {
            toast.error("Nie wybrano roku ważności");
        }
        console.log("Submit");
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