import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import Application from './components/app.js';
import Profile from './components/profile.js';
import Front from './components/front.js';
import SelectPlayers from './components/selectplayers/selectplayers.js';
import Field from './components/field/field.js';

export default function () {
    return (
        <Router history={ hashHistory }>
            <Route path={'/'} component={Application}>
                <IndexRoute component={Front}/>}
                <Route path='/profile' component={Profile} />
                <Route path='/selectplayers' component={SelectPlayers} />
                <Route path='/field' component={Field} />
            </Route>
        </Router>
    );
}
