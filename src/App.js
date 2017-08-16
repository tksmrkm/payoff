import React, { Component } from 'react';
import { switchTabs } from './actions';
import Users from './components/Users';
import Tabs from './components/Tabs';

export default function App() {
    console.count('Render');
    return (
        <Tabs>
            <Users />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cum molestiae nisi expedita animi doloribus architecto, odio, et sint quam quasi, eius, facilis aliquid. Dicta excepturi cupiditate et totam iure!
            </p>
        </Tabs>
    );
}