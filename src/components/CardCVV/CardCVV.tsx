import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";
import { CVV_LENGTH } from "../../utils/cardTypes";

const CvvTitle = styled.p`
    width: 100%;
    height: 10px;
    font-size: 15px;
    font-weight: 500
    line-height: 10px;
    text-align: right;
    margin: 7px 0;
    color: #fff;
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CvvArea = styled.div`
    width: 100%;
    height: 45px;
    color: #1a3b5d;
    background-color: #fff;
    font-size: 18px;
    line-height: 100%;
    border-radius: 4px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    box-shadow: 0px 10px 20px -7px rgba(32, 56, 117, 0.35);
    position: relative;
    right: 5px;
`;

const TopElement = styled.span`
    display: block;
    position: relative;
    top: 0;
`;

const BottomElement = styled.span`
    display: block;
    position: relative;
    transform: scale(0.8);
`;

interface NumberContainerProps {
    isUserInput: boolean
}

const NumberContainer = styled.div<NumberContainerProps>`
    display: inline-block;
    width: 12px;
    height: 20px;
    overflow: hidden;
    ${TopElement} {
        transform: ${props => props.isUserInput ? 'translateY(-120%) skew(-20deg, 0deg) scale(0.8)' : 'none'};
        transition: transform 0.3s;
    }
    ${BottomElement} {
        transform: ${props => props.isUserInput ? 'scale(1)' : 'scale(0.8)'};
        top: ${props => props.isUserInput ? '-20px' : '0'};
        transition: all 0.3s;
    }
`;

const CardCVV: React.FC = () => {

    const defaultNumber = new Array(CVV_LENGTH).fill("*");
    const [ {cardCvv} ]: any = useStateValue();
    const numberToShow = cardCvv.split("").concat(defaultNumber.slice(cardCvv.length));

    return (
        <Container>
            <CvvTitle>CVV</CvvTitle>
            <CvvArea>
                {numberToShow.map((elem: string, index: number) => {
                    return (
                        <NumberContainer key={index} isUserInput={elem !== "*"}>
                            <TopElement>
                                *
                            </TopElement>
                            <BottomElement>
                                {elem}
                            </BottomElement>
                        </NumberContainer>
                    )
                })}
            </CvvArea>
        </Container>
    )
};

export default CardCVV;