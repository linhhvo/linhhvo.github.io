import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    theme: 'dark',
    scrollNeeded: false
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider
            value={{
                theme: state.theme,
                scrollNeeded: state.scrollNeeded
            }}>
            {children}
        </GlobalContext.Provider>);
};