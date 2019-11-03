import React from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import Form from "../Form/Form";

const CentralBox = styled.div`
    position: relative;
    top: 150px;
    background: #fff;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px;
    padding: 35px;
    padding-top: 180px;
`;

const FormContainer: React.FC = () => {
    return (
        <CentralBox>
            <Card/>
            <Form/>
        </CentralBox>
    )
};

export default FormContainer;