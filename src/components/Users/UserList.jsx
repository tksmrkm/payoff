import React from 'react';
import ListNode from './ListNode';
import { connect } from 'react-redux';
import { toggleUser } from '../../actions';
import List from 'material-ui/List';
import { wrapper } from '../../styles';

const UserList = ({users, onClickToggle}) => {
    let id = 0;

    const nodes = users.map(user => {
        return (
            <ListNode
                user={user}
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

const mapStateToProps = ({users, dealings}) => {
    const changed = users
    .map(user => {
        user.expense = dealings
        .map(dealing => {
            if (dealing.user_id === user.id) {
                return parseInt(dealing.value);
            }
            return 0;
        })
        .reduce((prev, current) => {
            return prev + current;
        });

        return user;
    });

    return {
        users: changed
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickToggle: id => {
            dispatch(toggleUser(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
