import { connect } from 'react-redux';
import { toggleUser } from '~/actions';
import UserList from '~/components/Users/UserList';

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
