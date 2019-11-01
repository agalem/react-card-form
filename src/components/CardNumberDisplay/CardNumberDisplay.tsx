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
    font-size: ${props => props.theme.font.size};
`;

const Number = styled.span<NumberProps>`
    display: inline-block;
    margin-right: ${props => props.addSpace ? '15px' : '1px'}
`;

const cardNumber  = "################".split('');

const getElementData = (e: Object) => {
    console.log(e);
}

const CardNumberDisplay: React.FC = () => {
    return(
        <Label showBorder onClick={e => getElementData(e)}>
            {cardNumber.map((elem, index) => {
                return (
                    <Number key={index} addSpace={((index + 1) % 4 === 0 && index !== 15)}>
                        #
                    </Number>
                )
            })}
        </Label>
    )
};

export default CardNumberDisplay