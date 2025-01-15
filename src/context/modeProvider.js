import React, { createContext, useState, useContext } from 'react';

// Create the Context
export const DarkmodeContext = createContext();

// Create the Provider Component
export const DarkmodeProvider = ({ children }) => {
    const [darkmode, setDarkmode] = useState(true); // Default mode

    const changeDarkmode = (bool) => {
            setDarkmode(bool);
    };

    return (
        <DarkmodeContext.Provider value={{ darkmode, changeDarkmode }}>
            {children}
        </DarkmodeContext.Provider>
    );
};

// Create a custom hook for consuming the context
export const useDarkmode = () => {
    return useContext(DarkmodeContext);
};
