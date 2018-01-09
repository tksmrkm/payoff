import React from 'react';
import ListNode from '~/containers/Users/ListNode';
import List from 'material-ui/List';
import { wrapper } from '~/styles';

const sum = (prev, current) => {
    return prev + current;
};

const UserList = ({users, onClickToggle}) => {
    let id = 0;

    const nodes = users.map(user => {
        return (
            <ListNode
                user_id={user.id}
                key={user.id}
            />
        );
    });

    return (
        <List style={wrapper}>
            {nodes}
        </List>
    )
};

export default UserList;
