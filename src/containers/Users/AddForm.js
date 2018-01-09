import { connect } from 'react-redux';
import { addUser, resetUsers } from '~/actions';
import AddForm from '~/components/Users/AddForm';

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAddUser: name => {
            dispatch(addUser(name));
        },
        onResetUsers: () => {
            if (confirm('Reset Users')) {
                dispatch(resetUsers());
            }
        }
    };
};

export default connect(null, mapDispatchToProps)(AddForm);
