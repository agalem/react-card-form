import React  from "react";
import styled from "styled-components";
import { Container, Title, DisplayArea } from "../../style/card-styles";
import { useStateValue } from "../../contexts/StateContext";

const Slash = styled.span`
    display: inline-block;
    margin: 0 5px;
`;

type CardExpirationProps = {
    readonly showBorder: boolean,
}

const CardExpiration = (props: CardExpirationProps) => {

    const [{cardMonth, cardYear}]: any = useStateValue();

    return (
        <Container narrow showBorder={props.showBorder}>
            <Title hasContent={true}>Expires</Title>
            <DisplayArea>
                <span >{cardMonth}</span>
                <Slash>/</Slash>
                <span >{cardYear}</span>
            </DisplayArea>
        </Container>
    )
};

export default CardExpiration;