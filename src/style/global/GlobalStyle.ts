import styled, {createGlobalStyle} from "styled-components";
import {mainTheme} from "../themes/DefaultTheme";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.backgroundColors.body};
    }
`;