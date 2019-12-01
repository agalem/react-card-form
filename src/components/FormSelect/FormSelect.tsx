import React from "react";
import styled from "styled-components";

import { useStateValue } from "../../contexts/StateContext";

import dropdown from "../../assets/images/dropdown.png";

interface ContainerProps {
    addMargin: boolean
}

const Container = styled.div<ContainerProps>`
    display: inline-block;
    width: 100%;
    margin-right: ${props => props.addMargin ? "20px" : "0px"}
    
    @media only screen and (min-width: 700px) {
        margin-right: 20px;
    }
`;

const Select = styled.select`
    -webkit-appearance: none;
    background-color: #fff;
    background-image: url(${dropdown});
    background-size: 12px;
    background-position: 90% center;
    background-repeat: no-repeat;
    padding: 5px 30px
    height: 60px;
    width: 100%;
    border: 1px solid ${props => props.theme.input.border.color};
    font-size: 18px;
`;

const Option = styled.option`
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2rem;
    padding: 0px 2px 1px;
    &:disabled {
        color: graytext;
    }
`;

type FormSelectProps = {
    readonly label: string,
    readonly type: string,
    readonly addMargin: boolean
}

const FormSelect = (props: FormSelectProps) => {

    const [data, dispatch] : any = useStateValue();
    const {label, type, addMargin} = props;

    const getOptions = () => {
        const options = [];

        if (type === 'month') {
            for (let i = 1; i <= 12; ++i) {
                options.push(i < 10 ? `0${i}` : `${i}`);
            }
            return options;

        } else if (type === 'year') {
            const year = new Date().getFullYear();
            for(let i = 0; i <= 16; ++i) {
                options.push(`${year + i}`);
            }
            return options;
        }
        return [];
    };

    const handleChange = (e: any) => {
        const value = e.target.value;
        if (type === 'month') {
            dispatch({
                type: 'changeCardMonth',
                newCardMonth: value
            });
        } else if (type === 'year') {
            dispatch({
                type: 'changeCardYear',
                newCardYear: value
            });
        }
    };

    const handleFocus = () => {
        dispatch({
            type: 'setBorder',
            newActiveBorder: 'CardExpiration'
        });
    };

    const handleBlur = () => {
        dispatch({
            type: 'setBorder',
            newActiveBorder: ''
        });
    };

    return (
        <Container addMargin={addMargin}>
            <Select defaultValue={label} onChange={(e) => handleChange(e)} onFocus={() => handleFocus()} onBlur={() => handleBlur()}>
                <Option value={label} disabled={true}>{label}</Option>
                {getOptions().map((elem, index) => {
                    return (
                        <Option key={index} value={elem}>{elem}</Option>
                    )
                })}
            </Select>
        </Container>
    )
};

export default FormSelect;