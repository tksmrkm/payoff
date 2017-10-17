import React from 'react';
import { switchTabs } from './actions';
import Users from './components/Users';
import Tabs from './components/Tabs';
import Dealings from './components/Dealings';
import Navbar from './components/Navbar';
import {
    Grid
} from 'material-ui';

export default function App() {
    return (
        <Grid container>
            <Navbar />
            <Tabs>
                <Users />
                <Dealings />
            </Tabs>
        </Grid>
    );
}