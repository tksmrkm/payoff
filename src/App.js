import React, { Component } from 'react';
import { switchTabs } from './actions';
import Users from './components/Users';
import Tabs from './components/Tabs';
import Dealings from './components/Dealings';

export default function App() {
    console.count('Render');
    return (
        <Tabs>
            <Users />
            <Dealings />
        </Tabs>
    );
}