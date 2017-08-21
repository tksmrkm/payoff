import React from 'react';
import { connect } from 'react-redux';
import UserList from './UserList';
import AddForm from './AddForm';

const Users = () => {
    return (
        <div>
            <AddForm />
            <UserList />
        </div>
    );
};

export default connect()(Users);
