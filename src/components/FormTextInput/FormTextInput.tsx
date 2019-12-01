import React, { useState } from "react";
import styled from "styled-components";
import { useStateValue } from "../../contexts/StateContext";
import { CARD_TYPES, CVV_LENGTH, DEFAULT_CARD_LENGTH, DEFAULT_CARD_NAME } from "../../utils/cardTypes";
import {ERROR_MSGS} from "../../utils/errorMsgs";
import {toast} from "react-toastify";

const Container = styled.div`
    width: 100%;
`;

const Label = styled.label`
    font-size: ${props => props.theme.label.fontsize};
    font-weight: ${props => props.theme.label.fontWeight};
    color: ${props => props.theme.input.color.darkgray};
    width: 100%;
    display: block;
    user-select: none;
    margin-bottom: 20px;
`;

interface InputProps {
    isInvalid: boolean
}

const LabelText = styled.span<InputProps>`
    display: inline-block;
    margin-bottom: 10px;
    color: ${props => props.isInvalid ? props.theme.label.color.error : props.theme.label.color.darkgray};
`;

const Input = styled.input<InputProps>`
    max-width: 100% !important;
    width: calc(100% - 32px);
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border-width: ${props => props.isInvalid ? '2px' : '1px'};
    border-style: solid;
    border-color: ${props => props.isInvalid ? '#ff0000' : '#ced6e0'};
    transition: all 0.3s ease-in-out;
    font-size: ${props => props.theme.input.fontsize.small};
    padding: 5px 15px;
    background: none;
    color: ${props => props.isInvalid ? '#ff0000' : '#1a3b5d'};;
    font-family: ${props => props.theme.input.fontFamily};
`;

type FormTextInputProps = {
    readonly type: string,
    readonly label: string,
    readonly maxLength?: number
}

const FormTextInput = (props: FormTextInputProps) => {
    const [maxLength, setMaxLength] = useState(props.maxLength ? props.maxLength : 16);
    const [isInvalid, setInvalid] = useState(false);
    const [{cardCompany, formErrors}, dispatch]: any = useStateValue();
    const {type, label} = props;

    const handleChange = (e: any): void => {
        if (type === 'CardNumber') {
            handleCardNumber(e);
        } else if (type === 'CardName') {
            handleCardName(e);
        } else if (type === 'CardCVV') {
            handleCardCvv(e);
        }
    };

    const addError = (errorType: string) => {
        if (formErrors[type].indexOf(errorType) === -1) {
            formErrors[type].push(errorType);
            dispatch({
                type: 'setFormErrors',
                formErrors
            });
        }
    };

    const removeError = () => {
        if (formErrors[type].length >= 1) {
            formErrors[type] = [];
            dispatch({
                type: 'setFormErrors',
                formErrors
            });
        }
    };

    const handleCardCvv = (e:any): void => {
        let newCardCvv = e.target.value.replace(/\s/g, '');

        if (isInvalid) setInvalid(false);

        if (newCardCvv.length > CVV_LENGTH) {
            toast.warn(ERROR_MSGS.cardCvv.tooLong);
            e.target.value = e.target.value.slice(0, CVV_LENGTH);
            newCardCvv = e.target.value;
        }

        if (isNaN(newCardCvv)) {
            toast.error(ERROR_MSGS.cardCvv.wrongCharacters);
            setInvalid(true);
            return;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(newCardCvv)) {
            toast.error(ERROR_MSGS.cardCvv.wrongCharacters);
            setInvalid(true);
            return;
        }

        dispatch({
            type: 'changeCardCvv',
            newCardCvv
        });

    };

    const handleBlur = () => {
        if (type === 'CardCVV') {
            dispatch({
                type: 'setBackVisible',
                isBackVisible: false
            })
        }
        dispatch({
            type: 'setBorder',
            newActiveBorder: ''
        });
    };

    const handleFocus = () => {
        if (type === 'CardCVV') {
            dispatch({
                type: 'setBackVisible',
                isBackVisible: true
            })
        }
        dispatch({
            type: 'setBorder',
            newActiveBorder: type
        });
    };

    const handleCardName = (e: any): void => {
        let newCardName = e.target.value;

        if (isInvalid) setInvalid(false);
        removeError();

        if (/\d/.test(newCardName)) {
            const errorText = ERROR_MSGS.cardName.wrongCharacters;
            toast.error(errorText);
            setInvalid(true);
            addError(errorText);
            return;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(newCardName)) {
            const errorText =  ERROR_MSGS.cardName.wrongCharacters;
            toast.error(errorText);
            setInvalid(true);
            addError(errorText);
            return;
        }
        dispatch({
            type: 'changeCardName',
            newCardName
        });
    };

    const handleCardNumber = (e:any): void => {
        let newCardNumber = e.target.value.replace(/\s/g, '');

        if (isInvalid) setInvalid(false);
        removeError();

        if (newCardNumber.length > 16) {
            toast.warn(ERROR_MSGS.cardNumer.tooLong);
            e.target.value = e.target.value.slice(0, 16);
            newCardNumber = e.target.value;
        }

        if (isNaN(newCardNumber)) {
            const errorText: string = ERROR_MSGS.cardNumer.wrongCharacters;
            toast.error(errorText);
            setInvalid(true);
            addError(errorText);
            return;
        }

        findCardCompany(newCardNumber);

        //remove alphabetic signs
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '');
        //add space every 4 elements to the input
        e.target.value  = e.target.value.replace(/(.{4})/g, '$1 ').trim();

        //send data to react context
        dispatch({
            type: 'changeCardNumber',
            newCardNumber
        });
    };

    const findCardCompany = (cardNumber: string) : void => {
        const firstDigit: number = parseInt(cardNumber[0]);
        let newCardCompany: string = DEFAULT_CARD_NAME;
        let newMaxLength: number = DEFAULT_CARD_LENGTH;

        if(cardNumber === '') {
            return;
        }

        switch(firstDigit) {
            case 2: {
                newCardCompany = CARD_TYPES.mastercard.name;
                newMaxLength = CARD_TYPES.mastercard.length;
                break;
            }
            case 3: {
                if (cardNumber.length > 1 && parseInt(cardNumber[1]) === 0) {
                    newCardCompany = CARD_TYPES.diners.name;
                    newMaxLength = CARD_TYPES.diners.length;
                    break;
                }
                newCardCompany = CARD_TYPES.amex.name;
                newMaxLength = CARD_TYPES.amex.length;
                break;
            }
            case 4: {
                newCardCompany = CARD_TYPES.visa.name;
                newMaxLength = CARD_TYPES.visa.length;
                break;
            }
            case 5: {
                if (cardNumber.length > 1 && (parseInt(cardNumber[1]) >= 1 && parseInt(cardNumber[1]) <= 5)) {
                    newCardCompany = CARD_TYPES.mastercard.name;
                    newMaxLength = CARD_TYPES.mastercard.length;
                    break;
                }
                newCardCompany = CARD_TYPES.diners_mastercard.name;
                newMaxLength = CARD_TYPES.diners_mastercard.length;
                break;
            }
            case 6: {
                newCardCompany = CARD_TYPES.discover.name;
                newMaxLength = CARD_TYPES.discover.length;
                break;
            }
            default: {
                newCardCompany = CARD_TYPES.amex.name;
                newMaxLength = CARD_TYPES.amex.length;
                break;
            }
        }

        if (newCardCompany === CARD_TYPES.visa.name && cardNumber.length === newMaxLength - 2) {
            const regex = new RegExp('^4[0-9]{12}(?:[0-9]{1})?$');
            console.log("Visa " + regex.test(cardNumber));
            setInvalid(!regex.test(cardNumber));
        }

        if (cardNumber.length === newMaxLength) {
            console.log("Validation ");

            let regex: RegExp = new RegExp('');

            switch(newCardCompany) {
                case CARD_TYPES.amex.name: {
                    regex = new RegExp('^3[47][0-9]{13}$');
                    break;
                }
                case CARD_TYPES.diners.name: {
                    regex = new RegExp('^3(?:0[0-5]|[68][0-9])[0-9]{11}$');
                    break;
                }
                case CARD_TYPES.diners_mastercard.name: {
                    regex = new RegExp('^5{15}$');
                    break;
                }
                case CARD_TYPES.discover.name: {
                    regex = new RegExp('^6(?:011|5[0-9]{2})[0-9]{12}$');
                    break;
                }
                case CARD_TYPES.mastercard.name: {
                    regex = new RegExp('^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$');
                    break;
                }
                case CARD_TYPES.visa.name: {
                    regex = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
                    break;
                }
            }

            setInvalid(!regex.test(cardNumber));
            if(!regex.test(cardNumber)) {
                const errorMsg = ERROR_MSGS.cardCompany.nonValid + newCardCompany + " card";
                toast.error(errorMsg);
                addError(errorMsg);
            } else {
                removeError()
            }
        }

        if (cardCompany !== newCardCompany) {
            setMaxLength(newMaxLength);

            dispatch({
                type: 'changeCardCompany',
                newCardCompany
            });
            dispatch({
                type: 'changeCardNumberLength',
                newCardNumberLength: newMaxLength
            });
        }
    };

    return (
        <Container>
            <Label>
                <LabelText isInvalid={isInvalid}>{label}</LabelText>
                <Input type="text"  isInvalid={isInvalid}  onChange={e => handleChange(e)} maxLength={maxLength + 3} onFocus={() => handleFocus()} onBlur={() => handleBlur()}/>
            </Label>
        </Container>
    )
};

export default FormTextInput;