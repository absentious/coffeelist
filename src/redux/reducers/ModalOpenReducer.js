
const INITIAL_STATE = {
    open: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'open_modal':
            return true;
        case 'close_modal':
            return false;
        default:
            return state;
    }
};
