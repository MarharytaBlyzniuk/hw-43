import React, { useContext } from 'react';
import { AppContext} from '../AppContext';

const UserList = () => {
    const { users } = useContext(AppContext);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.age} years old , {user.country} ({user.email}) </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList ;
