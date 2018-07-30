
const INITIAL_STATE = {
    outlets: 0,
    wifi: 0,
    coffee: 0,
    food: 0,
    loft: 0,
    vibe: 0,
    drinks: 0,
    addCafeData: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'selectModalAttr':
            return { ...state, [action.payload.attr]: action.payload.selection };
        case 'clearModalAttr':
            return { ...state, [action.payload.attr]: 0 };
        case 'map_select':
            return { ...state, addCafeData: action.payload};
        case 'add_cafe_done':
            return INITIAL_STATE;
        case 'map_clear':
            return INITIAL_STATE;
        default:
            return state;
    }
};
