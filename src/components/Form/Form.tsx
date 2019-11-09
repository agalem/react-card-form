import React from "react";
import styled from "styled-components";

import FormInput from "../FormTextInput/FormTextInput";
import FormSelect from "../FormSelect/FormSelect";

const Container = styled.div`
    margin-top: 30px;
    width: 100%;
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
`;

const RowSection = styled.div`
    display: flex;
    flex-direction: row;
`;

const Label = styled.label`
    display: grid;
    grid-template-rows: 20px 60px;
    font-size: 14px;
    font-weight: 500;
    user-select: none;
`;

const LabelText = styled.span`
    display: inline-block;
    margin-bottom: 5px;
`;


const Form: React.FC = () => {
    return (
        <Container>
            <FormInput type={'CardNumber'} label={'Card Number'} maxLength={19}/>
            <FormInput type={'CardName'} label={'Card Name'} maxLength={80}/>
            <Row>
                <Label>
                    <LabelText>Expiration Date</LabelText>
                    <RowSection>
                        <FormSelect label={'Month'} type={'month'}/>
                        <FormSelect label={'Year'} type={'year'}/>
                    </RowSection>
                </Label>
            </Row>
        </Container>
    )
};

export default Form;