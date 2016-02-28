import Immutable from 'immutable';
export const KEEPER = 'KEEPER';
export const ATTACKER = 'ATTACKER';
export const RIGHT_TEAM = 'RIGHT_TEAM';
export const LEFT_TEAM = 'LEFT_TEAM';
export const CHOOSE_PLAYER = 'CHOOSE_PLAYER';
export const FAIR_PLAY = 'FAIR_PLAY';
export const RANDOM_PLAY = 'RANDOM_PLAY';
export const GOAL = 'GOAL';

const initialState = {
    herpderp: "okay",
    [RIGHT_TEAM]: new Immutable.Map(),
    [LEFT_TEAM]: new Immutable.Map()
};

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export function selectPlayers(state = initialState, action = {}) {
    let data = {};
    switch(action.type) {
        case CHOOSE_PLAYER:
            data = action.data;
            return Object.assign({}, state, {
                [data.tableId]: state[data.tableId].set(data.position, data.player)
            });
            break;
        case RANDOM_PLAY:
                let team1 = state[LEFT_TEAM].toArray();
                let team2 = state[RIGHT_TEAM].toArray();
                let shuffledArray = shuffle(team1.concat(team2));
                let leftTeam = new Immutable.Map({[ATTACKER]:shuffledArray[0], [KEEPER]:shuffledArray[1]});
                let rightTeam = new Immutable.Map({[ATTACKER]:shuffledArray[2], [KEEPER]:shuffledArray[3]});
                return Object.assign({}, state, {
                    [LEFT_TEAM]:leftTeam,
                    [RIGHT_TEAM]: rightTeam
                });
            break;
        case GOAL:
            data = action.data;
            return Object.assign({}, state, {
                [data.teamId]: state[data.teamId].update(data.position,function(player) {
                    debugger;
                    player.goals = player.goals + 1;
                    return player;
                }),
                herpderp: "okay"
            });
            break;
        case FAIR_PLAY:
            return state;
            break;
        default:
            return state;
    }
}