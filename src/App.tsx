import React from 'react';
import FormContainer from "./components/FormContainer/FormContainer";
import { StateProvider } from "./contexts/StateContext";
import { initialState } from "./InitialState/InitialState";
import { reducer } from "./reducers/StateReducer";

const App: React.FC = () => {
  return (
      <StateProvider reducer={reducer} initialState={initialState}>
        <FormContainer/>
      </StateProvider>
      );
}

export default App;
