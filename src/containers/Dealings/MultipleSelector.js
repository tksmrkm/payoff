import { connect } from 'react-redux';
import {
    chooseIgnoreUsers
} from '~/actions';
import MultipleSelector from '~/components/Dealings/MultipleSelector';

const mapStateToProps = ({users, add_dealing_form}) => {
    return {
        users,
        add_dealing_form
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChooseIgnoreUsers: (event) => {
            dispatch(chooseIgnoreUsers(event.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultipleSelector);
