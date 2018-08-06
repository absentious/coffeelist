export default (state = null, action) => {
    switch (action.type) {
        case 'select':
            return action.payload;
        case 'clear_select':
            return null;
        default:
            return state;
    }
};
