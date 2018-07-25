export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'get_cafe_data':
            //console.log(action);
            return action.payload;
        default:
            return state;
    }
};
