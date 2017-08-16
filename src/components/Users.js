import React from 'react';
import { connect } from 'react-redux';
import UserList from './UserList';
import AddUserForm from './AddUserForm';

const Users = () => {
    return (
        <div>
            <AddUserForm />
            <UserList />
        </div>
    );
};

export default connect()(Users);
