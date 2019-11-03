import React from "react";
import styled from "styled-components";

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

const CvvNumber = "1234";

const CardCVV: React.FC = () => {
    return (
        <Container>
            <CvvTitle>CVV</CvvTitle>
            <CvvArea>
                {CvvNumber.split('').map((elem, index) => {
                    return (
                        <span key={index}>
                            *
                        </span>
                    )
                })}
            </CvvArea>
        </Container>
    )
};

export default CardCVV;