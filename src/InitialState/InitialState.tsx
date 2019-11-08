interface InitialDataInterface {
    cardNumber: string,
    cardHolder: string,
    cardDate: string,
    cardCvv: string
}

export const initialState: InitialDataInterface = {
    cardNumber: '',
    cardHolder: '',
    cardDate: '',
    cardCvv: ''
};