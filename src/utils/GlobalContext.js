import React, { createContext, useState, useContext } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({children}) => {
    // State for subjects
    const [subjects, setSubjects] = useState([]);

    // State for students
    const [students, setStudents] = useState([]);

    // State for user
    const [users, setUsers] = useState([]);

    // Context value
    const contextValue = {
        subjects,
        setSubjects,
        students,
        setStudents,
        users,
        setUsers,
    };

    console.log(contextValue);

    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>;
};

// Custom hook to use the context
const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { AppProvider, useAppContext };
