const INITIAL_STATE = {
    lat: 37,
    lng: -122
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_location':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};
