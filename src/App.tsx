import React from 'react';
import styled from 'styled-components';
import { StateProvider } from "./contexts/StateContext";
import { initialState } from "./InitialState/InitialState";
import { reducer } from "./reducers/StateReducer";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";

const FormContainer = styled.div`
    max-width: 800px;
    position: relative;
    top: 150px;
    background: #fff;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px;
    padding: 35px;
    padding-top: 180px;
    margin: 0 auto;
`;

const App: React.FC = () => {
  return (
      <StateProvider reducer={reducer} initialState={initialState}>
        <FormContainer>
            <Card/>
            <Form/>
        </FormContainer>
      </StateProvider>
      );
};

export default App;
