import { connect } from 'react-redux';
import {
    selectUser
} from '~/actions';
import SelectUser from '~/components/Dealings/SelectUser';

const mapStateToProps = ({users, add_dealing_form}) => {
    return {
        users,
        add_dealing_form
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSelectUser: (event) => {
            dispatch(selectUser(event.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser);
