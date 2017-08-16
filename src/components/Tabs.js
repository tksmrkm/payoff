import React from 'react';
import { connect } from 'react-redux';
import { switchTabs } from '../actions';
import { wrapper } from '../styles';
import {
    Tab,
    Tabs as BaseTabs
} from 'material-ui';

const Tabs = ({tabs, onSwitchTabs, children}) => {
    const onChange = (event, value) => {
        onSwitchTabs(value);
    };

    return (
        <div>
            <BaseTabs
                centered={true}
                fullWidth={true}
                value={tabs}
                onChange={onChange}
            >
                <Tab
                    label="Users"
                />
                <Tab
                    label="Dealings"
                />
                <Tab
                    label="Result"
                />
            </BaseTabs>
            <div style={wrapper}>
                {children[tabs]}
            </div>
        </div>
    );
};

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
