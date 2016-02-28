import { CHOOSE_PLAYER, RANDOM_PLAY, FAIR_PLAY } from '../store/reducers/selectplayersreducer.js';

export function choosePlayer(player, tableId, position) {
    return {
        type: CHOOSE_PLAYER,
        data: {
            player,
            tableId,
            position
        }
    }
}


export function randomPlay() {
    return {
        type: RANDOM_PLAY
    }
}

export function fairPlay() {
    return {
        type: FAIR_PLAY
    }
}