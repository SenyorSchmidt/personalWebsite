import React, { createContext, useState, useContext } from 'react';

// Create the Context
export const ModeContext = createContext();

// Create the Provider Component
export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark'); // Default language

    const changeMode = (theme) => {
            setMode(theme);
    };

    return (
        <ModeContext.Provider value={{ mode, changeMode }}>
            {children}
        </ModeContext.Provider>
    );
};

// Create a custom hook for consuming the context
export const useMode = () => {
    return useContext(ModeContext);
};
