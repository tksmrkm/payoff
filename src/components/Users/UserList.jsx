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
        const userobj = dealings
        .map(dealing => {
            const retval = {
                expense: 0,
                payment: 0
            };
            const value = parseInt(dealing.value);
            if (dealing.user_id === user.id) {
                retval.expense = value;
            }

            retval.payment = value / (users.length - dealing.ignore_users.length);

            if (dealing.ignore_users.includes(user.id)) {
                retval.payment = 0;
            }
            return retval;
        })
        .reduce((prev, current) => {
            if (current) {
                return {
                    expense: prev.expense + current.expense,
                    payment: prev.payment + current.payment
                };
            }

            return {
                expense: 0,
                payment: 0
            };
        }, {
            expense: 0,
            payment: 0
        });

        user.expense = userobj.expense;

        user.gain = userobj.payment - userobj.expense;

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
