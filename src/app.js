import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
require('es6-promise').polyfill();


// Provider is a top-level component that wrapps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.


ReactDom.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);



