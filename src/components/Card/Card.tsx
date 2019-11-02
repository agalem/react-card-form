import React from "react";
import styled from "styled-components";
import CardNumber from "../CardNumber/CardNumber";
import CardHolder from "../CardHolder/CardHolder";
import CardExpiration from "../CardExpiration/CardExpiration";
import backgroundImg from "../../assets/images/background.jpeg";
import chipImg from "../../assets/images/chip.png";
import logoImg from "../../assets/images/amex.png";

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);

  transition: transform 1s;
  transform-style: preserve-3d;
`;

const CardContainer = styled.div`
  position: relative;
  top: -40px;
  margin: 0 auto;
  max-width: 430px;
  height: 270px;
  width: 100%;
  perspective: 500px;
  &:active ${Content} {
      transform: rotateY( -180deg ) ;
      transition: transform 0.5s;
  }
`;

const Back = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   background-image: url(${backgroundImg});
   line-height: 300px; 
   color: #03446A;
   text-align: center;
   font-size: 10px;
   border-radius: 5px;
   backface-visibility: hidden;
   display: grid;
   grid-template-rows: 90px 90px 90px;
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

const Front = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   line-height: 300px;
   text-align: center;
   font-size: 10px;
   border-radius: 5px;
   backface-visibility: hidden;
   background-image: url(${backgroundImg});
   color: white;
   transform: rotateY( -180deg );
   display: grid;
   grid-template-rows: 90px 90px 90px;
`;

const CardChip = styled.img`
    width: 60px;
    height: auto;
`;

const CardCompany = styled.img`
    height: 45px;
    width: auto;
`;

const CardBand = styled.div`
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 19, 0.8);
    margin: 0;
    margin-top: 20px;
`;

const Card: React.FC  = () => {
    return (
        <CardContainer >
            <Content>
                <Front>
                    <CardRow space>
                        <CardChip src={chipImg} alt={"Card chip"} />
                        <CardCompany src={logoImg} alt={"Card logo"}/>
                    </CardRow>
                    <CardRow>
                        <CardNumber showBorder={false}/>
                    </CardRow>
                    <CardRow space>
                        <CardHolder showBorder={false}/>
                        <CardExpiration showBorder={false}/>
                    </CardRow>
                </Front>

                <Back>
                    <CardRow edgeTouching>
                        <CardBand/>
                    </CardRow>
                    <CardRow></CardRow>
                    <CardRow></CardRow>
                </Back>
            </Content>
        </CardContainer>
    )
}

export default Card;