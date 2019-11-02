import React from "react";
import styled from "styled-components";
import {Container, Title, DisplayArea} from "../../assets/card-styles";


const HolderNameLetter = styled.span`

`;

const holder = 'John Steward';

type CardHolderProps = {
    showBorder: boolean
}

const CardHolder = (props: CardHolderProps) => {
    return (
        <Container showBorder={props.showBorder}>
            <Title>Card Holder</Title>
            <DisplayArea>
                {holder.toUpperCase().split('').map((elem, index) => {
                    return (
                        <HolderNameLetter key={index}>
                            {elem}
                        </HolderNameLetter>
                    )
                })}
            </DisplayArea>
        </Container>
    )
}

export default CardHolder;