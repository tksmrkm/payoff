import React from 'react';
import UserListNode from './UserListNode';
import { connect } from 'react-redux';
import { toggleUser } from '../actions';
import List from 'material-ui/List';
import { wrapper } from '../styles';

const UserList = ({users, onClickToggle}) => {
    let id = 0;

    const userListNodes = users.map(user => {
        return (
            <UserListNode
                user={user}
                key={user.id}
            />
        );
    });

    return (
        <List style={wrapper}>
            {userListNodes}
        </List>
    )
};

const mapStateToProps = (state) => {
    return {users: state.users};
};

const mapDispatchToProps = dispatch => {
    return {
        onClickToggle: id => {
            dispatch(toggleUser(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
