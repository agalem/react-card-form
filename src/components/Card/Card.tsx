import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
    width: 200px;
    height: 100px;
    background-color: ${props => props.theme.backgroundColors.card};
    position: relative;
    top: -50px;
    margin: 0 auto;
`;

const Card: React.FC  = () => {
    return (
        <CardBox>

        </CardBox>
    )
}

export default Card;