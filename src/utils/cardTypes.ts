export const CVV_LENGTH: number = 3;
export const DEFAULT_CARD_LENGTH: number = 16;
export const DEFAULT_CARD_NAME: string = '';

export const CARD_TYPES = {
    amex: {
        name: 'American Express',
        length: 15
    },
    visa: {
        name: 'Visa',
        length: 16
    },
    diners: {
        name: 'Diners Club',
        length: 14
    },
    diners_mastercard: {
        name: 'Diners Club Mastercard',
        length: 16
    },
    discover: {
        name: 'Discover',
        length: 16
    },
    mastercard: {
        name: 'Mastercard',
        length: 16
    }
};