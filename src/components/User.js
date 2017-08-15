import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import UserList from './UserList';

const User = ({onSubmitAddUser, users}) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                onSubmitAddUser(input.value);
                input.value = '';
            }}>
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button
                    type="submit"
                >Add User</button>
            </form>
            <UserList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {users: state.users};
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAddUser: name => {
            dispatch(addUser(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
