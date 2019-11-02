import React from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import Form from "../Form/Form";

const CentralBox = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 200px;
    position: relative;
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