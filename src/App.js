import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const App = () => {
    const [randomUserId, setRandomUserId] = useState(null);

    useEffect(() => {
        // Функция для генерации случайного ID пользователя
        const getRandomUserId = () => {
            const userIds = [1, 2, 3, 4, 5, 6]; // Замените на реальные ID пользователей
            return userIds[Math.floor(Math.random() * userIds.length)];
        };
        setRandomUserId(getRandomUserId());
    }, []); // Пустой массив зависимостей: выполнится только при первом рендере


    return (
        <div>
            <h1>React Context Demo</h1>
            <UserList />
            {randomUserId && <UserDetails userId={randomUserId} />}
        </div>
    );
};

export default App;
