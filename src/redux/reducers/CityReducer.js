const INITIAL_STATE = {
    name: "",
    lat: 0,
    lng: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_cafe_data':
            console.log(action.payload);
            return { name: action.payload.name, lat: action.payload.lat, lng: action.payload.lng };
        default:
            return state;
    }
};
