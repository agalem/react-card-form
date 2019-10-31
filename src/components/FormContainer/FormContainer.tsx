import React from "react";
import styled from "styled-components";

import Card from "../Card/Card";

const CentralBox = styled.div`
    width: 360px;
    height: 200px;
    background-color: red;
    margin: 0 auto;
    margin-top: 200px;
`;

const FormContainer: React.FC = () => {
    return (
        <CentralBox>
            <Card/>
            Form
        </CentralBox>
    )
};

export default FormContainer;