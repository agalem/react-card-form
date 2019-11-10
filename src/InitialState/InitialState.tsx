interface InitialDataInterface {
    cardNumber: string,
    cardName: string,
    cardCompany: string,
    cardMonth: string,
    cardYear: string,
    cardCvv: string,
    cardNumberLength: number,
    isBackVisible: boolean
}

export const initialState: InitialDataInterface = {
    cardNumber: '',
    cardName: '',
    cardCompany: 'American Express',
    cardMonth: 'MM',
    cardYear: 'YY',
    cardCvv: '',
    cardNumberLength: 16,
    isBackVisible: false
};