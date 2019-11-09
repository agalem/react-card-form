import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {Container, Title, DisplayArea} from "../../style/card-styles";
import { useStateValue } from "../../contexts/StateContext";

const slideLeft = keyframes`
    0% {
        left: 5px;
    }
    100% {
        left: 0;
    }
`;

const HolderNameLetter = styled.span`
    position: relative;
    animation: ${slideLeft} 0.3s;
`;

type CardHolderProps = {
    showBorder: boolean
}

const CardHolder = (props: CardHolderProps) => {
    const [hasContent, setHasContent] = useState(false);
    const [name, setName] = useState([]);

    const [ {cardName} ] : any = useStateValue();

    useEffect(() => {
        if (cardName.length === 22) {
            setName(cardName.substring(0, cardName.length - 1).split("").concat("..."));
            return;
        } else if (cardName.length > 22) {
            console.log("Za długie");
            return;
        } else if (cardName.length > 0) {
            setHasContent(true);
            setName(cardName.split(""));
        } else {
            setHasContent(false);
            setName([]);
        }
    }, [cardName]);

    return (
        <Container showBorder={props.showBorder}>
            <Title hasContent={hasContent}>Card Holder</Title>
            {hasContent &&
                <DisplayArea>
                    {name.map((elem: string, index: number) => {
                        return (
                            <HolderNameLetter key={index}>
                                {elem.toUpperCase()}
                            </HolderNameLetter>
                        )
                    })}
                </DisplayArea>
            }
        </Container>
    )
};

export default CardHolder;