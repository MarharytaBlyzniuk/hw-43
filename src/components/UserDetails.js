import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const UserDetails = ({ userId }) => {
    const { users } = useContext(AppContext);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div>
            <h3>Details for {user.name}</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age} </p>
            <p>country : {user.country}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetails;
