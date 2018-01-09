import { connect } from 'react-redux';
import { removeDealing } from '~/actions';
import ListNode from '~/components/Dealings/ListNode';

const mapDispatchToProps = dispatch => {
    return {
        onClickRemove: id => {
            dispatch(removeDealing(id))
        }
    };
};

export default connect(null, mapDispatchToProps)(ListNode);
