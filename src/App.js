import React, { Component } from 'react';
import { switchTabs } from './actions';
import User from './components/User';
import {
    AppBar,
    Tab,
    Tabs
} from 'material-ui';

export default function App() {
    console.count('Render');
    return (
        <User />
    );
}