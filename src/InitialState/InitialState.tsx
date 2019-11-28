import { DEFAULT_CARD_LENGTH, CARD_TYPES } from "../utils/cardTypes";

interface InitialDataInterface {
    cardNumber: string,
    cardName: string,
    cardCompany: string,
    cardMonth: string,
    cardYear: string,
    cardCvv: string,
    cardNumberLength: number,
    isBackVisible: boolean,
    activeBorder: string,
    formErrors: object
}

export const initialState: InitialDataInterface = {
    cardNumber: '',
    cardName: '',
    cardCompany: CARD_TYPES.mastercard.name,
    cardMonth: 'MM',
    cardYear: 'YY',
    cardCvv: '',
    cardNumberLength: CARD_TYPES.mastercard.length,
    isBackVisible: false,
    activeBorder: '',
    formErrors: {CardNumber: [], CardName: []}
};