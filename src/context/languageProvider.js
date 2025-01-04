import React, { createContext, useState, useContext } from 'react';

// Create the Context
export const LanguageContext = createContext();

// Create the Provider Component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Create a custom hook for consuming the context
export const useLanguage = () => {
    return useContext(LanguageContext);
};
