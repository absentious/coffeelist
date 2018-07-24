export default (state = null, action) => {
    switch (action.type) {
        case 'select':
            return action.payload;
        default:
            return state;
    }
};
