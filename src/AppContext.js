import React, { createContext, useState } from 'react';

// Создание Context
export const AppContext = createContext();

// Провайдер для передачи данных
export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Ivan', age: 45, email: 'ivan@gmail.com', country: 'US' },
        { id: 2, name: 'Anna', age: 32, email: 'anna@gmail.com', country: 'UA'  },
        { id: 3, name: 'Egor', age: 68, email: 'egor@gmail.com', country: 'LT' },
        { id: 4, name: 'Olga', age: 17, email: 'olga@gmail.com', country: 'UA'},
        { id: 5, name: 'Viktor', age: 50, email: 'viktor@gmail.com', country: 'LV' },
        { id: 6, name: 'Elena', age: 23, email: 'elena@gmail.com', country: 'EST' },
    ]);

    return (
        <AppContext.Provider value={{ users, setUsers }}>
            {children}
        </AppContext.Provider>
    );
};
