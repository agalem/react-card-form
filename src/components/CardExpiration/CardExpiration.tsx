import React from "react";
import {Container, Title, DisplayArea} from "../../assets/card-styles";

type CardExpirationProps = {
    showBorder: boolean
}

const CardExpiration = (props: CardExpirationProps) => {
    return (
        <Container narrow showBorder={props.showBorder}>
            <Title>Expires</Title>
            <DisplayArea>
                <span>02</span>
                /
                <span>22</span>
            </DisplayArea>
        </Container>
    )
};

export default CardExpiration;