import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";

import CardNumber from "../CardNumber/CardNumber";
import CardName from "../CardName/CardName";
import CardExpiration from "../CardExpiration/CardExpiration";
import CardCVV from "../CardCVV/CardCVV";
import LogoElement from "../LogoElement/LogoElement";

import backgroundImg from "../../assets/images/background.jpeg";
import chipImg from "../../assets/images/chip.png";
import logoImg from "../../assets/images/amex.png";

interface ContentProps {
    isBackVisible: boolean
}

const Content = styled.div<ContentProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  transition: ${props => props.isBackVisible ? 'transform 1s' : 'transform 0.5s' };
  transform-style: preserve-3d;
  transform: ${props => props.isBackVisible ? 'rotateY( -180deg )' : ''};
`;

const CardContainer = styled.div`
  position: absolute;
  top: -100px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  max-width: 430px;
  height: 270px;
  width: 100%;
  perspective: 500px;
  
  @media only screen and (max-width: 400px) {
    overflow: hidden;
  }
`;

const Front = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   background: linear-gradient(
          rgba(0, 0, 0, 0.25), 
          rgba(0, 0, 0, 0.25)
        ), url(${backgroundImg});
   line-height: 300px; 
   text-align: center;
   border-radius: 5px;
   display: grid;
   grid-template-rows: 90px 90px 90px;
   backface-visibility: hidden !important;
`;

interface CardRowProps {
    space?: boolean,
    edgeTouching?: boolean
}

const CardRow = styled.div<CardRowProps>`
    width: (100% - 40px);
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.space ? 'space-between' : 'center'}
    padding: 0px ${props => props.edgeTouching ? '0px' : '22px'};
   
`;

const Back = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   background: linear-gradient(
          rgba(0, 0, 0, 0.25), 
          rgba(0, 0, 0, 0.25)
        ), url(${backgroundImg});
   line-height: 300px;
   text-align: center;
   border-radius: 5px;
   backface-visibility: hidden;
   display: grid;
   grid-template-rows: 90px 90px 90px;
   transform: rotateY( -180deg );
`;

const CardChip = styled.img`
    width: 60px;
    height: auto;
`;

interface CardCompanyProps {
    opacity?: string
}

const CardCompany = styled.img<CardCompanyProps>`
    height: 45px;
    width: auto;
    opacity: ${props => props.opacity ? props.opacity : '1'};
`;

const CardBand = styled.div`
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 19, 0.8);
    margin: 0;
    margin-top: 20px;
`;

const CardCompanyBackContainer = styled.div`
    height: 45px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-width: 100px;
    margin-left: auto;
    margin-right: 18px;
    width: 100%;
`;

const Card: React.FC  = () => {
    const [{isBackVisible, activeBorder}] : any = useStateValue();

    return (
        <CardContainer >
            <Content isBackVisible={isBackVisible}>
                <Front>
                    <CardRow space>
                        <CardChip src={chipImg} alt={"Card chip"} />
                        <LogoElement/>
                    </CardRow>
                    <CardRow>
                        <CardNumber showBorder={activeBorder === "CardNumber"}/>
                    </CardRow>
                    <CardRow space>
                        <CardName showBorder={activeBorder === "CardName"}/>
                        <CardExpiration showBorder={activeBorder === "CardExpiration"}/>
                    </CardRow>
                </Front>

                <Back>
                    <CardRow edgeTouching>
                        <CardBand/>
                    </CardRow>
                    <CardRow>
                        <CardCVV/>
                    </CardRow>
                    <CardRow edgeTouching>
                        <CardCompanyBackContainer>
                            <CardCompany opacity={'0.7'} src={logoImg} alt={"Card logo"}/>
                        </CardCompanyBackContainer>
                    </CardRow>
                </Back>
            </Content>
        </CardContainer>
    )
};

export default Card;