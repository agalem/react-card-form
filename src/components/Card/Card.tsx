import React from "react";
import styled from "styled-components";
import CardNumberDisplay from "../CardNumberDisplay/CardNumberDisplay";
import img from '../../assets/shape-geometric.jpg';

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);

  transition: transform 1s;
  transform-style: preserve-3d;
`;

const CardContainer = styled.div`
  position: relative;
  top: -40px;
  margin: 0 auto;
  width: 380px;
  height: 270px;
  float: left;
  perspective: 500px;
  &:active ${Content} {
      transform: rotateY( -180deg ) ;
      transition: transform 0.5s;
  }
`;

const Front = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   background-image: url(${img});
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
    space?: boolean
}

const CardRow = styled.div<CardRowProps>`
    width: (100% - 40px);
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.space ? 'space-between' : 'center'}
    padding: 0px 20px;
`;

const Back = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   line-height: 300px;
   text-align: center;
   font-size: 10px;
   border-radius: 5px;
   backface-visibility: hidden;
   background-image: url(${img});
   color: white;
   transform: rotateY( -180deg );
`;

const CardChip = styled.div`
    height: 40px;
    width: 40px;
    background-color: black;
`;

const CardCompany = styled.div`
    height: 40px;
    width: 150px;
    background-color: black;
`;

const Card: React.FC  = () => {
    return (
        <CardContainer >
            <Content>
                <Front>
                    <CardRow space>
                        <CardChip/>
                        <CardCompany/>
                    </CardRow>
                    <CardRow>
                        <CardNumberDisplay/>
                    </CardRow>
                    <CardRow/>
                </Front>

                <Back>
                    This is a back text
                </Back>
            </Content>
        </CardContainer>
    )
}

export default Card;