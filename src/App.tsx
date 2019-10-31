import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {mainTheme} from "./style/themes/DefaultTheme";
import FormContainer from "./components/FormContainer/FormContainer";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={mainTheme}>
          <FormContainer/>
      </ThemeProvider>
  );
}

export default App;
