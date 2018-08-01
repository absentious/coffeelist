
const INITIAL_STATE = {
    open: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modal_open':
            console.log("modal open");
            console.log(action);
            return { open: true };
        case 'modal_close':
            return { open: false };
        default:
            return state;
    }
};
