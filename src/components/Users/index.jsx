import React from 'react';
import UserList from '~/containers/Users/UserList';
import AddForm from '~/containers/Users/AddForm';

const Users = () => {
    return (
        <div>
            <AddForm />
            <UserList />
        </div>
    );
};

export default Users;
