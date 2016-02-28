import { GOAL } from '../store/reducers/selectplayersreducer.js';

export function goal(player, teamId, position) {
    return {
        type:GOAL,
        data: {
            player,
            teamId,
            position
        }
    }
}