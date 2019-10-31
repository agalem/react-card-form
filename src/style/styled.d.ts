import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundColors: {
            body: string,
            card: string
        }
    }
}