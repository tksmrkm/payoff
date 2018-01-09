import React from 'react';
import { main } from '~/styles';
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
            <header>
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
            </header>
            <main style={main}>
                {children[tabs]}
            </main>
        </div>
    );
};

export default Tabs;
