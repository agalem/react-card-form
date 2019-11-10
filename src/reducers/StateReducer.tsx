export const reducer = (state: any, action: any)  => {
    switch(action.type) {
        case 'changeCardNumber':
            return {
                ...state,
                cardNumber: action.newCardNumber
            };
        case 'changeCardName':
            return {
                ...state,
                cardName: action.newCardName
            };
        case 'changeCardCompany':
            return {
                ...state,
                cardCompany: action.newCardCompany
            };
        case 'changeCardNumberLength':
            return {
                ...state,
                cardNumberLength: action.newCardNumberLength
            };
        case 'changeCardMonth':
            return {
                ...state,
                cardMonth: action.newCardMonth
            };
        case 'changeCardYear':
            return {
                ...state,
                cardYear: action.newCardYear
            };
        case 'setBackVisible':
            return {
                ...state,
                isBackVisible: action.isBackVisible
            };
        default:
            return state;
    }
};