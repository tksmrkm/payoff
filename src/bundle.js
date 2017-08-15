import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import App from './App';
import reducer from './reducers';

const initState = {
    tabs: 0,
    users: [],
    dealings: []
};

let store = createStore(reducer, initState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
