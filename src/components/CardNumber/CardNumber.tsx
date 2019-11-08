import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";

import SlidingTextElement from "../SlidingTextElement/SlidingTextElement";

interface LabelProps {
    showBorder?: boolean
}

const Label = styled.label<LabelProps>`
    line-height: 100%;
    cursor: pointer;
    padding: 7px 10px;
    border: ${props => props.showBorder ? '1px solid white' : 'none'};
    border-radius: 4px;
    color: ${props => props.theme.font.color};
    font-size: ${props => props.theme.font.sizeLg};
    font-weight: ${props => props.theme.font.weight}
    text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
    margin-left: -15px;
    white-space: nowrap;
`;

type CardNumberProps = {
    readonly showBorder: boolean
}

const CardNumber = (props: CardNumberProps) => {

    const defaultNumber  = new Array(16).fill("");
    const [ {cardNumber}]: any = useStateValue();
    const numberToShow = cardNumber.split("").concat(defaultNumber.slice(cardNumber.length));

    return(
        <Label showBorder={props.showBorder}>
            {numberToShow.map((elem: string, index: number) => {
                return (
                    <SlidingTextElement key={index} topElementContent={"#"} bottomElementContent={index < 4 || index > 11 ? elem : "*"} containerWidth={"16px"} containerHeight={"26px"} addElementSpace={((index + 1) % 4 === 0 && index !== 15)} isElementUserInput={elem !== ""}/>
                )
            })}
        </Label>
    )
};

export default CardNumber;