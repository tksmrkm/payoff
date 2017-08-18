import React from 'react';
import ListNode from './ListNode';
import { connect } from 'react-redux';
import { toggleUser } from '../../actions';
import List from 'material-ui/List';
import { wrapper } from '../../styles';

const sum = (prev, current) => {
    return prev + current;
};

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
        const total_to_pay = dealings
        .map(dealing => {
            if (dealing.ignore_users.includes(user.id)) {
                return 0;
            }

            return parseInt(dealing.value);
        })
        .reduce(sum, 0);

        const expense = dealings
        .map(dealing => {
            if (dealing.user_id === user.id) {
                return parseInt(dealing.value);
            }
            return 0;
        })
        .reduce(sum, 0);

        user.expense = expense;

        user.gain = (total_to_pay / users.length) - expense;

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
