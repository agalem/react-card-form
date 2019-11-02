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
            titleColor: string
        }
    }
}