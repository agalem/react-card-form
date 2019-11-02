import React from "react";
import styled from "styled-components";

interface NumberProps {
    readonly addSpace: boolean
}

interface LabelProps {
    readonly showBorder?: boolean
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

const Number = styled.span<NumberProps>`
    display: inline-block;
    margin-right: ${props => props.addSpace ? '31px' : '1px'}
`;

const cardNumber  = "################";

type CardNumberProps = {
    showBorder: boolean
}

const CardNumber = (props: CardNumberProps) => {
    return(
        <Label showBorder={props.showBorder}>
            {cardNumber.split('').map((elem, index) => {
                return (
                    <Number key={index} addSpace={((index + 1) % 4 === 0 && index !== 15)}>
                        #
                    </Number>
                )
            })}
        </Label>
    )
};

export default CardNumber;