import React from "react";
import styled from "styled-components";

import FormInput from "../FormInput/FormInput";

const Container = styled.div`
    margin-top: 30px;
    width: 700px;
`;

const Form: React.FC = () => {
    return (
        <Container>
            <FormInput/>
        </Container>
    )
};

export default Form;