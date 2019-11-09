import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";

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

interface ContainerProps {
    addSpace: boolean,
    isUserInput: boolean
}

const Container = styled.div<ContainerProps>`
    display: inline-block;
    width: 16px;
    height: 26px;
    overflow: hidden;
    margin-right: ${props => props.addSpace ? '31px' : '1px'};
    ${TopElement} {
        transform: ${props => props.isUserInput ? 'translateY(-120%) skew(-20deg, 0deg) scale(0.8)' : 'none'};
        transition: transform 0.3s;
    }
    ${BottomElement} {
        transform: ${props => props.isUserInput ? 'skew(0deg, 0deg) scale(1)' : 'skew(20deg, 0deg) scale(0.8)'};
        top: ${props => props.isUserInput ? '-25px' : '0'};
        transition: all 0.3s;
    }
`;

const CardNumber = (props: CardNumberProps) => {

    const defaultNumber  = new Array(16).fill("");
    const [ {cardNumber}]: any = useStateValue();
    const numberToShow = cardNumber.split("").concat(defaultNumber.slice(cardNumber.length));

    return(
        <Label showBorder={props.showBorder}>
            {numberToShow.map((elem: string, index: number) => {
                return (
                    <Container key={index} addSpace={((index + 1) % 4 === 0 && index !== 15)} isUserInput={elem !== ""}>
                        <TopElement>
                            #
                        </TopElement>
                        <BottomElement>
                            {index < 4 || index > 11 ? elem : "*"}
                        </BottomElement>
                    </Container>
                )
            })}
        </Label>
    )
};

export default CardNumber;