import React from "react";
import styled from "styled-components";

import FormInput from "../FormTextInput/FormTextInput";
import FormSelect from "../FormSelect/FormSelect";
import FormTextInput from "../FormTextInput/FormTextInput";
import FormDateSelects from "../FormDateSelects/FormDateSelects";

const Container = styled.div`
    margin-top: 30px;
    width: 100%;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
`;

const Form: React.FC = () => {
    return (
        <Container>
            <FormInput type={'CardNumber'} label={'Card Number'}/>
            <FormInput type={'CardName'} label={'Card Name'} maxLength={80}/>
            <Row>
                <FormDateSelects />
                <FormTextInput type={'CardCVV'} label={'CVV'} />
            </Row>
        </Container>
    )
};

export default Form;