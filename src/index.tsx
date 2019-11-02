import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./style/global/GlobalStyle";
import {mainTheme} from "./style/themes/DefaultTheme";
import "./index.css";

ReactDOM.render(
    <Fragment>
        <GlobalStyle theme={mainTheme} />
        <ThemeProvider theme={mainTheme}>
            <App />
        </ThemeProvider>
    </Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
