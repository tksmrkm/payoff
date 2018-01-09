import { connect } from 'react-redux';
import { switchTabs } from '~/actions';
import Tabs from '~/components/Tabs';

const mapStateToProps = (state) => {
    return {tabs: state.tabs};
};

const mapDispatchToProps = dispatch => {
    return {
        onSwitchTabs: id => {
            dispatch(switchTabs(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
