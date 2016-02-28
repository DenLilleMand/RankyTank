import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configurestore.js';
import createRoutes from './approuter.js';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import Moment from 'moment';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        { createRoutes() }
    </Provider>
), document.getElementById('root'));
