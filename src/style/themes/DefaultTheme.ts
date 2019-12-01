import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
    backgroundColors: {
        body: '#fff',
        card: '#000'
    },
    font: {
        sizeLg: '25px',
        sizeSm: '18px',
        color: '#fff',
        weight: 500,
        titleSize: '0.85rem',
        titleSizeNoContent: '1rem',
        titleColor: "#D5D9DB"
    },
    input: {
        color: {
            darkgray: '#1a3b5d'
        },
        border: {
            color: '#ced6e0'
        },
        fontsize: {
            small: '18px'
        },
        fontFamily: '"Source Sans Pro", sans-serif'
    },
    label: {
        color: {
            darkgray: '#1a3b5d',
            error: '#ff0000'
        },
        fontsize: '14px',
        fontWeight: 500
    },
    button: {
        fontsize: '22px',
        fontWeight: 500,
        fontFamily: '"Source Sans Pro", sans-serif',
        boxShadow: '3px 10px 20px 0px rgba(35, 100, 210, 0.3)',
        color: '#fff',
        background: '#2364d2',
        radius: '5px'
    }
};

export { mainTheme }