import { connect } from 'react-redux';
import { toggleUser, removeUser } from '~/actions';
import ListNode from '~/components/Users/ListNode';

const mapStateToProps = ({users}) => {
    return {
        users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickToggle: id => {
            dispatch(toggleUser(id))
        },
        onClickRemove: id => {
            dispatch(removeUser(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListNode);
