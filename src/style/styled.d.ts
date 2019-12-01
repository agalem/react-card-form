import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundColors: {
            body: string,
            card: string
        },
        font: {
            sizeLg: string,
            sizeSm: string,
            color: string,
            weight: number,
            titleSize: string,
            titleSizeNoContent: string,
            titleColor: string
        },
        input: {
            color: {
                darkgray: string
            },
            border: {
                color: string
            },
            fontsize: {
                small: string
            },
            fontFamily: string
        },
        label: {
            color: {
                darkgray: string,
                error: string,
            },
            fontsize: string,
            fontWeight: number
        },
        button: {
            fontsize: string,
            fontWeight: number,
            fontFamily: string
            boxShadow: string,
            color: string,
            background: string,
            radius: string
        }
    }
}