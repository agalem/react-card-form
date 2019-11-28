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

const Letter = styled.span`
    position: relative;
    animation: ${slideLeft} 0.3s;
`;

type CardNameProps = {
    showBorder: boolean
}

const CardName = (props: CardNameProps) => {
    const [hasContent, setHasContent] = useState(false);
    const [name, setName] = useState([]);
    const {showBorder} = props;

    const [ {cardName } ] : any = useStateValue();

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

    useEffect(() => {
        if (showBorder) {
            setHasContent(true);
            return;
        }
        if (name.length >= 1) setHasContent(true);
        else setHasContent(false);

    }, [showBorder, name]);

    return (
        <Container showBorder={props.showBorder}>
            <Title hasContent={hasContent}>Card Holder</Title>
            {hasContent &&
                <DisplayArea>
                    {name.map((elem: string, index: number) => {
                        return (
                            <Letter key={index}>
                                {elem.toUpperCase()}
                            </Letter>
                        )
                    })}
                </DisplayArea>
            }
        </Container>
    )
};

export default CardName;