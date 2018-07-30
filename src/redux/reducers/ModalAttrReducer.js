
const INITIAL_STATE = {
    outlets: '',
    wifi: '',
    coffee: '',
    food: '',
    loft: '',
    vibe: '',
    drinks: '',
    addCafeData: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'selectModalAttr':
            return { ...state, [action.payload.attr]: action.payload.selection };
        case 'clearModalAttr':
            return { ...state, [action.payload.attr]: '' };
        case 'map_select':
            return { ...state, addCafeData: action.payload};
        case 'map_clear':
            return INITIAL_STATE;
        default:
            return state;
    }
};
