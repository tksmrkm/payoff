import React, { Component } from 'react';
import { switchTabs } from './actions';
import User from './components/User';
import Tabs from './components/Tabs';

export default function App() {
    console.count('Render');
    return (
        <Tabs>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in fugiat saepe asperiores magni repellendus omnis mollitia ratione similique aperiam nobis, ullam, tempore, earum ipsa deserunt reiciendis officia alias provident.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cum molestiae nisi expedita animi doloribus architecto, odio, et sint quam quasi, eius, facilis aliquid. Dicta excepturi cupiditate et totam iure!
            </p>
        </Tabs>
    );
}