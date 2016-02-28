import { combineReducers } from 'redux';
import { user } from './userreducer.js';
import { selectPlayers } from './selectplayersreducer.js';
import { players, filterPlayers } from './playerreducer.js';

const rootReducer = combineReducers({
    user,
    selectPlayers,
    players,
    filterPlayers
});

export default rootReducer;