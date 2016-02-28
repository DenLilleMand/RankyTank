export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initialState = {
    signedin: false
};

export function user(state = initialState, action = {}) {
    switch(action.type) {
        case LOGIN:

            break;
        case LOGOUT:

            break;
        default:
            return state;
    }
}
