import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";

interface LabelProps {
    showBorder?: boolean
}

const Container = styled.div<LabelProps>`
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
    
    @media only screen and (min-width: 770px) {
        font-size: ${props => props.theme.font.sizeLg};
    }
`;

const TopElement = styled.span`
    display: block;
    position: relative;
    top: 0;
`;

const BottomElement = styled.span`
    display: block;
    position: relative;
    transform: skew(20deg, 0deg) scale(0.8);
`;

interface NumberContainerProps {
    addSpace: boolean,
    isUserInput: boolean
}

const NumberContainer = styled.div<NumberContainerProps>`
    display: inline-block;
    width: calc(100% / 15);
    height: 26px;
    position: relative;
    left: -10px;
    overflow: hidden;
    margin-right: ${props => props.addSpace ? '3px' : '0px'};
    ${TopElement} {
        transform: ${props => props.isUserInput ? 'translateY(-120%) skew(-20deg, 0deg) scale(0.8)' : 'none'};
        transition: transform 0.3s;
    }
    ${BottomElement} {
        transform: ${props => props.isUserInput ? 'skew(0deg, 0deg) scale(1)' : 'skew(20deg, 0deg) scale(0.8)'};
        top: ${props => props.isUserInput ? '-25px' : '0'};
        transition: all 0.3s;
    }
    
    @media only screen and (min-width: 300px) {
        left: -10px;
        margin-right: ${props => props.addSpace ? '8px' : '0px'};
    }
    
    @media only screen and (min-width: 400px) {
        width: 16px;
        height: 26px;
        left: 0px;
        margin-right: ${props => props.addSpace ? '31px' : '1px'};
    }
`;

type CardNumberProps = {
    readonly showBorder: boolean
}

const CardNumber = (props: CardNumberProps) => {
    const [ {cardNumber, cardNumberLength}]: any = useStateValue();
    const [defaultNumber, setDefaultNumber] = useState(new Array(cardNumberLength).fill(''));
    const [numberToShow, setNumberToShow] = useState(cardNumber.split("").concat(defaultNumber.slice(cardNumber.length)));

    useEffect(() => {
        setDefaultNumber(new Array(cardNumberLength).fill(""));
    }, [cardNumberLength]);

    useEffect(() => {
        setNumberToShow(cardNumber.split("").concat(defaultNumber.slice(cardNumber.length)));
    }, [cardNumber, defaultNumber]);

    return(
        <Container showBorder={props.showBorder}>
            {numberToShow.map((elem: string, index: number) => {
                return (
                    <NumberContainer key={index} addSpace={((index + 1) % 4 === 0 && index !== 15)} isUserInput={elem !== ""}>
                        <TopElement>
                            #
                        </TopElement>
                        <BottomElement>
                            {index < 4 || index > 11 ? elem : "*"}
                        </BottomElement>
                    </NumberContainer>
                )
            })}
        </Container>
    )
};

export default CardNumber;