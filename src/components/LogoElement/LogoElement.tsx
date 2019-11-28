import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";
import { CARD_TYPES } from "../../utils/cardTypes";

import amex from "../../assets/images/amex.png";
import dinersclub from "../../assets/images/dinersclub.png";
import discover from "../../assets/images/discover.png";
import mastercard from "../../assets/images/mastercard.png";
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

const LogoElement: React.FC = () => {
    const [{cardCompany}]: any = useStateValue();
    const [cardCompanyLogo, setCardCompanyLogo] = useState(amex);
    const [cardCompanyAlt, setCardCompanyAlt] = useState("American Express logo");

    const getCompanyLogo = (name: string) => {
        let companyLogo = '';
        if (name === CARD_TYPES.visa.name) {
            companyLogo =  visa;
        } else if (name === CARD_TYPES.mastercard.name) {
            companyLogo = mastercard;
        } else if (name === CARD_TYPES.discover.name) {
            companyLogo =  discover;
        } else if (name === CARD_TYPES.amex.name) {
            companyLogo = amex;
        } else if (name === CARD_TYPES.diners.name) {
            companyLogo = dinersclub;
        } else if (name === CARD_TYPES.diners_mastercard.name) {
            companyLogo = dinersclub;
        }
        return companyLogo;
    };

    useEffect(() => {
        const newCompanyLogo = getCompanyLogo(cardCompany);
        const newCompanyAlt = `${cardCompany} logo`;

        console.log("Card company ", newCompanyAlt);

        setCardCompanyLogo(newCompanyLogo);
        setCardCompanyAlt(newCompanyAlt);

    }, [cardCompany]);

    return (
        <Container>
            <Logo src={cardCompanyLogo} alt={cardCompanyAlt} />
        </Container>
    )
};

export default LogoElement;