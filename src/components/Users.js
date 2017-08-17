import React from 'react';
import { connect } from 'react-redux';
import UserList from './UserList';
import AddUserForm from './AddUserForm';

const Users = () => {
    return (
        <div>
            <UserList />
            <AddUserForm />
        </div>
    );
};

export default connect()(Users);
