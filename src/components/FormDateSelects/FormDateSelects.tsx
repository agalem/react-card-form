import React from "react";
import styled from "styled-components";
import FormSelect from "../FormSelect/FormSelect";

const RowSection = styled.div`
    display: flex;
    flex-direction: row;
`;

const Label = styled.label`
    display: grid;
    grid-template-rows: 23px 60px;
    font-size: ${props => props.theme.label.fontsize};
    font-weight: ${props => props.theme.label.fontWeight};
    user-select: none;
`;

const FormDateSelects: React.FC = () => {
    return (
        <Label>
            Expiration Date
            <RowSection>
                <FormSelect addMargin={true} label={'Month'} type={'month'}/>
                <FormSelect addMargin={false} label={'Year'} type={'year'}/>
            </RowSection>
        </Label>
    )
};

export default FormDateSelects;