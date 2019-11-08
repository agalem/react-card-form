import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {useStateValue} from "../../contexts/StateContext";

import amex from "../../assets/images/amex.png";
import dinersclub from "../../assets/images/dinersclub.png";
import discover from "../../assets/images/discover.png";
import mastercard from "../../assets/images/mastercard.png";
import troy from "../../assets/images/troy.png";
import unionpay from "../../assets/images/unionpay.png";
import visa from "../../assets/images/visa.png";

const Container = styled.div`
    height: 45px;
    line-height: 100%;
    padding: 0;
    margin: 0;
`;

const Logo = styled.img`
    height: 45px;
    width: auto;
`;

const SlidingLogoElement: React.FC = () => {
    const [{cardNumber}]: any = useStateValue();
    const [previousCompanyName, setPreviousCompanyName] = useState("American Express");
    const [companyName, setCompanyName] = useState("American Express");

    const getCompanyLogo = (number: string) => {
        const firstDigit = number[0];
        if (firstDigit === '4') {
            return visa;
        } else if (firstDigit === '4') {
            return mastercard;
        } else if (firstDigit === '6') {
            return discover;
        }
        return amex;
    };

    const getCompanyName = (number: string) => {
        const firstDigit = number[0];
        if (firstDigit === '4') {
            return "Visa logo";
        } else if (firstDigit === '4') {
            return "MasterCard logo";
        } else if (firstDigit === '6') {
            return "Discover logo";
        }
        return "American Express logo";
    };

    useEffect(() => {
        async function f() {
            console.log("Previous: ", previousCompanyName);
            console.log("Current: ", companyName);
        }
        f();
    }, [companyName, previousCompanyName]);

    return (
        <Container>
            <Logo src={getCompanyLogo(cardNumber)} alt={getCompanyName(cardNumber)} />
        </Container>
    )
};

export default SlidingLogoElement;