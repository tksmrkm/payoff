import React from 'react';
import { connect } from 'react-redux';
import { switchTabs } from '../actions';
import { main } from '../styles';
import {
    AppBar,
    Tab,
    Tabs as BaseTabs
} from 'material-ui';

const Tabs = ({tabs, onSwitchTabs, children}) => {
    const onChange = (event, value) => {
        onSwitchTabs(value);
    };

    return (
        <div>
            <main style={main}>
                {children[tabs]}
            </main>
            <footer>
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
                </BaseTabs>
            </footer>
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
