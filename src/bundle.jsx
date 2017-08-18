import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { render } from 'react-dom';
import App from './App';
import reducer from './reducers';
import persistState from 'redux-localstorage'

const enhancer = compose(persistState(null, {key: 'payoff'}));

let store = createStore(reducer, enhancer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
