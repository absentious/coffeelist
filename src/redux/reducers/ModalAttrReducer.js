
const INITIAL_STATE = {
    outlets: '',
    wifi: '',
    coffee: '',
    food: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'selectModalAttr':
            return { ...state, [action.payload.attr]: action.payload.selection };
        default:
            return state;
    }
};
