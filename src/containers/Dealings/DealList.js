import { connect } from 'react-redux';
import DealList from '~/components/Dealings/DealList';

const mapStateToProps = ({dealings}) => {
    return {
        dealings
    };
};

export default connect(mapStateToProps)(DealList);
