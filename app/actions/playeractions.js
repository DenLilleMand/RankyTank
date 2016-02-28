import { CHANGE_PLAYER_FILTER } from '../store/reducers/playerreducer.js';


export function changePlayerFilter(data) {
    return {
        type: CHANGE_PLAYER_FILTER,
        data
    }
}


