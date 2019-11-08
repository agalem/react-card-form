import React from "react";
import styled from "styled-components";

import FormInput from "../FormInput/FormInput";

const Container = styled.div`
    margin-top: 30px;
    width: 100%;
`;

const Form: React.FC = () => {
    return (
        <Container>
            <FormInput type={'CardNumber'}/>
        </Container>
    )
};

export default Form;