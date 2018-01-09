import { connect } from 'react-redux';
import {
    addDealing,
    resetDealings,
    bindNameElement,
    bindValueElement,
    chooseIgnoreUsers
} from '~/actions';
import AddForm from '~/components/Dealings/AddForm';

const mapStateToProps = ({users, menus, add_dealing_form}) => {
    return {
        users,
        menus,
        add_dealing_form
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAddDealing: (user_id, name, value, ignore_users) => {
            dispatch(addDealing(user_id, name, value, ignore_users));
        },
        onResetDealings: () => {
            if (confirm('Reset Dealings')) {
                dispatch(resetDealings());
            }
        },
        handleBindNameElement: (element) => {
            dispatch(bindNameElement(element));
        },
        handleBindValueElement: (element) => {
            dispatch(bindValueElement(element));
        },
        handleResetIgnoreUsers: () => {
            dispatch(chooseIgnoreUsers([]));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(AddForm);
