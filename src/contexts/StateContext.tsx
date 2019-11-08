import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext({});

type StateProviderProps = {
    reducer: any,
    initialState: any,
    children: any
}

export const StateProvider = ({reducer, initialState, children}: StateProviderProps) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);