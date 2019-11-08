export const reducer = (state: any, action: any)  => {
    switch(action.type) {
        case 'changeCardNumber':
            return {
                ...state,
                cardNumber: action.newCardNumber
            };

        default:
            return state;
    }
};