const SELECT = 'select';

export default function reducer(state = {}, action = {}) {
    switch (action.type) {
        // do reducer stuff
        default: return state;
    }
}

const INITIAL_STATE = {};

// reducer
export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type) {
        case SELECT:
            return action.payload;
        default:
            return state;
    }
};

// action
export function selectCafe(cafeID) {
    return { type: SELECT, cafeID };
}