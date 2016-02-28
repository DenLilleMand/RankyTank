import Immutable from 'immutable';
export const GET_ALL_PLAYERS = 'GET_ALL_PLAYERS';
export const CHANGE_PLAYER_FILTER = 'CHANGE_PLAYER_FILTER';

import { initialState } from './playersdata.js';

const initialFilterState = {
    filter: ""
};

export function players(state = initialState, action = {}) {
    console.log('players reducer was called');
    switch(action.type) {
        case "HERPDERP":
            console.log('herpderp32');
            return state;
        break;
        case GET_ALL_PLAYERS:

            break;


        default:
            return state;
    }
}


export function filterPlayers(state = initialFilterState, action = {}) {
    console.log('reducer was called');
    console.log('action:', action);
    if(!action) {
        return state;
    }
    switch(action.type) {
        case CHANGE_PLAYER_FILTER:
            console.log('change player filter reducer');
            return Object.assign({}, state, {
                filter: action.data
            });
            break;
        default:
            return state;
    }
}