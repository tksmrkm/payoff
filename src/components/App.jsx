import React from 'react';
import Users from './Users';
import Tabs from './Tabs';
import Dealings from './Dealings';
import Navbar from './Navbar';
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